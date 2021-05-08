import 'normalize.css'

import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";

import {routes} from "./routes";
import {store} from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {routes.map((route, idx) => <Route key={idx} {...route}/>)}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);