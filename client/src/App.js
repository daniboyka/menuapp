import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <LandingPage />
      {/* <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Navbar />} />
    
        </Routes>
      </main> */}
    </Router>
  );
};

export default App;
