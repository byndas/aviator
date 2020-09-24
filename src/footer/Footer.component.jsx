import "./footer.styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import { getImage } from "../firebase/firebase.config";
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
                    id="logoFooter"
                    src={getImage("logo.png", "logoFooter")}
                  />
                </p>
                <p className="about">{Abouttext}</p>
              </div>
              <div className="col item d-flex justify-content-center">
                <a className="nav-link" href="https://www.youtube.com/">
                  <img
                    alt="youtube"
                    className="youtube_icon"
                    id="youtubeFooter"
                    src={getImage("svg/youtube.svg", "youtubeFooter")}
                  />
                </a>
                <a href="https://www.instagram.com/?hl=en" className="nav-link">
                  <img
                    alt="instagram"
                    className="instagram_icon"
                    id="instagramFooter"
                    src={getImage("svg/instagramIcon.svg", "instagramFooter")}
                  />
                </a>
                <a
                  href="https://www.facebook.com/LIVE.Branding.Official/posts/3465174490183797"
                  className="nav-link"
                >
                  <img
                    alt="facebook"
                    className="facebook_icon"
                    id="facebookFooter"
                    src={getImage("svg/facebookIcon.svg", "facebookFooter")}
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
