import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header-container">
        <nav className="navbar-expand-lg  navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <NavLink className="nav-item  m-2" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-item  m-2" to="/card">
              Card
            </NavLink>
            <NavLink className="nav-item  m-2" to="/contact">
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
