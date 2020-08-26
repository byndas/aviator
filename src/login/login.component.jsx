import React from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/store";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
  }
  handleChange(event) {
    this.setState({
      password: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();

    loginUser(this.state.password);

    this.setState({ password: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button>SUBMIT PASSWORD</button>
          <input
            name="password"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}
            type="password"
            placeholder="password"
          />
          <br />
          AUTHENTICATED: {this.state.authenticated}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ authenticated: state });

const mapDispatchToProps = dispatch => ({
  loginUser: password => dispatch(loginUser(password))
});

connect(mapStateToProps, mapDispatchToProps)(Login);

export default Login;
