import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { fireAuth } from "./firebase/Firebase.config";

import "./App.styles.css";
import Navbar from "./navbar/Navbar.component";
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
      adminMode: false,
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
  }

  unsubscribeFireAuth = null;
  componentDidMount() {
    this.unsubscribeFireAuth = fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ adminMode: true });
      } else {
        this.setState({ adminMode: false });
      }
      console.log("adminMode = " + this.state.adminMode);
    });
  }
  // closes messaging system between website and firebase to prevent memory leaks
  componentWillUnmount() {
    this.unsubscribeFireAuth();
    fireAuth.signOut();
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
  render() {
    const { adminMode } = this.state;
    return (
      <div>
        <LanguageProvider>
          <Navbar adminMode={adminMode} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" render={props => <Login {...props} />} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/calendar"
              render={() => <Calendar calendar={calendar} auth={adminMode} />}
            />
            <Route
              exact
              path="/catalog"
              render={() => <Catalog auth={adminMode} />}
            />
            <Route
              exact
              path="/gallery"
              render={() => <Gallery gallery={gallery} auth={adminMode} />}
            />
            <Route
              exact
              path="/news"
              render={() => (
                <News
                  news={this.state.news}
                  auth={adminMode}
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
                  projects={this.state.projects}
                  auth={adminMode}
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
  
// logAdmin is the action function
// adminObj is the action object payload
const mapDispatchToProps = dispatch => ({
  admin: adminObj => dispatch(logAdmin(adminObj))
});
export default connect(null, mapDispatchToProps)(App);