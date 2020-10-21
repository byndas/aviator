import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deleteImageFireStorage,
  removePostFireDB
} from "../../firebase/Firebase.config";

class ProjectGroup extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(id, src, title, name, text) {
    // scrolls up to NewsForm
    window.scrollTo(0, 0);
    // populates sibling NewsForm.jsx state (via parent component)
    // with data (including ID) of admin update post
    const editObj = {
      id,
      src,
      name,
      title,
      text
    };
    console.log("ProjectGroup editObj", editObj);
    this.props.editPostInputs(editObj);
  }
  handleDelete(id, src) {
    console.log("POST ID TO DELETE IN FIRE DB: ", id);

    if (src !== null) {
      console.log("DELETING IMAGE FROM FIRE STORAGE", src);
      // DELETES IMAGE FROM FIREBASE STORAGE
      deleteImageFireStorage(src);
    }
    console.log("REMOVING POST FROM FIRE DB");
    // REMOVES POST FROM FIREBASE DB
    removePostFireDB("projects", id, this.props.deleteProject);
  }
  render() {
    const { id, src, title, name, text, imgFile, auth } = this.props;
    return (
      <div>
        <div className="card project_content_title">
          <div className="card-header project_content_header">
            {name}
            <span className="ml-5">31.08.2020</span>
            {auth && (
              <div className="float-right">
                <FontAwesomeIcon
                  type="button"
                  onClick={() => {
                    this.handleEdit(id, src, title, name, text, imgFile);
                  }}
                  className="icons"
                  icon={faEdit}
                />
                <FontAwesomeIcon
                  type="button"
                  onClick={() => {
                    this.handleDelete(id, src);
                  }}
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
