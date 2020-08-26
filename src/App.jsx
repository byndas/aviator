import React from "react";
import "./App.styles.css";
import Navbar from "./navbar/navbar.component";
import { Route, Switch } from "react-router-dom";
import Home from "./home/home.component";
import About from "./about/about.component";
import Contact from './contact/Contact.component';
import Gallery from "./gallery/Gallery.component";
import Catalog from './catalog/Catalog.component';
import Projects from "./projects/Projects.component";
import Calendar from "./calendar/Calendar.component";


const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/gallery' component={Gallery}/>
      <Route exact path='/catalog' component={Catalog}/>
      <Route exact path='/projects' component={Projects}/>
      <Route exact path='/calendar' component={Calendar}/>
    </Switch>
  </div>
);

export default App;
