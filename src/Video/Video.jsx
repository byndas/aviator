import React from "react";
import "./video.css";
import video from "./Images/video.webm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";

function Video() {
  return (
    <div className="bg_video">
      <div className="mini_navbar">
        <div className="cardx">
          <ul className="list-group list-group-flush">
            <li className="list-group-item background_for_li">
              Runway <FontAwesomeIcon icon={faPlaneDeparture} />
            </li>
            <li className="list-group-item background_for_li">
              Weather <FontAwesomeIcon icon={faCloudSun} />
            </li>
            <li className="list-group-item background_for_li">
              Useful links <FontAwesomeIcon icon={faShare} />
            </li>
          </ul>
        </div>
      </div>
      <video className="bg_video_content" autoPlay muted loop>
        <source src={video} />
      </video>
    </div>
  );
}

export default Video;
