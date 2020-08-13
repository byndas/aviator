import React from "react";
import video from "./images/video.webm";
import "./video.css";

function Video() {
  return (
    <div className="bg_video">
      <div className="mini_navbar">
        <div className="cardx background_for_li">
          <ul className="list-group list-group-flush">
            <li className="list-group-item background_for_li">
              Cras justo odio
            </li>
            <li className="list-group-item background_for_li">
              Dapibus ac facilisis in
            </li>
            <li className="list-group-item background_for_li">
              Vestibulum at eros
            </li>
          </ul>
        </div>
      </div>
      <video autoPlay loop>
        <source src={video} />
      </video>
    </div>
  );
}

export default Video;
