
// from react
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { login } from "../auth/login";
// pages
import Home from "../views/home/home";
import { views } from "../views/views";
// routes

const IndexRoute = () => {
  return (
    <Switch>
      <Route path="/auth" component={login}></Route>
      <Route path="/home" component={views}></Route>
    </Switch>
  );
};

export default IndexRoute;