import {notify, send} from "actions/chats";

export const bot = store => next => action => {
  if (action.type === send.toString()) {
    const {chatId, author} = action.payload;
    if (author !== 'Robot') {
      setTimeout(()=>{
        store.dispatch(send({chatId ,author: 'Robot', text: `Hi, ${author}! I'm bot from bot.js`}));
        store.dispatch(notify({chatId, notification: true}));
      },1000);
      setTimeout(()=>{
        store.dispatch(notify({chatId,notification:false}));
      },2000);
    }
  }
  return next(action);
}