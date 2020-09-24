import "./Home.styles.css";
import React, { Component } from "react";
// import video from "../images/video.webm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../../context/LanguageContext";
import UsefulLinks from "./UsefulLinks.component";
import { getImage } from "../../firebase/firebase.config";

const translate = {
  Geo: {
    WeatherOnTheRunways: "ამინდი ასაფრენ ბილიკებზე",
    usefulLinks: "სასარგებლო ლინკები"
  },
  Eng: {
    WeatherOnTheRunways: "Weather On The Runways",
    usefulLinks: "useful links"
  },
  Rus: {
    WeatherOnTheRunways: "Погода на полосах",
    usefulLinks: "Полезная ссылка"
  }
};

class Home extends Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const { WeatherOnTheRunways, usefulLinks } = translate[language];
    return (
      <div className="slideshow">
        <ul>
          <li
            className="img-fluid"
            id="home01"
            style={{
              backgroundImage: `url(${getImage(
                "jpg/landings/landing01.jpg",
                "home01"
              )})`
            }}
          ></li>
          <li
            id="home02"
            style={{
              backgroundImage: `url(${getImage(
                "jpg/landings/landing02.jpg",
                "home02"
              )})
              animationDelay: 5s`
            }}
          ></li>
          <li
            id="home03"
            style={{
              backgroundImage: `url(${getImage(
                "jpg/landings/landing03.jpg",
                "home03"
              )})
              animationDelay: 10s`
            }}
          ></li>
          <li
            id="home04"
            style={{
              backgroundImage: `url(${getImage(
                "jpg/landings/landing04.jpg",
                "home04"
              )})
              animationDelay: 15s`
            }}
          ></li>
          <li
            id="home05"
            style={{
              backgroundImage: `url(${getImage(
                "jpg/landings/landing05.jpg",
                "home05"
              )})
              animationDelay: 20s`
            }}
          ></li>
        </ul>
        <div className="links">
          <div className="btn-group dropright runways">
            <button type="button" className="btn">
              {WeatherOnTheRunways}
            </button>
            <button
              type="button"
              className="btn dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faPlaneDeparture} />
            </button>
            <div className="dropdown-menu"></div>
          </div>
          <div className="btn-group dropright usefulLinks">
            <button type="button" className="btn">
              {usefulLinks}
            </button>
            <button
              type="button"
              className="btn dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faShare} />
            </button>
            <div className="dropdown-menu">
              <UsefulLinks />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
