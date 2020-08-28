import React from "react";
import "./App.styles.css";
import Navbar from "./navbar/navbar.component";
import { Route, Switch } from "react-router-dom";
import Home from "./home/home.component";
import About from "./about/about.component";
import Calendar from "./calendar/Calendar.component";
import Catalog from "./catalog/Catalog.component";
import Contact from "./contact/Contact.component";
import Gallery from "./gallery/Gallery.component";
import Login from "./login/Login.component";
import Projects from "./projects/Projects.component";
import { ConsoleWriter } from "istanbul-lib-report";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authorized: false };
  }
  authorize() {
    this.setState({ authorized: true });
    console.log(this.state.authorized);
  };
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
{/* this render={} is the only way to pass props to Route components */}
          <Route exact path="/calendar" render={ props => <Calendar {...props} adminIn={this.state.authorized}/> } />
          <Route exact path="/catalog" render={ props => <Catalog {...props} adminIn={this.state.authorized}/> } />
          <Route exact path="/gallery" render={ props => <Gallery {...props} adminIn={this.state.authorized}/> } />
          <Route exact path="/projects" render={ props => <Projects {...props} adminIn={this.state.authorized}/> } />
          <Route exact path="/login" render={ props => <Login {...props} auth={this.authorize.bind(this)} adminIn={this.state.authorized}/> } />
        </Switch>
      </div>
    );
  }
}
export default App;
