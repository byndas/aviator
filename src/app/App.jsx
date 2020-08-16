import React from "react";
import "./App.css";
import Navbar from "../navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Video from "../video/Video";
import AboutUs from "../aboutUs/AboutUs";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Navbar />} />
        <Route exact path="/about" render={() => <AboutUs />} />
      </Switch>
      <div>
        <Video />
      </div>
    </div>
  );
}

export default App;
