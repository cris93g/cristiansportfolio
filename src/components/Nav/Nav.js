import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="navTitle">
          <div>Cristian Gonzalez</div>
        </div>
        <div className="navLinks">
          <Link to="/">
            {" "}
            <div>Home</div>
          </Link>
          <Link to="/about">
            {" "}
            <div>About</div>
          </Link>
          <Link to="/projects">
            {" "}
            <div>Projects</div>
          </Link>
          <Link to="/contact">
            {" "}
            <div>Contact</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
