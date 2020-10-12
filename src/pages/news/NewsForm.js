import React, { Component } from "react";
import firebase from "firebase";
// import { icon } from "@fortawesome/fontawesome-svg-core";

class NewsForm extends Component {
  constructor(props) {
    super(props);
    // state controls form inputs
    this.state = {
      name: "",
      title: "",
      text: "",
      src: null,
      prevSrc: null,
      id: null
    };

    this.clearState = this.clearState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const editObj = nextProps.editObj;
    console.log("edit Obj", editObj);
    if (editObj !== null) {
      this.setState({
        name: editObj.name,
        title: editObj.title,
        text: editObj.text,
        prevSrc: editObj.src,
        id: editObj.id
      });
    }
  }
  clearState() {
    this.setState({
      name: "",
      title: "",
      text: "",
      prevSrc: null,
      src: null,
      id: null
    });
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

    console.log("NewsForm STATE", this.state);

    let imgGuid, snapShot;

    let postObj = {
      name: this.state.name,
      title: this.state.title,
      text: this.state.text,
      src: this.state.src
    };

    const fireDbNews = firebase.database().ref("base/news");

    function firebaseStoresImg() {
      const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      };

      const guid = () => {
        return (
          s4() +
          s4() +
          "-" +
          s4() +
          "-" +
          s4() +
          "-" +
          s4() +
          "-" +
          s4() +
          s4() +
          s4()
        );
      };

      let imgGuid = guid();

      const imagesRef = firebase
        .storage()
        .ref()
        .child("images/" + imgGuid);
      //-----------------------------------------------------------
      const putsImageInFireStorage = imagesRef.put(this.state.src);
      //-----------------------------------------------------------

      // logs photo's upload % status
      putsImageInFireStorage.on("state_changed", snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("UPLOAD %", progress);
      });

      putsImageInFireStorage
        .then(snapshot => {
          snapShot = snapshot;
          // saves new photo's data from Firebase storage snapshot
          console.log("snapshot", snapshot);
          const imgPath = snapshot.metadata.fullPath.split("/")[1];

          // saves new photo's Firebase storage link
          const storageUrl =
            "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/images%2F" +
            imgPath +
            "?alt=media&token=00c54936-5fd4-41e8-9028-4432c1996816";

          // sets new photo's Firebase storage link
          postObj.src = storageUrl;
        })
        .catch(error => {
          console.log("IMAGE STORAGE FAILED", error.message);
        });
    }

    // if updating post
    if (this.state.id) {
      // if post submits new photo
      if (this.state.src) {
        console.log("POST UPDATING PHOTO:", this.state.src);
        // if post has previous photo
        if (this.state.prevSrc) {
          console.log(
            "DELETING UPDATED POST'S PREVIOUS PHOTO:",
            this.state.prevSrc
          );

          // USE this.state.prevSrc ?
          // .child("images/" + imgGuid).delete()

          // removes prevSrc from FB storage
          firebase
            .storage()
            .ref.child(snapShot.ref.location.path_)
            .delete()
            .then(res => {
              console.log("FIREBASE DELETED POST'S PREVIOUS IMAGE", res);
            })
            .catch(error => {
              console.log(
                "FIREBASE FAILED TO DELETE POST'S PREVIOUS IMAGE",
                error.message
              );
            });
        }
        console.log(
          "PUTTING UPDATED POST'S PHOTO INTO FIRE STORAGE:",
          this.state.src
        );
        // PUTS POST'S NEW PHOTO INTO FIRE STORAGE
        firebaseStoresImg();
      }
      const fireDbUpdateRef = id => {
        console.log("FIRE DB UPDATING POST", id);
        // Firebase DB updating post
        fireDbNews.child(id).set(postObj);
      };

      fireDbUpdateRef(this.state.id)
        .then(res => {
          console.log("DB RESPONDS: ", res);
          // once Firebase DB updates post,
          // Redux updates post
          this.props.editNews(postObj, this.state.id);

          // clears admin input form
          document.getElementById("clearBtn").click();
        })
        .catch(err => {
          // DB fails to save post
          console.log("DB POST FAILED", err.message);
          if (this.state.src) {
            // if post has new image, removes it from storage
            firebase
              .storage()
              .ref()
              .child("images/" + imgGuid)
              .delete()
              .then(res => {
                // image deleted
                console.log("FIREBASE DELETED POST'S NEW IMAGE", res);
              })
              .catch(error => {
                // image not deleted
                console.log(
                  "FIREBASE FAILED TO DELETE POST'S NEW IMAGE",
                  error.message
                );
              });
          }
        });
    } else {
      // sinces creating new post,
      // if post submits photo, puts into fire storage
      if (this.state.src) {
        console.log(
          "PUTTING NEW POST'S PHOTO INTO FIRE STORAGE:",
          this.state.src
        );
        // PUTS POST'S NEW PHOTO INTO FIRE STORAGE
        firebaseStoresImg();
      }
      console.log("PUSHING NEW POST TO FIREBASE DB", this.state.id);

      // PUSHING NEW POST INTO FIRE DB
      fireDbNews
        .push(postObj)
        .then(res => {
          console.log("DB RESPONDS: ", res);
          // once Fire DB creates new post,
          // CLEARS ADMIN INPUT FORM
          document.getElementById("clearBtn").click();
        })
        .catch(err => {
          // Fire DB fails to save post
          console.log("FIRE DB POST FAILED", err.message);
          if (this.state.src) {
            // if post has new image, removes it from storage
            firebase
              .storage()
              .ref()
              .child("images/" + imgGuid)
              .delete()
              .then(res => {
                // image deleted
                console.log("FIREBASE DELETED POST'S NEW IMAGE", res);
              })
              .catch(error => {
                // image not deleted
                console.log(
                  "FIREBASE FAILED TO DELETE POST'S NEW IMAGE",
                  error.message
                );
              });
          }
        });
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
