import 'normalize.css'

import React from "react";
import ReactDOM from "react-dom"
import {Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import {ConnectedRouter} from "connected-react-router";

import {routes} from "./routes";
import {store, history} from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map((route, idx) => <Route key={idx} {...route}/>)}
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);