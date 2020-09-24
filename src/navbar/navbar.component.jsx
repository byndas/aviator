import "./navbar.styles.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fireAuth } from "../firebase/firebase.config";
import { LanguageContext } from "../context/LanguageContext";
import translate from "./translate";
import { getImage } from "../firebase/firebase.config";

class Navbar extends React.Component {
  static contextType = LanguageContext;

  render() {
    const logOut = () => fireAuth.signOut();
    const clearSearchBar = () => {
      console.log("App searchInput state = " + this.props.searchInput);
      document.getElementById("search").value = "";
    };
    const { language, handleChange } = this.context;
    const {
      News,
      Home,
      AboutUs,
      Projects,
      Gallery,
      Catalog,
      Calendar,
      Contact,
      Search
    } = translate[language];

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark background">
          <Link className="navbar-brand" to="/">
            <img
              alt="logo"
              className="logo"
              id="logoNav"
              src={getImage("logo.png", "logoNav")}
            />
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
                <Link className="nav-link link_color" to="/">
                  {Home}
                  <span className="sr-only" href="https://www.youtube.com/">
                    (current)
                  </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/news">
                  {News} <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/about">
                  {AboutUs} <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/projects">
                  {Projects} <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/gallery">
                  {Gallery} <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/catalog">
                  {Catalog}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/calendar">
                  {Calendar}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link link_color" to="/contact">
                  {Contact}
                </Link>
              </li>
            </ul>
            <div className="mr-auto">
              <ul className="nav mr-auto">
                <li className="nav-item social_icon_container">
                  <a className="nav-link" href="https://www.youtube.com/">
                    <img
                      className="youtube_icon"
                      alt="youtube"
                      id="youtubeNav"
                      src={getImage("svg/youtube.svg", "youtubeNav")}
                    />
                  </a>
                </li>
                <li className="nav-item social_icon_container">
                  <a
                    href="https://www.instagram.com/?hl=en"
                    className="nav-link"
                  >
                    <img
                      alt="instagram"
                      className="instagram_icon"
                      id="instagramNav"
                      src={getImage("svg/instagramIcon.svg", "instagramNav")}
                    />
                  </a>
                </li>
                <li className="nav-item social_icon_container">
                  <a
                    href="https://www.facebook.com/LIVE.Branding.Official/posts/3465174490183797"
                    className="nav-link"
                  >
                    <img
                      alt="facebook"
                      className="facebook_icon"
                      id="facebookNav"
                      src={getImage("svg/facebookIcon.svg", "facebookNav")}
                    />
                  </a>
                </li>
              </ul>
            </div>
            <form
              style={{ marginLeft: "30px" }}
              className="form-inline my-2 my-lg-0 mr-auto"
            >
              <input
                id="search"
                style={{ width: "150px", height: "35px" }}
                className="form-control mr-sm-2"
                type="search"
                aria-label="Search"
                placeholder={Search}
                value={this.props.searchInput}
                onChange={this.props.setSearchInput}
              />
              <button
                style={{ width: "75px", height: "35px" }}
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                onClick={clearSearchBar}
              >
                {Search}
              </button>
            </form>
            {this.props.auth && (
              <div className="option" onClick={logOut}>
                LOG OUT
              </div>
            )}
            <select
              className="language"
              value={language}
              onChange={handleChange}
            >
              <option value="Geo">Geo</option>
              <option value="Eng">Eng</option>
              <option value="Rus">Rus</option>
            </select>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
