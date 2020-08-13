import React, { Component } from "react";
import Logo from "./images/logo.png";

import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <img alt="logo" className="logo" src={Logo} />
          </Link>
          <a
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            href="https://www.youtube.com/"
          >
            <span className="navbar-toggler-icon"></span>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/">
                  Home{" "}
                  <span className="sr-only" href="https://www.youtube.com/">
                    (current)
                  </span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/">
                  News <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/">
                  About Us <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/">
                  Projects <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/">
                  Gallery <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/">
                  +
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/">
                  Calendar
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.youtube.com/">
                  Contact
                </a>
              </li>
            </ul>
            <div>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.youtube.com/">
                    youtube
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    insta
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    fb
                  </Link>
                </li>
              </ul>
            </div>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
