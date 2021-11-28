import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/layouts/header/header";
import ViewsRoutes from "../routes/viewsRoutes";

export const views = () => {
    return (
        <>
            <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-light shadow" id="sidenav-main">
                <div class="sidenav-header">
                    <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
                        <span class="ms-1 font-weight-bold text-white">Material Dashboard 2</span>
                    </a>
                </div>
                <hr class="horizontal mt-0 mb-2" />
                <div class="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <span class="nav-link bg-gradient-primary active">Dashboard</span>
                        </li>
                    </ul>
                </div>
                <div class="sidenav-footer position-absolute w-100 bottom-0 ">
                </div>
            </aside>
            <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">    
                    <div className="bg-light page-global">
                        <Router>
                            <Header />
                            <div className="container mt-7">
                                <ViewsRoutes></ViewsRoutes>
                            </div>
                        </Router>
                    </div>
            </main>

        </>
    );
};
