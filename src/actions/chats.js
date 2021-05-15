import {createAction} from 'redux-actions'

export const load = createAction('[Chats] Load');
export const send = createAction('[Chats] Send');
export const create = createAction('[Chats] Create');
export const notify = createAction('[chats] Notify');