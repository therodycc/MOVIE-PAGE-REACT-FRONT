import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/layouts/header/header';
import Home from './home/home';
import ViewsRoutes from '../routes/viewsRoutes'


export const views = () => {
    
    return (
        <>
            <div className="bg-light page-global">
                <Router>
                    <Header />
                    <div className="container mt-5">
                    <ViewsRoutes></ViewsRoutes>
                    </div>
                </Router>
            </div>
        </>
    )
}
