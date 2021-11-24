import React from "react";
import { Route, Switch } from "react-router-dom";
import { login } from "../auth/login";


const authRoutes = () => {
    return (
        <Switch>
            <Route exact path="/auth/login" component={login}></Route>
        </Switch>
    );
};

export default authRoutes;