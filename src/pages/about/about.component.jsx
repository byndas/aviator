import "./About.styles.css";
import React, { Component } from "react";
import Footer from "../../footer/Footer.component";
import { LanguageContext } from "../../context/LanguageContext";
import backgroundImage from "../../backgroundImage";
import translate from "./translate";
import { getImage } from "../../firebase/firebase.config";

class About extends Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const { AboutUs, Abouttext } = translate[language];
    return (
      <div>
        <div
          id="plane"
          style={backgroundImage(getImage("jpg/propeller.jpg", "plane"))}
        >
          <div className="container text-center">
            <h1 className="display-3 heading-secondary mt-4">{AboutUs}</h1>
            <div className="jumbotron jumbotron-fluid shadow p-9 mb-2 bg-white mt-5  paragraph_background">
              <div className="container">
                <p className="lead font-weight-bold">{Abouttext}</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
