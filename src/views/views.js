import React from 'react'
import { Router } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import IndexRoute from "./routes";
import Header from '../components/layouts/header/header';


export const views = () => {
    return (
        <>
            <div className="bg-light page-global">
                <Router>
                    <Header />
                    <div className="container mt-5">
                        <IndexRoute></IndexRoute>
                        <ToastContainer />
                    </div>
                </Router>
            </div>
        </>
    )
}
