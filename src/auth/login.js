import React from 'react'

export const login = () => {
    return (
        <>
            <div className="container position-sticky z-index-sticky top-0">
                <div className="row">
                    <div className="col-12">
                        {/* <!-- Navbar --> */}
                        <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                            <div className="container-fluid ps-2 pe-0">
                                <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
                                    Material Dashboard 2
                                </a>
                                <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon mt-2">
                                        <span className="navbar-toggler-bar bar1"></span>
                                        <span className="navbar-toggler-bar bar2"></span>
                                        <span className="navbar-toggler-bar bar3"></span>
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse" id="navigation">
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item">
                                            <a className="nav-link d-flex align-items-center me-2 active" aria-current="page" href="../pages/dashboard.html">
                                                <i className="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                                                Dashboard
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/profile.html">
                                                <i className="fa fa-user opacity-6 text-dark me-1"></i>
                                                Profile
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/sign-up.html">
                                                <i className="fas fa-user-circle opacity-6 text-dark me-1"></i>
                                                Sign Up
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link me-2" href="../pages/sign-in.html">
                                                <i className="fas fa-key opacity-6 text-dark me-1"></i>
                                                Sign In
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav d-lg-block d-none">
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/product/material-dashboard" className="btn btn-sm mb-0 me-1 bg-gradient-dark">Free download</a>
                                        </li>
                                    </ul>
                                </div>
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
                            <div className="col-lg-4 col-md-8 col-12 mx-auto">
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
                                                <input type="email" className="form-control"/>
                                            </div>
                                            <div className="input-group input-group-outline mb-3">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control"/>
                                            </div>
                                            <div className="form-check form-switch d-flex align-items-center mb-3">
                                                <input className="form-check-input" type="checkbox" id="rememberMe"/>
                                                    <label className="form-check-label mb-0 ms-2" for="rememberMe">Remember me</label>
                                            </div>
                                            <div className="text-center">
                                                <button type="button" className="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
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
                    <footer className="footer position-absolute bottom-2 py-2 w-100">
                        <div className="container">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-12 col-md-6 my-auto">
                                    <div className="copyright text-center text-sm text-white text-lg-start">
                                        © <script>
                                            document.write(new Date().getFullYear())
                                        </script>,
                                        made with <i className="fa fa-heart" aria-hidden="true"></i> by
                                        <a href="https://www.creative-tim.com" className="font-weight-bold text-white" target="_blank">Creative Tim</a>
                                        for a better web.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com" className="nav-link text-white" target="_blank">Creative Tim</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/presentation" className="nav-link text-white" target="_blank">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/blog" className="nav-link text-white" target="_blank">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="https://www.creative-tim.com/license" className="nav-link pe-0 text-white" target="_blank">License</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </>
    )
}
