import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectGroup extends Component {
  render() {
    const { name, text, img, subTitle, id } = this.props;
    return (
      <div>
        <div className="card project_content_title">
          <div className="card-header project_content_header">
            {name}
            <span className="ml-5">31.08.2020</span>
          </div>
          <h5 className="card-title text-center">{subTitle}</h5>
          <div className="card-body d-flex">
            <div className="col-md-3">
              <img src={img} alt="..." className="img-thumbnail" />
            </div>
            <div className="col-md-8">
              <p className="card-text text-truncate">{text}</p>
              <Link
                className="btn btn-primary"
                type="button"
                to={`/projects/${id}`}
              >
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectGroup;
