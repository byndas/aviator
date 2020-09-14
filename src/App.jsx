import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { fireAuth } from "./firebase/Firebase.config";

import "./App.styles.css";
import Navbar from "./navbar/navbar.component";
// import Navbar2 from "./navbar/navbar2.component";
import Home from "./pages/home/home.component";
import About from "./pages/about/about.component";
import Calendar from "./pages/calendar/Calendar.component";
import Catalog from "./pages/catalog/Catalog.component";
import Contact from "./pages/contact/Contact.component";
import Gallery from "./pages/gallery/Gallery.component";
import Login from "./pages/login/Login.component";
import News from "./pages/news/News.component";
import Projects from "./pages/projects/Projects.component";
import projects from "./pages/projects/ProjectList";
import news from "./pages/news/NewsList";
import calendar from "./pages/calendar/CalendarList";
import gallery from "./pages/gallery/GalleryList";
import SingleProject from "./pages/projects/SingleProject";
import { LanguageProvider } from "./context/LanguageContext";

import { setDate } from "./redux/calendar/calendar.actions";
import { logAdmin } from "./redux/admin/admin.actions";

// 1nt3rnat10nal

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      searchMode: false,
      searchInput: "",
      projects: projects,
      news: news,
      calendar: calendar,
      gallery: gallery
    };
    this.findProject = this.findProject.bind(this);
    this.createNews = this.createNews.bind(this);
    this.removeNews = this.removeNews.bind(this);
    this.createProject = this.createProject.bind(this);
    this.removeProject = this.removeProject.bind(this);
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
  }
  findProject(id) {
    return this.state.projects.find(prj => prj.id === id);
  }

  createNews(name, title, text) {
    this.setState({
      news: [{ name, title, text, id: "news03" }, ...this.state.news]
    });
  }
  removeNews(id) {
    const filtered = this.state.news.filter(news => news.id !== id);
    this.setState({
      news: filtered
    });
  }
  createProject(name, subTitle, text) {
    this.setState({
      projects: [
        { name, subTitle, text, id: "project3" },
        ...this.state.projects
      ]
    });
  }
  removeProject(id) {
    const filtered = this.state.projects.filter(prj => prj.id !== id);
    this.setState({
      projects: filtered
    });
  }
  setSearchInput(event) {
    this.setState({
      searchInput: event.target.value
    });
  }
  searchResultsPage() {}
  render() {
    const {
      auth,
      searchMode,
      searchInput,
      news,
      projects,
      calendar
    } = this.state;
    return (
      <div>
        <LanguageProvider>
          <Navbar
            auth={auth}
            searchMode={searchMode}
            searchInput={searchInput}
            setSearchInput={this.setSearchInput}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/login" render={props => <Login {...props} />} /> */}
            <Route
              exact
              path="/login"
              render={() =>
                this.state.auth ? <Redirect to="/news" /> : <Login />
              }
            />

            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/calendar"
              render={() => (
                <Calendar
                  calendar={calendar}
                  auth={auth}
                  searchInput={searchInput}
                />
              )}
            />
            <Route
              exact
              path="/catalog"
              render={() => <Catalog auth={auth} searchInput={searchInput} />}
            />
            <Route
              exact
              path="/gallery"
              render={() => (
                <Gallery
                  gallery={gallery}
                  auth={auth}
                  searchInput={searchInput}
                />
              )}
            />
            <Route
              exact
              path="/news"
              render={() => (
                <News
                  news={news}
                  auth={auth}
                  searchInput={searchInput}
                  createNews={this.createNews}
                  removeNews={this.removeNews}
                />
              )}
            />
            <Route
              exact
              path="/projects"
              render={() => (
                <Projects
                  projects={projects}
                  auth={auth}
                  searchInput={searchInput}
                  createProject={this.createProject}
                  removeProject={this.removeProject}
                />
              )}
            />
            <Route
              exact
              path="/projects/:id"
              render={props => (
                <SingleProject
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

// const mapDispatchToProps = dispatch => ({
//   // logAdmin is the action creator function
//   // adminObj is the action object payload
//   adminState: adminObj => dispatch(logAdmin(adminObj))
// });
// export default connect(null, mapDispatchToProps)(App);

export default App;
