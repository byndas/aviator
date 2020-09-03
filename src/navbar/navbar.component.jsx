import React from "react";
import Logo from "../images/logo.png";
import youtube from "../images/youtube.svg";
import instagramIcon from "../images/instagramIcon.svg";
import facebookIcon from "../images/facebookIcon.svg";
import georgiaIcon from "../images/georgiaIcon.svg";
import englishIcon from "../images/englishIcon.svg";

import { Link } from "react-router-dom";
import "./Navbar.styles.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      flag: !this.state.flag
    });
  }
  render() {
    const { flag } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark background">
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
          <div
            className="collapse navbar-collapse margin_left"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link link_color" to="/">
                  Home{" "}
                  <span className="sr-only" href="https://www.youtube.com/">
                    (current)
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/news">
                  News <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/about">
                  About us <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/projects">
                  Projects <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/gallery">
                  Gallery <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/catalog">
                  Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_color" to="/calendar">
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link_color" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link ml-3" href="https://www.youtube.com/">
                    <img className="youtube_icon" src={youtube} alt="youtube" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.instagram.com/?hl=en"
                    className="nav-link"
                  >
                    <img
                      className="instagram_icon"
                      src={instagramIcon}
                      alt="instagram"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.facebook.com/LIVE.Branding.Official/posts/3465174490183797"
                    className="nav-link"
                  >
                    <img
                      className="facebook_icon"
                      src={facebookIcon}
                      alt="facebook"
                    />
                  </a>
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
            <div onClick={this.handleClick} className="btn-group-vertical">
              {flag && (
                <img className="flag_icon" src={georgiaIcon} alt="gerogia" />
              )}
              {!flag && (
                <img className="flag_icon" src={englishIcon} alt="english" />
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
