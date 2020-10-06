import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import firebase from "firebase";
import { connect } from "react-redux";
import { deleteNews } from "../../redux/news/news.actions";
import { deleteFirebasePost } from "../../functions/deleteFirebasePost";

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
  handleEdit() {}
  handleDelete(id, src) {
    console.log("deleted post ID: ", id);
    if (src) {
      console.log("deleted post SRC: ", src);
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
        })
        .catch(error => {
          // Uh-oh, an error occurred!
          console.log("failed to delete img", error.message);
        });
    }
    deleteFirebasePost(id, "news", deleteNews(id));
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
    const { id, src, title, name, text, auth } = this.props;
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
                onClick={() => {
                  this.handleEdit();
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
// const mapStateToProps = reduxStore => ({ reduxNews: reduxStore.news });


export default connect(null, { deleteNews })(NewsGroup);
