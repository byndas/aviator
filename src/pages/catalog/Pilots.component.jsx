import "./Catalog.styles.css";
import React, { Component } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { getImage } from "../../firebase/firebase.config";

const translate = {
  Geo: {
    Pilots: "მფრინავები"
  },
  Eng: {
    Pilots: "Pilots"
  },
  Rus: {
    Pilots: "Пилоты"
  }
};

class Pilots extends Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const { Pilots } = translate[language];
    return (
      <div className="container mt-5 mb-5">
        <h1 className="text-center font-italic heading">{Pilots}</h1>
        <div className="media">
          <img
            alt="..."
            className="align-self-center mr-3 rounded-circle pilot_images"
            id="pilot01"
            src={getImage("jpg/pilots/pilot01.jpg", "pilot01")}
          />
          <div className="media-body">
            <h5 className="mt-5 font-italic">Media heading</h5>
            <p
              style={{ fontSize: "1.2rem" }}
              className="font-italic mt-3 pilot_paragraph"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              rem corporis sint dolore culpa amet reiciendis consequatur cumque
              atque quam. Sequi est enim, magni fugit id voluptas sit ad iure.
            </p>
          </div>
        </div>
        <div className="media mt-4">
          <img
            alt="..."
            className="align-self-center mr-3 rounded-circle pilot_images"
            id="pilot02"
            src={getImage("jpg/pilots/pilot01.jpg", "pilot02")}
          />
          <div className="media-body">
            <h5 className="mt-5 font-italic">Media heading</h5>
            <p
              style={{ fontSize: "1.2rem" }}
              className="font-italic mt-3 pilot_paragraph"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              rem corporis sint dolore culpa amet reiciendis consequatur cumque
              atque quam. Sequi est enim, magni fugit id voluptas sit ad iure.
            </p>
          </div>
        </div>
        <div className="media mt-4">
          <img
            alt="..."
            className="align-self-center mr-3 rounded-circle pilot_images"
            id="pilot03"
            src={getImage("jpg/pilots/pilot01.jpg", "pilot03")}
          />
          <div className="media-body">
            <h5 className="mt-5 font-italic">Media heading</h5>
            <p
              style={{ fontSize: "1.2rem" }}
              className="font-italic mt-3 pilot_paragraph"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              rem corporis sint dolore culpa amet reiciendis consequatur cumque
              atque quam. Sequi est enim, magni fugit id voluptas sit ad iure.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Pilots;
