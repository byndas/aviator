import "./Projects.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectGroup from "./ProjectGroup";
import ProjectsForm from "./ProjectsForm";
import Footer from "../../footer/Footer.component";
import { LanguageContext } from "../../context/LanguageContext";
import { deletePageItem } from "../../redux/site/site.actions";

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

  render() {
    const { auth, reduxProjects, deletePageItem } = this.props;
    const { language } = this.context;
    const { Projects } = translate[language];

    let projectList;

    if (reduxProjects !== null) {
      const projectsIds = Object.keys(reduxProjects).reverse();
      const projectsArr = Object.values(reduxProjects);
      // collects all projects in redux store
      projectList = projectsArr
        // reverse mis-aligns firebase & redux objects
        .reverse()
        .map((item, index) => (
          <ProjectGroup
            auth={auth}
            deletePageItem={deletePageItem}
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
          {auth && <ProjectsForm editObj={this.state} />}
          <br />
          {projectList}
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = reduxStore => ({
  reduxProjects: reduxStore.siteData.projects
});

export default connect(mapStateToProps, {
  deletePageItem
})(Projects);
