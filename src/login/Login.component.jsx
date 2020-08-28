import React from "react";
import "./Login.styles.css";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      password: "ok"
    };
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log(this.props.auth);
    if (this.state.input === this.state.password) {
      document.getElementById("hiddenButton").click();
      document.getElementById("login-container").style.display="none";
    }
    this.setState({ input: "" });
  }

  render() {
    return (
      <div id="container">
        <div id="login-container">
          <form id="form" onSubmit={this.handleSubmit.bind(this)} >
           
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
              <button id="submit" className="form-btn" type="submit">
                Sign In >>
              </button>
              <button id="hiddenButton" type="button" onClick={this.props.auth} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;