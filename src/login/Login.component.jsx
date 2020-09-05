import React from "react";
import firebase from "firebase";
import "./Login.styles.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword("webdev.byndasma@gmail.com", this.state.input)
      .catch(error => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-email") {
          console.log({ eError: "Format error", pError: "" });
        } else if (errorCode === "auth/user-disabled") {
          console.log({ eError: "User is disabled", pError: "" });
        } else if (errorCode === "auth/user-not-found") {
          console.log({ eError: "User not found", pError: "" });
        } else if (errorCode === "auth/wrong-password") {
          console.log({ eError: "", pError: "Wrong password" });
        }
      })
      .then(success => {
        if (success) {
          // must use REDUX no more props
          this.props.authenticated();
          this.props.history.push("/news");
        }
      });
    this.setState({ input: "" });
    //1nt3rnat10nal
  }
  render() {
    return (
      <div id="container">
        <div id="login-container">
          <form id="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              ADMINISTRATOR
              <input
                id="password"
                name="password"
                className="form-control"
                type="password"
                placeholder="enter password"
                value={this.state.input}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <input
                id="submit"
                className="form-btn"
                type="submit"
                value="log in"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
