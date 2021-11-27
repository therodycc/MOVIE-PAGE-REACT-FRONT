import { useEffect, useState } from "react";
import "./App.css";
import "./material-dashboard.css";
import { BrowserRouter as Router } from "react-router-dom";
import IndexRoute from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import httpService from "./services/httpService";
import serverDownImg from "./assets/serverdown.svg";
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const data = await httpService.get("http://localhost:3000/api/movies");
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {movies ? (
        <Router>
          <IndexRoute></IndexRoute>
          <ToastContainer />
        </Router>
      ) : (
        <>
          <div className="p-5">
            <h1 className="text-danger col-lg-8 offset-2 mb-5">
              Service Unavailable 503
            </h1>
            <img src={serverDownImg} className="col-lg-6 offset-3" alt="" />
          </div>
        </>
      )}
    </>
  );
}

export default App;
