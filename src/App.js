import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './assets/scss/stylesheet.css';
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// k

function App() {
  return (
    <>
      <Router>
      <div className="main">
        <div className="sidebar">   
          <Sidebar/>
        </div>
        <div className="body-content">
          <div className="body-content-inner">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
