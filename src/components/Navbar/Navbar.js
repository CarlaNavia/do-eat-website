import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
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
              {this.props.user && (
                <div className="buttons">
                  <Link to="/new-task" className="button">
                    <FontAwesomeIcon
                      icon={faPlusCircle}
                      size="lg"
                      color="#34735c"
                    />
                  </Link>
                  <button className="button" onClick={this.props.signOut}>
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      size="lg"
                      color="#34735c"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
