import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
        <div class="container-fluid ps-2 pe-0 d-flex">
          <span
            class="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
          >
            MOVIES
          </span>
          <button
            class="navbar-toggler shadow-none ms-2 collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon mt-2">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </span>
          </button>
          <div class="navbar-collapse ps collapse" id="navigation">
            <ul class="navbar-nav ml-auto">
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
              <Link to="/auth/login">
                <button className="btn btn-primary m-0 ">Logout</button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
