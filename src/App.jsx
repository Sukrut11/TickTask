import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import HomePage from "./Components/HomePage";
import Alert from "./Components/Alert";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, msg) => {
    setAlert({ type: type, msg: msg });
  };

  // function will be called from child component Alert
  const closeAlert = () => {
    setAlert(null); // Reset alert when close button is clicked
  };


  return (
    <Router>
      {/* Navbar is always shown */}
      <Navbar navTitle="TickTask" header1="Home" header2="About Me" />

      {/* Define Routes for Home and AboutUs */}
      <div className="container my-3">
        <ConditionalAlert alert={alert} closeAlert = {closeAlert}/>
        <Routes>
          <Route path="/" element={<HomePage showAlert={showAlert} />} />
          <Route path="/home" element={<HomePage showAlert={showAlert} />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

// Helper component to conditionally render Alert
function ConditionalAlert({ alert,  closeAlert}) {
  // console.log("closeAlert in ConditionalAlert:", closeAlert);
  const location = useLocation();
  return location.pathname !== "/about" ? <Alert alert={alert} closeAlert = {closeAlert}/> : null;
}

export default App;