import {send} from "actions/chats";

export const bot = store => next => action => {
  if (action.type === send.toString()) {
    const {chatId, author} = action.payload;
    if (author !== 'Robot') {
      setTimeout(()=>{
        store.dispatch(send({chatId ,author: 'Robot', text: `Hi, ${author}! I'm bot from bot.js`}))
      },1000);
    }
  }
  return next(action);
}