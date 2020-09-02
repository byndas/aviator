import React from "react";
import "./Login2.styles.css";
import { render } from "@testing-library/react";

const Login2 = props => ({
//   constructor(props) {
//     super(props);
    
    // this.state = {
    //   input: "",
    //   password: "ok"
    // };
//   }
//   handleChange(event) {
//     this.setState({
//       input: event.target.value
//     });
//   }
//   handleSubmit = (event) => {
//     event.preventDefault();
//     if (this.state.input === this.state.password) {
      // document.getElementById("hiddenButton").click();
//       document.getElementById("login-container").style.display = "none";
//     }
//     this.setState({ input: "" });
// }
    return (
      <div id="container">
        <div id="login-container">
          <div id="form" //onSubmit={this.handleSubmit.bind(this)}
          >
            <div className="form-group">
              ADMINISTRATOR
              <input
                id="password"
                name="password"
                className="form-control"
                type="password"
                placeholder="enter password"
                // value={this.state.input}
                // onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <button 
                id="submit" 
                className="form-btn" 
                type="button" 
                onClick={
                    document.getElementById("password").target.value === props.adminPassword ?
                    document.getElementById("login-container").style.display = "none";
                }>
                Log In
              </button>
              {/* <button
                  id="hiddenButton"
                  type="button"
                  onClick={this.props.logIn}
                /> */}
            </div>
          </div>
        </div>
      </div>


export default Login2;
