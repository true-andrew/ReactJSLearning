import {handleActions} from 'redux-actions';
import {fromJS, Map} from 'immutable'

import {create, load, notify, send} from "actions/chats";

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

export const chatsReducer = handleActions({
  [load]: (state, action) => {
    const entries = action.payload.reduce((acc, item) => {
      acc[item._id] = item;
      return acc;
    }, {});
    return state.set('entries', fromJS(entries));
  },
  [send]: (state, action) => {
    const {chatId, ...message} = action.payload;
    return state.mergeIn(['entries', chatId, 'messages'], message);
  },
  [create]: (state, action) => {
    const {_id} = action.payload;
    return state.mergeIn(['entries', _id], fromJS(action.payload));
  },
  [notify]: (state, action) => {
    console.log(action.payload)
    const {chatId, notification} = action.payload;
    return state.mergeIn(['entries', `${chatId}`], fromJS({notification}));
  }
}, initialState);