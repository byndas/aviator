import "./About.styles.css";
import React, { Component } from "react";
import Footer from "../../footer/Footer.component";
import { LanguageContext } from "../../context/LanguageContext";
import backgroundImage from "../../backgroundImage";
import translate from "./translate";

class About extends Component {
  static contextType = LanguageContext;
  render() {
    const { language } = this.context;
    const { AboutUs, Abouttext } = translate[language];
    return (
      <div>
        <div
          style={backgroundImage(
            "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/jpg%2Fpropeller.jpg?alt=media&token=4d8a96fb-1102-46d1-8525-612a86c7f707"
          )}
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
