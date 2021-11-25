import { useState } from "react";
import "./App.css";
import './material-dashboard.css'
import Header from "./components/layouts/header/header";
import { BrowserRouter as Router } from "react-router-dom";
import IndexRoute from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
        <Router>
            <IndexRoute></IndexRoute>
            <ToastContainer />
        </Router>
    </>
  );
}

export default App;
