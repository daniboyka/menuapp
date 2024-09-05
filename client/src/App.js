import React from "react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <LandingPage />
    </Router>
  );
};

export default App;
