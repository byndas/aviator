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
    if (this.state.input === this.state.password) {
      // document.getElementById("hiddenButton").click();
      document.getElementById("login-container").style.display = "none";
    }
    this.setState({ input: "" });
  }
  // password is "1nt3rnat10nal";

  handleClick() {
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
          alert("ADMIN LOGGED IN");
          // this.props.auth
        }
      });
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
              <button
                onClick={this.handleClick.bind(this)}
                id="submit"
                className="form-btn"
                type="submit"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
