import "./footer.styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import translate from "../navbar/translate";

class Footer extends Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const {
      News,
      Home,
      AboutUs,
      Projects,
      Gallery,
      Catalog,
      Calendar,
      Contact,
      Abouttext
    } = translate[language];

    return (
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item mt-5 text-uppercase">
                <ul>
                  <li>
                    <Link className="nav-link" to="/">
                      {Home} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/news">
                      {News} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/about">
                      {AboutUs} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/projects">
                      {Projects} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item mt-5 text-uppercase">
                <ul>
                  <li>
                    <Link className="nav-link" to="/gallery">
                      {Gallery} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/catalog">
                      {Catalog} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/calendar">
                      {Calendar} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/contact">
                      {Contact} <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item-text mt-n4">
                <p className="heading-secondary">
                  1*209{" "}
                  <img
                    alt="logo"
                    style={{
                      width: "25px",
                      height: "25px",
                      marginBottom: "6px"
                    }}
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/logo.png?alt=media&token=72f9c185-377d-4877-96c5-59992eb77d08"
                    }
                  />
                </p>
                <p className="about">{Abouttext}</p>
              </div>
              <div className="col item d-flex justify-content-center">
                <a className="nav-link" href="https://www.youtube.com/">
                  <img
                    alt="youtube"
                    className="youtube_icon"
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/svg%2Fyoutube.svg?alt=media&token=b3d2225e-fd94-42b1-b406-6f3c4e13c758"
                    }
                  />
                </a>
                <a href="https://www.instagram.com/?hl=en" className="nav-link">
                  <img
                    alt="instagram"
                    className="instagram_icon"
                    src={
                      "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/svg%2FinstagramIcon.svg?alt=media&token=e0e1f356-e662-46b1-9f27-388d6d9e3dc6"
                    }
                  />
                </a>
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
              </div>
            </div>
          </div>
        </footer>
        <p className="copyright text-center">1*209 © 2020</p>
      </div>
    );
  }
}

export default Footer;
