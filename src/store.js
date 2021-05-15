import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

import {logger} from "redux-logger/src";
import {bot} from "middlewares/bot"

import {initReducer} from "reducers";

export const history = createBrowserHistory();

export const store = createStore(initReducer(history), applyMiddleware(logger, bot, routerMiddleware(history)));