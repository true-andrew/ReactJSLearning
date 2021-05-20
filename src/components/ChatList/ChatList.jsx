import './ChatList.css'

import React, {Component} from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {IconButton, TextField} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export class ChatList extends Component {
  render() {
    const { chats, input, addChat, removeChat, handleChange, handleKeyUp, handleNavigate } = this.props;
    return (
      <List component="nav" aria-label="contacts">
        {chats.map((chat, idx)=>
            <div key={idx} className={chat.notification ? "chat-link": ""}>
              <ListItem button onClick={()=>{
                handleNavigate(`/chat/${chat.chatId}`)
              }}>
                <ListItemText primary={chat.name} />
                <IconButton onClick={removeChat(chat.chatId)}>
                  <HighlightOffIcon />
                </IconButton>
              </ListItem>
            </div>
        )}
        <ListItem>
          <TextField id="newChat" type="text" name='input' label='New chat' onChange={handleChange} onKeyUp={handleKeyUp} value={input}/>
          <IconButton color='primary' onClick={addChat}>
            <AddCircleIcon fontSize='large'/>
          </IconButton>
        </ListItem>
      </List>
    );
  }
}

