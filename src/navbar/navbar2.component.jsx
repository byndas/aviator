import React, { useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

import Logo from "../images/logo.png";
import youtube from "../images/youtube.svg";
import instagramIcon from "../images/instagramIcon.svg";
import facebookIcon from "../images/facebookIcon.svg";
import { LanguageContext } from "../context/LanguageContext";
import { fireAuth } from "../firebase/Firebase.config";
import translate from "./translate";

function Navbar({ auth, searchMode, searchInput, setSearchInput }) {
  const { language, handleChange } = useContext(LanguageContext);
  const logOut = () => fireAuth.signOut();
  const clearSearchBar = () => {
    this.props.seachMode = true;
    console.log("searchMode = ", searchMode);
    console.log("App searchInput state = " + searchInput);
    document.getElementById("search").value = "";
    this.props.seachMode = true;
  };
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
                  <img className="youtube_icon" src={youtube} alt="youtube" />
                </a>
              </li>
              <li className="nav-item social_icon_container">
                <a href="https://www.instagram.com/?hl=en" className="nav-link">
                  <img
                    className="instagram_icon"
                    src={instagramIcon}
                    alt="instagram"
                  />
                </a>
              </li>
              <li className="nav-item social_icon_container">
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
              value={searchInput}
              onChange={setSearchInput}
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
          {auth && (
            <div className="option" onClick={logOut}>
              LOG OUT
            </div>
          )}
          {/* {adminState && (
            <div className="option" onClick={() => fireAuth.signOut()}>
              LOG OUT
            </div>
          )} */}
          <select className="language" value={language} onChange={handleChange}>
            <option value="Geo">Geo</option>
            <option value="Eng">Eng</option>
            <option value="Rus">Rus</option>
          </select>
        </div>
      </nav>
    </div>
  );
}

// state is the root reducer
// adminState is the prop passed into Navbar component
// admin is the admin reducer in the root reducer
// adminMode is the key in the admin reducer

// const mapStateToProps = state => ({
//   adminState: state.admin.adminMode
// });
// export default connect(mapStateToProps)(Navbar);

export default Navbar;
