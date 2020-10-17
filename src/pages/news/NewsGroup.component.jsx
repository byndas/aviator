import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deleteImageFireStorage,
  removePostFireDB
} from "../../firebase/Firebase.config";

class NewsGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: true,
      btnText: "Show More"
    };
    this.toggleShowMore = this.toggleShowMore.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(id, src, title, name, text) {
    // scrolls up to NewsForm
    window.scrollTo(0, 0);
    // populates sibling NewsForm.jsx state (via parent component)
    // with data (including ID) of admin update post

    const editObj = {
      id: id,
      name: name,
      title: title,
      text: text
    };

    if (src !== null) {
      editObj.src = src;
    }

    console.log("NewsGroup editObj", editObj);

    this.props.editPostInputs(editObj);
  }
  handleDelete(id, src) {
    console.log("POST FIRE DB ID TO DELETE: ", id);

    if (src !== null) {
      console.log("DELETING IMAGE FROM FIRE STORAGE");
      // DELETES IMAGE FROM FIREBASE STORAGE
      deleteImageFireStorage(src, false);
    }
    console.log("REMOVING IMAGE FROM FIRE DB");
    // REMOVES POST FROM FIREBASE DB
    removePostFireDB("news", id, this.props.deleteNews);
  }
  toggleShowMore() {
    if (this.state.showMore) {
      this.setState(state => ({
        showMore: !state.showMore,
        btnText: "Show Less"
      }));
    } else {
      this.setState(state => ({
        showMore: !state.showMore,
        btnText: "Show More"
      }));
    }
  }
  render() {
    const { id, src, title, name, text, imgFile, auth } = this.props;
    return (
      <div className="card mb-5 project_content">
        <h5 className="card-header  text-center">{name}</h5>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
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
          <p className="card-text text text-truncate">{text}</p>
          <button
            id="moreLessBtn"
            className="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target={`#${id}`}
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={this.toggleShowMore}
          >
            {this.state.btnText}
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
