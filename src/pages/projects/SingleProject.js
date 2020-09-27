import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Projects.styles.css";

class SingleProject extends Component {
  render() {
    const { name, title, text, src } = this.props;
    return (
      <div className="project_container">
        <h1 className="project_title font-italic">{name}</h1>
        <div class="card card_project_content">
          <div class="card-header">
            {name}
            <span className="ml-5">31.08.2020</span>
          </div>
          <h5 class="card-title text-center">{title}</h5>
          <div class="card-body d-flex">
            <div class="col-md-4">
              <img src={src} alt="..." class="img-thumbnail" />
            </div>
            <div class="col-md-8">
              <p class="card-text">{text}</p>
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
