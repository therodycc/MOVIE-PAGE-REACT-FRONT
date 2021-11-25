import React from "react";
import { Route, Switch } from "react-router-dom";
import { login } from "../auth/login";


const authRoutes = () => {
    return (
        <Switch>
            <Route path="/login" component={login}></Route>
            <Route path="/login" component={login}></Route>
            <Route path="/auth">
                <Redirect to="/login"></Redirect>
            </Route>
            <Route path="*">
                <Redirect to="/login"></Redirect>
            </Route>
        </Switch>
    );
};

export default authRoutes;