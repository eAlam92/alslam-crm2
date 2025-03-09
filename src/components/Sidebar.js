// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import GoogleTranslate from "../GoogleTranslate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";


function Sidebar() {

  


  return (
    <div className="sidebar-nav">
      {/* <div className="google-translate">
        <GoogleTranslate />
      </div>
    <button onClick={toggleRTL}>Toggle RTL</button> */}
    <Link to="/" className="mb-3 d-block d-flex align-items-center text-white text-decoration-none gap-2">
    <FontAwesomeIcon icon={faHome}/>
      <h4 style={{fontSize: '18px'}} className="mb-0">Dashboard</h4>
    </Link>
      <ul>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li> */}
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
