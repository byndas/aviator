import React from "react";
import { Route, Switch } from "react-router-dom";
// import { Switch, Route, Redirect } from "react-router-dom";
// import { createStructuredSelector } from "reselect";

import "./App.css";
// import { connect } from "react-redux";
// import { loginUser } from "./redux/store";

import Navbar from "./navbar/navbar.component";
import Home from "./home/home.component";
import About from "./about/about.component";
import Contact from "./contact/contact.component";
import Gallery from "./gallery/gallery.component";
import Catalog from "./catalog/catalog.component";
import Login from "./login/login.component";
// import { render } from "@testing-library/react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const { loginUser } = this.props;
  }
  // export const App = () => (
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
