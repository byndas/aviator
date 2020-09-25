import "./Catalog.styles.css";
import React, { Component } from "react";
import { LanguageContext } from "../../context/LanguageContext";

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
            src={
              "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/jpg%2Fpilots%2Fpilot01.jpg?alt=media&token=53e68878-c313-47fd-9dfb-81caeb8f4254"
            }
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
            src={
              "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/jpg%2Fpilots%2Fpilot02.jpg?alt=media&token=47863e53-950b-490a-a106-379ec96b5b57"
            }
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
            src={
              "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/jpg%2Fpilots%2Fpilot03.jpg?alt=media&token=cd79b276-e2fe-4800-962b-0c42bb448b61"
            }
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
