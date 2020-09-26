import "./Projects.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";

import ProjectsForm from "./ProjectsForm";
import ProjectGroup from "./ProjectGroup";
import Footer from "../../footer/Footer.component";
import "../../firebase/Firebase.config";
import firebase from "firebase";
import { LanguageContext } from "../../context/LanguageContext";

const translate = {
  Geo: {
    Projects: "პროექტები"
  },
  Eng: {
    Projects: "Projects"
  },
  Rus: {
    Projects: "Проекты"
  }
};

class Projects extends Component {
  static contextType = LanguageContext;
  // componentDidMount() {
  //   const dbRef = firebase.database().ref("projects");

  //   dbRef.on("value", snapshot => {
  //     // save snapshot.val() to Redux store ( not this.setState() )
  //     // Redux store needs to map projects from database
  //     console.log(snapshot.val());
  //   });
  // }

  render() {
    const { auth, createProject, removeProject } = this.props;
    const { language } = this.context;
    const { Projects } = translate[language];

    let projectList;
    console.log(this.props.siteData.projects);
    if (this.props.siteData.projects !== null) {
      const projectsArr = Object.values(this.props.siteData.projects);
      const projectsIds = Object.keys(this.props.siteData.projects);

      projectList = projectsArr.map(prj => (
        <ProjectGroup
          id={prj.id}
          key={prj.id}
          img={prj.img}
          name={prj.name}
          text={prj.text}
          subTitle={prj.subTitle}
          auth={auth}
          removeProject={removeProject}
        />
      ));
    } else {
      // add jsx loading html
      projectList = "LOADING...";
    }
    return (
      <div>
        <div className="project_container">
          <h1 className="project_title font-italic">{Projects}</h1>
          {auth && (
            <div className="container project_form">
              <button
                type="button"
                className="btn btn-info btn-sm"
                data-toggle="modal"
                data-target="#create"
              >
                Create
              </button>
              <div className="modal fade" id="create" role="dialog">
                <div className="modal-dialog modal-md">
                  <div className="modal-content">
                    <ProjectsForm createProject={createProject} />
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <br />
          {/* PROJECTS DISPLAY HERE */}
          {projectList}
        </div>
        <Footer />
      </div>
    );
  }
}

//CHANGE siteData.projects --> selectors! */}
const mapStateToProps = reduxStore => {
  return { siteData: reduxStore.siteData };
};

export default connect(mapStateToProps, null)(Projects);
