import "./Catalog.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../../firebase/Firebase.config";
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
    const { auth } = this.props;

    let planeList;
    console.log(this.props.siteData.catalog);

    if (this.props.siteData.catalog !== null) {
      const planeArr = Object.values(this.props.siteData.catalog);
      const planeIds = Object.keys(this.props.siteData.catalog);
      planeList = planeArr.map(air => (
        <AirPlaneGroup
          name={air.name}
          text={air.text}
          img={air.img}
          key={air.id}
          id={air.id}
          auth={auth}
        />
      ));
    } else {
      // add jsx loading html
      planeList = "LOADING...";
    }
    return (
      <div className="container border-bottom">
        <h1 className="text-center font-italic heading">{AirPlane}</h1>
        <div className="row row-cols-1 row-cols-md-2 mt-5">{planeList}</div>
      </div>
    );
  }
}

// export default AirPlane;

const mapStateToProps = reduxStore => {
  return { siteData: reduxStore.siteData };
};

export default connect(mapStateToProps, null)(AirPlane);
