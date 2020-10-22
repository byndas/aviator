import "./Catalog.styles.css";
import React, { Component } from "react";
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
    const { auth, reduxCatalog, deletePageItem, editPostInputs } = this.props;

    let planeList;

    if (reduxCatalog !== null) {
      const planeArr = Object.values(reduxCatalog);
      const planeIds = Object.keys(reduxCatalog);

      planeList = planeArr.map((airplane, index) => (
        <AirPlaneGroup
          auth={auth}
          deletePageItem={deletePageItem}
          editPostInputs={editPostInputs}
          name={airplane.name}
          text={airplane.text}
          src={airplane.src}
          id={planeIds[index]}
          key={index}
        />
      ));
    }
    return (
      <div className="container border-bottom">
        <h1 className="text-center font-italic heading">{AirPlane}</h1>
        <div className="row row-cols-1 row-cols-md-2 mt-5">{planeList}</div>
      </div>
    );
  }
}

export default AirPlane;
