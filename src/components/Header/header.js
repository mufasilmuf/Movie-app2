import React from "react";

import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar navbar-light bg-primary">
      <div className="container-fluid">
        <div className="navbar-brand text-white">
          <img className="Logo" src={logo} alt="logo" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
