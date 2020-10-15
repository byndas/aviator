import React, { PureComponent } from "react";
import {
  pushOrSetPostFireDB,
  putImageFireStorage,
  deleteImageFireStorage
} from "../../firebase/Firebase.config";
// import { icon } from "@fortawesome/fontawesome-svg-core";

class NewsForm extends PureComponent {
  constructor(props) {
    super(props);

    // state controls form inputs
    this.state = this.emptyState;

    this.clearState = this.clearState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emptyState = {
    id: null, // edit populates

    name: "", // edit might populate
    title: "", // edit might populate
    text: "", // edit might populate
    prevSrc: null, // edit might populate

    imgFile: null, // "choose file" button populates on submit
    src: null //
  };

  componentWillReceiveProps(nextProps) {
    console.log("EDIT OBJ", nextProps.editObj);

    if (nextProps.editObj !== null) {
      // merges objToEdit into current state
      // enables admin input form to edit post data
      this.setState(nextProps.editObj);
    }
  }

  clearState() {
    this.setState(this.emptyState);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleImageChange(e) {
    e.preventDefault();

    console.log("imgFile", this.state.imgFile);
    if (this.state.imgFile === null) {
      let reader = new FileReader();
      let file = e.target.files[0];
      reader.onloadend = () => {
        this.setState({ imgFile: file });
      };
      reader.readAsDataURL(file);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    // does nothing if state empty
    if (this.state === this.emptyState) return;

    // copy of state to put into Firebase DB & Storage
    let postObj = this.state;
    console.log("POST OBJ / NewsForm STATE", postObj);

    // Firebase DB creates own id for postObj
    // Firebase Storage does not create an image id
    //-----------------------------------------------------------
    //-----------------------------------------------------------

    // if updating a post
    console.log("postObj.id", postObj.id);
    if (postObj.id !== null) {
      // if post submits new image file, puts it into Fire Storage
      if (postObj.imgFile !== null) {
        console.log("UPDATING IMAGE", postObj.imgFile);
        // if post has previous image, deletes it
        console.log("prevSrc", postObj.prevSrc);
        if (postObj.prevSrc !== null) {
          console.log("DELETING PREVIOUS IMAGE", postObj.prevSrc);
          deleteImageFireStorage(postObj.prevSrc);
          this.setState({ prevSrc: null }); // clearState() will do this
        }
        console.log("PUTTING IMAGE INTO FIRE STORAGE:", postObj.src);
        putImageFireStorage(postObj);
      }

      console.log("UPDATING THIS NEW POST INTO FIRE DB", postObj);
      pushOrSetPostFireDB("news", postObj, "update", this.props.editNews);
    } else {
      // since creating (not updating) a post
      // if post submits image, puts into fire storage
      console.log("333 postObj.imgFile", postObj.imgFile);
      if (postObj.imgFile !== null) {
        console.log(
          "PUTTING NEW POST'S IMAGE INTO FIRE STORAGE:",
          postObj.imgFile
        );
        putImageFireStorage(postObj);
      }
      console.log("PUSHING THIS NEW POST INTO FIRE DB", postObj);
      pushOrSetPostFireDB("news", postObj, "push", this.props.editNews);
    }
  }
  render() {
    const { name, title, text } = this.state;
    return (
      // NAME, TITLE, TEXT, IMG ADMIN INPUTS
      <div style={{ width: "50%", marginBottom: "50px" }} className="container">
        <form onSubmit={this.handleSubmit} id="form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              name="name"
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              value={title}
              name="title"
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="title"
              placeholder="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <textarea
              value={text}
              name="text"
              rows="3"
              onChange={this.handleChange}
              className="form-control"
              id="text"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="img">image</label>
            <input
              name="img"
              onChange={this.handleImageChange}
              type="file"
              className="form-control-file"
              id="img"
            />
          </div>
          <div id="flex">
            <input type="submit" className="btn btn-primary" />
            <input
              id="clearBtn"
              type="reset"
              className="btn btn-warning"
              onClick={this.clearState}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default NewsForm;
