import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deleteImageFireStorage,
  removePostFireDB
} from "../../firebase/Firebase.config";

class AirPlaneGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: true,
      btnText: "Show More"
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleShowMore = this.toggleShowMore.bind(this);
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
    console.log("NewsGroup editObj", editObj);
    this.props.editPostInputs(editObj);
  }
  handleDelete(id, src) {
    console.log("POST FIRE DB ID TO DELETE: ", id);

    if (src !== null) {
      console.log("DELETING IMAGE FROM FIRE STORAGE", src);
      // DELETES IMAGE FROM FIREBASE STORAGE
      deleteImageFireStorage(src);
    }
    console.log("REMOVING POST FROM FIRE DB");
    // REMOVES POST FROM FIREBASE DB
    removePostFireDB("catalog", id, this.props.deletePageItem);
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
    const { expanded } = this.state;
    return (
      <div className="col mb-4">
        <div className="card shadow p-3 mb-5 rounded border-0 airplain_background">
          <img src={src} className="card-img-top rounded" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p
              className={
                !expanded ? "fade text-truncate" : "card-text text-truncate"
              }
            >
              {text}
            </p>
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
            {auth && (
              <div id="flex" className="float-right">
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
          <div className="collapse" id={id}>
            <div className="card-body">
              <p className="card-text">{text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AirPlaneGroup;
