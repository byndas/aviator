import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Projects.styles.css";

class SingleProject extends Component {
  render() {
    const { name, title, text, src } = this.props;
    return (
      <div className="project_container">
        <h1 className="project_title font-italic">{name}</h1>
        <div className="card card_project_content">
          <div className="card-header">
            {name}
            <span className="ml-5">31.08.2020</span>
          </div>
          <h5 className="card-title text-center">{title}</h5>
          <div className="card-body d-flex">
            <div className="col-md-4">
              <img src={src} alt="..." className="img-thumbnail" />
            </div>
            <div className="col-md-8">
              <p className="card-text">{text}</p>
              <Link className="btn btn-primary" type="button" to="/projects">
                go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProject;
