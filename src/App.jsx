import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import HomePage from "./Components/HomePage";
import Alert from "./Components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, msg) => {
    setAlert({ type: type, msg: msg });
  };

  return (
    <Router>
      {/* Navbar is always shown */}
      <Navbar navTitle="TickTask" header1="Home" header2="About" />

      {/* Define Routes for Home and AboutUs */}
      <div className="container my-3">
        <ConditionalAlert alert={alert} />
        <Routes>
          <Route path="/" element={<HomePage showAlert={showAlert} />} />
          <Route path="/home" element={<HomePage showAlert={showAlert} />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

// Helper component to conditionally render Alert
function ConditionalAlert({ alert }) {
  const location = useLocation();
  return location.pathname !== "/about" ? <Alert alert={alert} /> : null;
}

export default App;