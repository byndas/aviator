import React, { Component } from "react";
import "./Catalog.styles.css";
import AirPlaneGroup from "./AirPlanegroup";
import { LanguageContext } from "../../context/LanguageContext";

const translate = {
  Geo: {
    AirPlane: "თვითმფრინავები"
  },
  Eng: {
    AirPlane: "Airplanes"
  },
  Rus: {
    AirPlane: "Самолеты"
  }
};

class AirPlane extends Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const { AirPlane } = translate[language];
    const { airPlane, auth } = this.props;
    const airPlaneGroup = airPlane.map(air => (
      <AirPlaneGroup
        name={air.name}
        text={air.text}
        img={air.img}
        key={air.id}
        id={air.id}
        auth={auth}
      />
    ));
    return (
      <div className="container border-bottom">
        <h1 className="text-center font-italic heading">{AirPlane}</h1>
        <div className="row row-cols-1 row-cols-md-2 mt-5">{airPlaneGroup}</div>
      </div>
    );
  }
}

export default AirPlane;
