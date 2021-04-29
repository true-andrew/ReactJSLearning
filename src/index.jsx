import 'normalize.css'

import React from "react";
import ReactDOM from "react-dom"
import {BrowserRouter, Switch, Route} from "react-router-dom";

import {routes} from "./routes";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {routes.map((route, idx) => <Route key={idx} {...route}/>)}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);