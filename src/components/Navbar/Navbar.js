import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
  return (
    <nav
      className="navbar nav-color is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1 className="h1-nav">doEAT!</h1>
        </a>
      </div>
      <div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/new-task" className="button ">
                <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#34735c"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
