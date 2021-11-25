import React from 'react'
import actorsRoutes from './actorsRoutes'
import authRoutes from './authRoutes'
import { popupRoutes } from './popupRoutes'
// from react
import { Switch, Route } from "react-router-dom";
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
        </Switch>
    )
}

export default viewsRoutes;

