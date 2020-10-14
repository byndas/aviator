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
    id: null,
    prevSrc: null,
    src: null,
    name: "",
    title: "",
    text: ""
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("nextProps.editObj", nextProps.editObj);
  //   console.log("prevState", prevState);

  //   if (nextProps.editObj !== prevState) {
  //     return nextProps.editObj;
  //   } else return null;
  // }

  componentWillReceiveProps(nextProps) {
    console.log("EDIT OBJ", nextProps.editObj);

    if (nextProps.editObj !== null) {
      this.setState(nextProps.editObj);
      // merges objToEdit into current state
      console.log("NewsForm STATE", this.state);
    }
  }

  clearState() {
    this.setState(this.emptyState);
    console.log("NewsForm STATE", this.state);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({ src: file });
    };
    reader.readAsDataURL(file);
  }
  handleSubmit(e) {
    e.preventDefault();

    // copy of state to put into Firebase DB & Storage
    let postObj = this.state;
    console.log("OBJ TO SUBMIT", postObj);
    // Firebase DB creates own id for postObj
    //-----------------------------------------------------------
    //-----------------------------------------------------------
    // if updating a post
    if (postObj.id == true) {
      // if post submits new image, puts into Fire Storage
      if (postObj.src == true) {
        console.log("UPDATING IMAGE", postObj.src);
        // if post has previous image, deletes it
        if (postObj.prevSrc == true) {
          console.log("DELETING PREVIOUS IMAGE", postObj.prevSrc);
          deleteImageFireStorage(postObj.prevSrc);
          this.setState({ prevSrc: null });
        }
        console.log("PUTTING IMAGE INTO FIRE STORAGE:", postObj.src);
        putImageFireStorage(postObj);
      }
      pushOrSetPostFireDB("news", postObj, "set");
    } else {
      // since creating (not updating) a post
      // if post submits image, puts into fire storage
      if (postObj.src == true) {
        console.log("PUTTING NEW POST'S IMAGE INTO FIRE STORAGE:", postObj.src);
        putImageFireStorage(postObj.src);
      }
      console.log("PUSHING NEW POST INTO FIRE DB", postObj.id);
      pushOrSetPostFireDB("news", postObj, "push");
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
              onChange={e => this.handleChange(e)}
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
              onChange={e => this.handleChange(e)}
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
              onChange={e => this.handleChange(e)}
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
