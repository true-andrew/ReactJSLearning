import {createAction} from 'redux-actions';
import io from "socket.io-client";

const socket = io('http://localhost:3000');

export const load = createAction('[Chats] Load');
export const send = createAction('[Chats] Send');
export const create = createAction('[Chats] Create');
export const notify = createAction('[chats] Notify');

export const listen = (dispatch) => () => {
  socket.on('new chat', (chat) => {
    dispatch(create(chat));
  });
}

export const createChat = (chatName) => {
  socket.emit('new chat', chatName);
}