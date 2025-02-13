import React, { useState } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import HomePage from "./Components/HomePage";
import Alert from "./Components/Alert";

function App(props) {
  const [alert, setAlert] = useState(null)

  const showAlert = (type, msg) => {
    setAlert({ type: type, msg: msg })
  }

  return (
    <Router>
      {/* Navbar is always shown */}
      <Navbar navTitle="TickTask" header1="Home" header2="About" />

      {/* Define Routes for Home and AboutUs */}
      <div className="container my-3">
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<HomePage showAlert={showAlert} />} />
          {/* Passing nameTxt as a prop to HomePage */}
          <Route path="/home" element={<HomePage showAlert={showAlert} />} />
          {/* Passing setNameTxt to AboutUs to update the name */}
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;