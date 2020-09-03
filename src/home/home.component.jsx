import React from "react";
import "./Home.styles.css";
// import video from "../images/video.webm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

import UsefulLinks from "./UsefulLinks.component";

function Home() {
  return (
    <div className="slideshow">
      <ul>
        <li className="img-fluid"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="links">
        <div className="btn-group dropright runways">
          <button type="button" className="btn">
            Weather on the runways
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
            useful links
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

export default Home;
