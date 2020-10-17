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
      id: null, // edit populates

      name: "", // edit might populate
      title: "", // edit might populate
      text: "", // edit might populate
      src: null, // might populate

      // prevSrc: null, // edit might populate
      imgFile: null // "choose file" button populates on submit
    };

    this.clearState = this.clearState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.newImage = this.newImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  emptyState = {
    id: null, // edit populates

    name: "", // edit might populate
    title: "", // edit might populate
    text: "", // edit might populate
    src: null, // might populate

    prevSrc: null, // edit might populate
    imgFile: null // "choose file" button populates on submit
  };

  componentWillReceiveProps(nextProps) {
    console.log("EDIT OBJ", nextProps.editObj);

    const nextPropsEditObject = nextProps.editObj;

    if (nextPropsEditObject !== null) {
      if (
        nextPropsEditObject.id !== this.state.id ||
        nextPropsEditObject.name !== this.state.name ||
        nextPropsEditObject.title !== this.state.title ||
        nextPropsEditObject.text !== this.state.text ||
        nextPropsEditObject.src !== this.state.src ||
        nextPropsEditObject.prevSrc !== this.state.prevSrc ||
        nextPropsEditObject.imgFile !== this.state.imgFile
      ) {
        // merges objToEdit into current state
        // enables admin input form to edit post data
        this.setState(nextPropsEditObject);
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
    reader.readAsDataURL(file);
  }
  handleSubmit(e) {
    e.preventDefault();
    // ABORTS IF STATE EMPTY
    if (this.state === this.emptyState) return;

    // copy of state to put into Firebase DB & Storage
    const postObj = this.state;
    console.log("POST OBJ / NewsForm STATE", postObj);

    /*  AT THIS POINT: EVERYTHING WORKS!

    CREATE POST OBJ:
      id: null
      imgFile: File {name: "enoCollection.jpg", …}
      src: "https://...f89a0de3-8e0c-d52a-8f87-7bec1f1c4521?alt=media&token=00c54936-5fd4-41e8-9028-4432c1996816"
      name: "b"
      text: "b"
      title: "b"

    EDIT POST OBJ:
      id: "-MJqwOwyorwnaZWGH_jD",   
      imgFile: File {name: "covid-19GE.png", …}
      name: "bA"
      prevSrc: "https://...f89a0de3-8e0c-d52a-8f87-7bec1f1c4521?alt=media&token=00c54936-5fd4-41e8-9028-4432c1996816"
      src: "https://...c040894f-cd99-8a9e-fdba-0caee3002380?alt=media&token=00c54936-5fd4-41e8-9028-4432c1996816"
      text: "bA"
      title: "Ab"

      WHAT HAPPENS NEXT:
        X*X DB UPDATES POST ID BUT FAILS SOMEHOW
        *** STORAGE THEN DELETES NEW IMAGE
        XXX EDIT NEWS FAILS, UPDATES REDUX ID WITH UNDEFINED DATA


      WHAT AUGHT TO HAPPEN: BB
        ADD SRC TO STORAGE (DO FIRST?)
        REMOVE PREVSRC FROM STORAGE

        DELETE POSTOBJ.PREVSRC
        DELETE POSTOBJ.IMGFILE
        (OR SET TO NULL?)
        
        SET DB.POSTOBJ.ID TO POSTOBJ
        EDITNEWS(POSTOBJ, POSTOBJ.ID)



    */

    // if (postObj.prevSrc !== null) {
    //   postObj.src = postObj.prevSrc;
    // }

    //-----------------------------------------------------------
    //-----------------------------------------------------------
    // Firebase DB creates own id for postObj
    // Firebase Storage does not create an image id
    //-----------------------------------------------------------
    //-----------------------------------------------------------

    // IF UPDATING A POST
    console.log("postObj.id", postObj.id);
    if (postObj.id !== null) {
      // IF NEW IMAGE, PUTS IMAGE FILE INTO FIRE STORAGE
      if (postObj.imgFile !== null) {
        console.log("UPDATING IMAGE", postObj.imgFile);
        // UPDATING POST WITH NEW IMAGE: IF PREVIOUS IMAGE, DELETES IT
        if (postObj.src !== null) {
          postObj.prevSrc = postObj.src;
          console.log(
            "DELETING PREVIOUS IMAGE FROM FIRE STORAGE",
            postObj.prevSrc
          );
          deleteImageFireStorage(postObj, true, this.props.editNews);
        } else {
          console.log(
            "PUTTING NEW IMAGE INTO FIRE STORAGE (NO PREV IMAGE)",
            postObj.src
          );
          putImageFireStorage(postObj, this.props.editNews);
          console.log(postObj.src);
        }
      } else {
        console.log("UPDATING THIS NEW POST INTO FIRE DB", postObj);
        pushOrSetPostFireDB("news", postObj, this.props.editNews);
      }
    } else {
      // since creating (not updating) a post
      // if post submits image file, puts into fire storage
      console.log("imgFile", postObj.imgFile);
      if (postObj.imgFile !== null) {
        // NEW POST, NEW IMAGE:

        console.log("PUTTING NEW POST IMAGE INTO FIRE STORAGE:");
        putImageFireStorage(postObj, this.props.editNews);
        console.log(postObj.src);
      } else {
        console.log("PUSHING NEW POST OBJ INTO FIRE DB", postObj);
        pushOrSetPostFireDB("news", postObj, this.props.editNews);
      }
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
