import {handleActions} from 'redux-actions';
import {fromJS, Map} from 'immutable'

import {load} from "actions/chats";

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
  }
}, initialState);