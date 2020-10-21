import "./Projects.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectGroup from "./ProjectGroup";
import ProjectsForm from "./ProjectsForm";
import Footer from "../../footer/Footer.component";
import { LanguageContext } from "../../context/LanguageContext";
import { getFireDbPage } from "../../firebase/Firebase.config";
import {
  firebaseProjects,
  deleteProject
} from "../../redux/projects/projects.actions";

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
  constructor(props) {
    super(props);
    // state controls form inputs
    this.state = null;

    this.editPostInputs = this.editPostInputs.bind(this);
  }

  editPostInputs(postObj) {
    this.setState(postObj);
    console.log("Projects.component STATE", this.state);
  }

  static contextType = LanguageContext;

  componentDidMount() {
    getFireDbPage("projects", this.props.firebaseProjects);
  }

  render() {
    const { auth, reduxProjects, deleteProject } = this.props;
    const { language } = this.context;
    const { Projects } = translate[language];

    let projectList;

    if (reduxProjects !== null) {
      const projectsArr = Object.values(reduxProjects);
      const projectsIds = Object.keys(reduxProjects);
      // collects all projects in redux store
      projectList = projectsArr
        // reverse mis-aligns firebase & redux objects
        // .reverse()
        .map((item, index) => (
          <ProjectGroup
            auth={auth}
            deleteProject={deleteProject}
            editPostInputs={this.editPostInputs}
            name={item.name}
            title={item.title}
            text={item.text}
            src={item.src}
            key={index}
            id={projectsIds[index]}
          />
        ));
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
                CREATE PROJECT
              </button>
              <div className="modal fade" id="create" role="dialog">
                <div className="modal-dialog modal-md">
                  <div className="modal-content">
                    <ProjectsForm editObj={this.state} />
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      CLOSE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <br />
          {projectList}
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxProjects: reduxStore.projects
});

export default connect(mapStateToProps, {
  firebaseProjects,
  deleteProject
})(Projects);
