const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');
const cors = require('cors');

const Datastore = require('nedb');

const chats = new Datastore({
  filename: path.resolve(__dirname, 'chats.db'),
  autoload: true,
});

const profile = new Datastore({
  filename: path.resolve(__dirname, 'profile.db'),
  autoload: true,
});

app.use(express.json());
app.use(cors());

app.get('/chat', (req, res) => {
  chats.find({}, (err, docs) => {
    if (err) {
      return res.status(500).json({message: 'Unexpected error'});
    }
    res.json(docs);
  });
});

app.get('/profile', (req, res) => {
  profile.findOne({}, (err, doc) => {
    if (err) {
      return res.status(500).json({message: 'Unexpected error'});
    }
    res.json(doc);
  })
});

app.delete('/chat/:id', (req, res)=>{
  chats.remove({_id: req.params.id}, (err) => {
    if (err) {
      return res.status(500).json({message: 'Error while deleting'});
    }

    res.json({message: 'Successful deleting'});
  })
})

app.post('/profile', (req, res) => {
  profile.findOne({}, (err, doc) => {
    if (err) {
      return res.status(500).json({message: 'Unexpected error'});
    }

    if (doc) {
      profile.update({}, req.body, {}, (err, numReplaced) => {
        if (err || numReplaced <= 0) {
          return res.status(500).json({message: 'Unexpected error'});
        }

        return res.json({message: 'success'});
      });
    } else {
      profile.insert(req.body, (err, newDoc) => {
        if (err) {
          return res.status(500).json({message: 'Unexpected error'});
        }

        res.json({message: 'success'});
      })
    }
  });
});

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('new chat', (body) => {
    chats.insert({
      chatName: body,
      messages: [{author: "Robot", text: `Hello, this is chat ${body}`}]
    }, (err, newDoc) => {
      socket.broadcast.emit('new chat', newDoc);
      socket.emit('new chat', newDoc);
    });
  });

  socket.on('chat message', (body) => {
    const {chatId, ...message} = body;
    chats.update({_id: chatId}, {$push: {messages: message}}, {}, () => {
      socket.broadcast.emit('chat message', body);
      socket.emit('chat message', body);

      const botMsg = {chatId, author: 'Robot', text: `Hi, ${body.author}! I'm bot`};
      setTimeout(() => {
        chats.update({_id: chatId}, {$push: {messages: botMsg}}, {}, () => {
          socket.broadcast.emit('chat message', botMsg);
          socket.emit('chat message', botMsg);
        });
      }, 2000);
    });
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

//TODO заглушка