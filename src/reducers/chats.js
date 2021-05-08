import {handleActions} from 'redux-actions';
import {fromJS, Map} from 'immutable'

import {create, load, notify, send} from "actions/chats";

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

export const chatsReducer = handleActions({
  [load]: (state, action) => {
    return state.set('entries', fromJS({
      '1': {
        id: 1,
        messages: [
          {text: "Это первый чат", author: 'Robot'}
        ],
        chatName: 'First chat'
      },
      '2': {
        id: 2,
        messages: [
          {text: "Это второй чат", author: 'Robot'}
        ],
        chatName: 'Second chat'
      },
      '3': {
        id: 3,
        messages: [
          {text: "Это третий чат", author: 'Robot'}
        ],
        chatName: 'Third chat'
      }
    }));
  },
  [send]: (state, action) => {
    const {chatId, ...message} = action.payload;
    return state.mergeIn(['entries', chatId, 'messages'], message);
  },
  [create]: (state, action) => {
    const chatName = action.payload;
    const index = state.get('entries').size + 1;
    return state.mergeIn(['entries', `${index}`], fromJS(
      {
        id: index,
        messages: [{text: `Приветствую в чате ${chatName}`, author: 'Robot'}],
        chatName: chatName
      }
    ));
  },
  [notify]: (state, action) => {
    console.log(action.payload)
    const {chatId, notification} = action.payload;
    return state.mergeIn(['entries', `${chatId}`], fromJS({notification}));
  }
}, initialState);

//