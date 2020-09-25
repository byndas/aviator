import "./navbar.styles.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fireAuth } from "../firebase/Firebase.config";
import { LanguageContext } from "../context/LanguageContext";
import translate from "./translate";

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
              src={
                "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/logo.png?alt=media&token=72f9c185-377d-4877-96c5-59992eb77d08"
              }
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
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/svg%2Fyoutube.svg?alt=media&token=b3d2225e-fd94-42b1-b406-6f3c4e13c758"
                      }
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
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/svg%2FinstagramIcon.svg?alt=media&token=e0e1f356-e662-46b1-9f27-388d6d9e3dc6"
                      }
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
                      src={
                        "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/svg%2FfacebookIcon.svg?alt=media&token=d4d52789-ab47-4b60-8e16-21a9140b6955"
                      }
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
