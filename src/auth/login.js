import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

export const login = () => {
    return (
        <>
            <div className="container position-sticky z-index-sticky top-0">
                <div className="row">
                    <div className="col-12">
                        {/* <!-- Navbar --> */}
                        <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                            <div className="container-fluid ps-2 pe-0">
                                <button className="btn btn-primary m-0 text-center">
                                    .
                                </button>
                            </div>
                        </nav>
                        {/* <!-- End Navbar --> */}
                    </div>
                </div>
            </div>
            <main className="main-content  mt-0">
                <div className="page-header align-items-start min-vh-100">
                    <span className="mask bg-gradient-dark opacity-6"></span>
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-5 col-md-8 col-12 mx-auto">
                                <div className="card z-index-0 fadeIn3 fadeInBottom">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                        <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                            <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                                            <div className="row mt-3">
                                                <div className="col-2 text-center ms-auto">
                                                    <a className="btn btn-link px-3" href="javascript:;">
                                                        <i className="fa fa-facebook text-white text-lg"></i>
                                                    </a>
                                                </div>
                                                <div className="col-2 text-center px-1">
                                                    <a className="btn btn-link px-3" href="javascript:;">
                                                        <i className="fa fa-github text-white text-lg"></i>
                                                    </a>
                                                </div>
                                                <div className="col-2 text-center me-auto">
                                                    <a className="btn btn-link px-3" href="javascript:;">
                                                        <i className="fa fa-google text-white text-lg"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <form role="form" className="text-start">
                                            <div className="input-group input-group-outline my-3">
                                                <label className="form-label">Email</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className="input-group input-group-outline mb-3">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                            <div className="form-check form-switch d-flex align-items-center mb-3">
                                                <input className="form-check-input" type="checkbox" id="rememberMe" />
                                                <label className="form-check-label mb-0 ms-2" for="rememberMe">Remember me</label>
                                            </div>
                                            <div className="text-center">
                                                <Link to="/home">
                                                    <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                                                </Link>
                                            </div>
                                            <p className="mt-4 text-sm text-center">
                                                Don't have an account?
                                                <a href="../pages/sign-up.html" className="text-primary text-gradient font-weight-bold">Sign up</a>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
