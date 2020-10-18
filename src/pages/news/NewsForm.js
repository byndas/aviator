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
    this.state = {
      imgFile: null, // "choose file" click populates imgFile
      src: null,
      id: null,
      name: "",
      title: "",
      text: ""
    };


    this.clearState = this.clearState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.newImage = this.newImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  emptyState = {
    id: null,
    imgFile: null,
    src: null,
    name: "",
    title: "",
    text: ""
  };
  componentWillReceiveProps(nextProps) {
    console.log("EDIT OBJ", nextProps.editObj);
    console.log("STATE", this.state);

    const nextPropsEditObj = nextProps.editObj;

    if (nextPropsEditObj !== null) {
      if (
        nextPropsEditObj.id !== this.state.id ||
        nextPropsEditObj.name !== this.state.name ||
        nextPropsEditObj.title !== this.state.title ||
        nextPropsEditObj.text !== this.state.text ||
        nextPropsEditObj.src !== this.state.src
      ) {
        // merges objToEdit into current state
        // enables admin input form to edit post data
        this.setState(nextPropsEditObj);
        this.setState({ prevProps: nextPropsEditObj });
      }
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
  newImage(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    console.log("NEW IMAGE", file);

    reader.onloadend = () => {
      this.setState({ imgFile: file });
    };
    if (typeof file !== "undefined") {
      reader.readAsDataURL(file);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("STATE", this.state);

    if (this.state === this.emptyState) return;

    const { src, name, title, text } = this.state;

    const postObj = {
      src,
      name,
      title,
      text
    };
    // IF NEW POST
    if (this.state.id === null) {
      // WITHOUT NEW IMAGE
      if (this.state.imgFile === null) {
        return alert("UPLOAD AN IMAGE");
      }

      console.log("PUTTING NEW IMAGE INTO FIRE STORAGE:", postObj.src);
      putImageFireStorage("news", this.state, postObj);
    }
    // SINCE EDIT POST WITH NEW IMAGE
    else if (this.state.src !== null) {
      console.log("STATE SRC", this.state.src);
      if (this.state.imgFile !== null) {
        deleteImageFireStorage(this.state.src);
        // postObj.src = null;  // UNNECESSARY?
        console.log("PUTTING NEW IMAGE INTO FIRE STORAGE");
        putImageFireStorage("news", this.state, postObj, this.props.editNews);
      }
    }
    // SINCE EDIT POST WITHOUT NEW IMAGE
    else {
      pushOrSetPostFireDB("news", this.state, postObj, this.props.editNews);
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
              onChange={this.newImage}
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
