import React, { Component } from "react";
import firebase from "firebase";
// import { icon } from "@fortawesome/fontawesome-svg-core";

class NewsForm extends Component {
  constructor(props) {
    super(props);
    // state controls form inputs
    this.state = { name: "", title: "", text: "", src: null };

    this.clearState = this.clearState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updatePostInputs = this.updatePostInputs.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const editObj = nextProps.editObj;
    console.log("edit Obj", editObj);
    if (editObj !== null) {
      this.setState({
        name: editObj.name,
        title: editObj.title,
        text: editObj.text,
        src: editObj.src,
        id: editObj.id
      });
    }
  }
  clearState() {
    this.setState({
      name: "",
      title: "",
      text: "",
      src: null
      // name: this.props.editObj.name,
      // title: this.props.editObj.title,
      // text: this.props.editObj.text,
      // src: this.props.editObj.src,
      // id: this.props.editObj.id
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

    console.log("STATE", this.state);

    if (this.state.src) {
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
      const imgGuid = guid();

      const imagesRef = firebase
        .storage()
        .ref()
        .child("images/" + imgGuid);

      const uploadPost = imagesRef.put(this.state.src);

      // upload progress bar
      uploadPost.on("state_changed", snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("UPLOAD %", progress);
      });
      //
      uploadPost
        .then(snapshot => {
          const imgPath = snapshot.metadata.fullPath.split("/")[1];

          const storageUrl =
            "https://firebasestorage.googleapis.com/v0/b/aviator-db.appspot.com/o/images%2F" +
            imgPath +
            "?alt=media&token=00c54936-5fd4-41e8-9028-4432c1996816";

          const postObj = {
            name: this.state.name,
            title: this.state.title,
            text: this.state.text,
            src: storageUrl
          };

          let fireDbRef;

          if (this.state.id) {
            fireDbRef = firebase
              .database()
              .ref(`base/news/${this.state.id}`)
              .set(postObj);
          } else {
            fireDbRef = firebase
              .database()
              .ref("base/news")
              .push(postObj);
          }
          fireDbRef
            .then(res => {
              console.log("RESPONSE: ", res);
              // once firebase has updated this news post,
              // dispatches editNews action to update this news post in Redux
              if (this.state.id) {
                this.props.editNews(postObj, this.state.id);
              }
              // clears form after submission complete
              document.getElementById("clearBtn").click();
            })
            .catch(err => {
              // db fails to save post
              console.log("img uploaded but post failed to upload", err);
              // clears image from storage
              firebase
                .storage()
                .ref()
                .child("images/" + imgGuid)
                .remove()
                .then(() => {
                  // image was deleted
                  console.log("successfully deleted img from firebase");
                })
                .catch()(error => {
                // image not deleted
                console.log(
                  "failed to delete img from firebase",
                  error.message
                );
              });
            });
        })
        .catch(error => {
          console.log("image was not uploaded to storage", error.message);
        });
    } else {
      const noImgPost = {
        name: this.state.name,
        title: this.state.title,
        text: this.state.text,
        src: null
      };

      let fireDbRef;

      if (this.state.id) {
        fireDbRef = firebase
          .database()
          .ref(`base/news/${this.state.id}`)
          .set(noImgPost);
      } else {
        fireDbRef = firebase
          .database()
          .ref("base/news")
          .push(noImgPost);
      }
      fireDbRef
        .then(res => {
          console.log("RESPONSE: ", res);
          // once firebase has updated this news post,
          // dispatches editNews action to update this news post in Redux
          if (this.state.id) {
            this.props.editNews(noImgPost, this.state.id);
          }
          // clears form after submission complete
          document.getElementById("clearBtn").click();
        })
        .catch(err => {
          // db fails to save post
          console.log("post failed", err);
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
              onChange={e => this.handleImageChange(e)}
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
