import React, { Component } from "react";
import firebase from "firebase";

class NewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", title: "", text: "", imgFile: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
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
      this.setState({ imgFile: file });
    };
    reader.readAsDataURL(file);
  }
  handleSubmit(e) {
    e.preventDefault();

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
    const uploadTask = imagesRef.put(this.state.imgFile);
    uploadTask.on("state_changed", snapshot => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
    });
    uploadTask
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

        firebase
          .database()
          .ref("base/news")
          .push(postObj)
          .then(res => {
            // const fbResp = JSON.parse(JSON.stringify(res)).split("/");
            // const postObjId = fbResp[fbResp.length - 1];
            // postObj.id = postObjId;
            // console.log("redux obj", postObj);
            // this.props.addNewsObjectToRedux(postObj);
          })
          .catch(err => {
            // in the case of failure saving to db
            console.log("img was uploaded but post failed", err);
            // logic delete uploaded img, clear img from storage.
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
                console.log("failed to delete img");
              });
          });
      })
      .catch(error => {
        console.log("image was not uploaded to storage", error);
      });
  }

  render() {
    const { name, title, text } = this.state;
    // const form = document.getElementById("form");

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
              onChange={e => this.handleImageChange(e)}
              type="file"
              className="form-control-file"
              id="img"
            />
          </div>
          <div id="flex">
            <input type="submit" className="btn btn-primary" />
            <input type="reset" className="btn btn-warning" />
          </div>
        </form>
      </div>
    );
  }
}

export default NewsForm;
