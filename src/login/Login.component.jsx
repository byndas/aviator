import React from "react";
import "./Login.styles.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      password: () => "ok"
    };
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  checkPassword(event) {
    event.preventDefault();
    if (this.state.input === "ok") {
      return this.props.login;
    }
    this.setState({
      input: ""
    });
  }

  render() {
    return (
      <div id="container">
        <div id="login-container">
          <form id="form">
            <div className="form-group">
              <input
                id="password"
                name="password"
                className="form-control"
                type="password"
                placeholder="Enter password ... "
                onChange={this.handleChange.bind(this)}
                value={this.state.input}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                id="submit"
                className="form-btn"
                onClick={this.checkPassword.bind(this)}
              >
                LOGIN >>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
