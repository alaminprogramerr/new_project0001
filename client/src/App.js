import React from "react";
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import './utl/shards-dashboards.1.1.0.min.css'


import Login from './components/public/Login'
import Register from './components/public/Register'

import ProtectedRoute from './utl/ProtectedRoute'
import PublicRoute from './utl/PublicRoute'
export default () => (
  <Router>
    <div>
      {routes.map((route, index) => {
        return (
          <ProtectedRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
      <PublicRoute path="/login"  component={Login}/>
      <PublicRoute path="/register"  component={Register}/>
    </div>
  </Router>
);
