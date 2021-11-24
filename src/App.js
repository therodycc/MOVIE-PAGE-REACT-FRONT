import { Fragment } from "react";
import "./App.css";
import './material-dashboard.css'
import Header from "./components/layouts/header/header";
import { BrowserRouter as Router } from "react-router-dom";
import IndexRoute from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment  >
      <div className="bg-light page-global">
        <Router>
          <Header />
          <div className="container mt-5">
            <IndexRoute></IndexRoute>
            <ToastContainer />
          </div>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
