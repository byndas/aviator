import React from "react";
import "./App.styles.css";
import Navbar from "./navbar/navbar.component";
import { Route, Switch } from "react-router-dom";
import Home from "./home/home.component";
import About from "./about/about.component";
import Contact from './contact/Contact.component';



const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route extact path='/contact' component={Contact}/>
    </Switch>
 
  </div>
);

export default App;
