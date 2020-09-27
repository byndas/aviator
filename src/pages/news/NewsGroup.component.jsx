import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class NewsGroup extends Component {
  render() {
    const { src, title, name, text, id, auth } = this.props;
    return (
      <div className="card mb-5 project_content">
        <h5 className="card-header  text-center">{name}</h5>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {auth && (
            <div className="float-right">
              <FontAwesomeIcon
                type="button"
                // needs an edit pop-up window containing the clicked post's title, text, name
                // along with a submit button to update that firebase post data
                onClick={() => {}}
                className="icons"
                icon={faEdit}
              />
              <FontAwesomeIcon
                type="button"
                // needs to fire a removePost function
                onClick={() => {}}
                className="icons"
                icon={faTrash}
              />
            </div>
          )}
          <p className="card-text text text-truncate">{text}</p>
          <button
            className="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target={`#${id}`}
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Read More...
          </button>
        </div>
        <div className="collapse" id={id}>
          <img src={src} className="ml-4" alt="..." />
          <div className="card-body">{text}</div>
        </div>
      </div>
    );
  }
}

export default NewsGroup;
