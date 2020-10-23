import "./App.styles.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fireAuth, fireDbRef } from "./firebase/Firebase.config";
import { storeFireDb } from "./redux/site/site.actions";
import { LanguageProvider } from "./context/LanguageContext";

import Navbar from "./navbar/navbar.component";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import Catalog from "./pages/catalog/Catalog.component";
import Contact from "./pages/contact/Contact.component";
import Gallery from "./pages/gallery/Gallery.component";
import Login from "./pages/login/Login.component";
import News from "./pages/news/News.component";
import Projects from "./pages/projects/Projects.component";
import SingleProject from "./pages/projects/SingleProject";
import SearchResults from "./pages/searchResults/SearchResults.component";

// 1nt3rnat10nal

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      searchInput: ""
    };
    this.findProject = this.findProject.bind(this);
    this.setSearchInput = this.setSearchInput.bind(this);
  }
  componentDidMount() {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ auth: true });
      } else {
        this.setState({ auth: false });
      }
      console.log("adminMode = " + this.state.auth);
    });
    fireDbRef.on("value", snapshot => {
      console.log("FIRE DB BASE SNAPSHOT:", snapshot.val());
      this.props.storeFireDb(snapshot.val());
    });
  }
  findProject(id) {
    // return this.state.projects.find(prj => prj.id === id);
  }
  setSearchInput(event) {
    this.setState({
      searchInput: event.target.value
    });
  }

  render() {
    const { auth, searchInput } = this.state;
    return (
      <div>
        <LanguageProvider>
          <Navbar
            auth={auth}
            searchInput={searchInput}
            setSearchInput={this.setSearchInput}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/login"
              render={() =>
                this.state.auth ? <Redirect to="/news" /> : <Login />
              }
            />
            <Route
              exact
              path="/searchResults"
              render={() => <SearchResults searchInput={searchInput} />}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/catalog"
              render={() => (
                <Catalog auth={auth} reduxStore={this.props.reduxStore} />
              )}
            />
            <Route
              exact
              path="/gallery"
              render={() => (
                <Gallery auth={auth} reduxStore={this.props.reduxStore} />
              )}
            />
            <Route
              exact
              path="/news"
              render={() => (
                <News auth={auth} reduxStore={this.props.reduxStore} />
              )}
            />
            <Route
              exact
              path="/projects"
              render={() => (
                <Projects auth={auth} reduxStore={this.props.reduxStore} />
              )}
            />
            <Route
              exact
              path="/projects/:id"
              render={props => (
                <SingleProject
                  reduxStore={this.props.reduxStore}
                  projects={this.findProject(props.match.params.id)}
                />
              )}
            />
            <Redirect to="/" />
          </Switch>
        </LanguageProvider>
      </div>
    );
  }
}

export default connect(null, { storeFireDb })(App);
