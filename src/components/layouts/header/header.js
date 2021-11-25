import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { login } from "../../../auth/login";

function Header() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg  bg-white p-5">
        <div className="container-fluid ">
          <span className="navbar-brand ">HUNTER MOVIES</span>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <Link className="nav-item" to="/home">
                <span className="nav-link">
                  <i className="fas fa-video text-warning mr-2"></i> Home
                </span>
              </Link>

              <Link className="nav-item" to="/actors/list">
                <span className="nav-link">
                  <i className="fas fa-video text-warning mr-2"></i>
                  actors
                </span>
              </Link>
              <Link className="nav-item" to="/movies/list">
                <span className="nav-link">
                  <i className="fas fa-compact-disc text-warning mr-2"></i>
                  Movies
                </span>
              </Link>

            </ul>
            <Link to="/auth/login">
              <button className="btn btn-danger m-0">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Header;
