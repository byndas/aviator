import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";
import { connect } from "react-redux";
import { removeNewsPost } from "../../redux/news/news.actions";

class NewsGroup extends Component {
  removeFirebasePost(id) {
    firebase
      .database()
      .ref("base/news")
      .child(id)
      .remove()
      .then(() => {
        console.log("Remove succeeded.");
        this.props.removeNewsPost(id);
      })
      .catch(error => {
        console.log("Remove failed: " + error.message);
      });
  }
  handleDelete(id, src) {
    if (!src) {
      this.removeFirebasePost(id);
    } else {
      const afterTwoF = src.split("%2F")[1];
      const imgGuid = afterTwoF.split("?")[0];
      firebase
        .storage()
        .ref()
        .child("images/" + imgGuid)
        .delete()
        .then(() => {
          // img deleted successfully
          console.log("successfully deleted img");
          this.removeFirebasePost(id);
        })
        .catch(error => {
          // Uh-oh, an error occurred!
          console.log("failed to delete img");
        });
    }
  }
  render() {
    let toggler = true;
    const toggleMoreLess = () => {
      toggler ? "See More..." : "See Less...";
    };
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
            onClick={toggleMoreLess()}
          ></button>
        </div>
        <div className="collapse" id={id}>
          <img src={src} className="ml-4" alt="..." />
          <div className="card-body">{text}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, { removeNewsPost })(NewsGroup);
