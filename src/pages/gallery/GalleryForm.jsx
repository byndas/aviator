import React, { Component } from "react";
import firebase from "firebase";
// import UseNewsState from './NewsHooks/UseNewsState';

class GalleryForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const postObj = {
      text: this.state.text,
      src: "here goes uploaded img url"
    };
    firebase
      .database()
      .ref("gallery")
      .push(postObj)
      .then(res => {
        const fbResp = JSON.parse(JSON.stringify(res)).split("/");
        const postObjId = fbResp[fbResp.length - 1];
        postObj.id = postObjId;
        console.log("redux obj", postObj);
        // this.props.addNewsObjectToRedux(postObj);
      })
      .catch(err => {
        // in the case of failure saving to fb
      });
    // this.props.createNews(this.state.name, this.state.title, this.state.text)
    // this.setState({ name : '', title: '', text: '' })
  }
  render() {
    const { text } = this.state;
    return (
      // ONLY TEXT & IMAGE ADMIN INPUTS
      <div style={{ width: "50%", marginBottom: "50px" }} className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <textarea
              value={text}
              onChange={this.handleChange}
              className="form-control"
              id="text"
              rows="3"
              name="text"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="img">image</label>
            <input
              name="img"
              type="file"
              className="form-control-file"
              id="img"
            />
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default GalleryForm;
