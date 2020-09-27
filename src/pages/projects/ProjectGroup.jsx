import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class ProjectGroup extends Component {
  render() {
    const { name, text, src, title, id, auth } = this.props;
    console.log(id);
    return (
      <div>
        <div className="card project_content_title">
          <div className="card-header project_content_header">
            {name}
            <span className="ml-5">31.08.2020</span>
            {auth && (
              <div className="float-right">
                <FontAwesomeIcon className="icons" icon={faEdit} />
                <FontAwesomeIcon
                  onClick={() => {}}
                  className="icons"
                  icon={faTrash}
                />
              </div>
            )}
          </div>
          <h5 className="card-title text-center">{title}</h5>
          <div className="card-body d-flex">
            <div className="col-md-3">
              <img src={src} alt="..." className="img-thumbnail" />
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
