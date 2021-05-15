import {createAction} from 'redux-actions';
import io from "socket.io-client";

const socket = io('http://localhost:3000');

export const load = createAction('[Chats] Load');
export const send = createAction('[Chats] Send');
export const create = createAction('[Chats] Create');
export const notify = createAction('[chats] Notify');

export const listen = () => (dispatch) => {
  fetch('http://localhost:3000/chat')
    .then((response) => response.json())
    .then((chats) => {
      dispatch(load(chats));
    });
  socket.on('new chat', (chat) => {
    dispatch(create(chat));
  });
  socket.on('chat message', (message) => {
    dispatch(send(message));
  })
}

export const createChat = (chatName) => {
  socket.emit('new chat', chatName);
};

export const sendMessage = (message) => {
  socket.emit('chat message', message);
};