import React from 'react'
import actorsRoutes from './actorsRoutes'
import { popupRoutes } from './popupRoutes'
// from react
import { Switch, Route, Redirect } from "react-router-dom";
// pages
// routes
import moviesRoutes from "./moviesRoutes";
import Home from '../views/home/home';

const viewsRoutes = () => {
    return (
        <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/actors" component={actorsRoutes}></Route>
            <Route path="/movies" component={moviesRoutes}></Route>
            <Route path="/popup" component={popupRoutes}></Route>
            <Route path="*">
                <Redirect to="/home"></Redirect>
            </Route>
        </Switch>
    )
}

export default viewsRoutes;

