import "./Projects.styles.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import PagePosts from "../PagePosts.component";
import AdminForm from "../AdminForm.component";
import Footer from "../../footer/Footer.component";
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
    const { auth, reduxProjects } = this.props;
    const { language } = this.context;
    const { Projects } = translate[language];

    let projectList;

    if (reduxProjects !== null) {
      const projectsIds = Object.keys(reduxProjects).reverse();
      const projectsArr = Object.values(reduxProjects);
      // collects all projects in redux store
      projectList = projectsArr
        .reverse()
        .map((item, index) => (
          <PagePosts
            name={item.name}
            title={item.title}
            text={item.text}
            src={item.src}
            key={index}
            id={projectsIds[index]}
            editPostInputs={this.editPostInputs}
            auth={auth}
            pageName="projects"
          />
        ));
    }
    return (
      <div>
        <div className="project_container">
          <h1 className="project_title font-italic">{Projects}</h1>
          {auth && <AdminForm editObj={this.state} pageName="projects" />}
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

export default connect(mapStateToProps)(Projects);
