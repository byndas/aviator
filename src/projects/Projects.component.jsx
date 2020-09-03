import React, { Component } from "react";
import Footer from "../footer/Footer.component";
import "./Projects.style.css";
import ProjectGroup from "./ProjectGroup";

import firebase from "firebase";
import "../firebase/Firebase.config";

class Projects extends Component {
  componentDidMount() {
    const dbRef = firebase.database().ref("projects");

    dbRef.on("value", snapshot => {
      // save to Redux store ( not this.setState() )
      this.setState(snapshot.val());
    });
  }
  render() {
    const { projects } = this.props;
    const projectgroup = projects.map(prj => (
      <ProjectGroup
        id={prj.id}
        key={prj.id}
        img={prj.img}
        name={prj.name}
        text={prj.text}
        subTitle={prj.subTitle}
      />
    ));
    return (
      <div>
        <div className="project_container">
          <h1 className="project_title font-italic">Projects</h1>
          {projectgroup}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Projects;
