import React from "react";
import "./App.styles.css";
import Navbar from "./navbar/navbar.component";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home/home.component";
import About from "./about/about.component";
import Calendar from "./calendar/Calendar.component";
import Catalog from "./catalog/Catalog.component";
import Contact from "./contact/Contact.component";
import Gallery from "./gallery/Gallery.component";
import Login from "./login/Login.component";
import News from "./news/News.component";
import Projects from "./projects/Projects.component";
import projects from "./projects/ProjectList";
import news from "./news/NewsList";
import calendar from "./calendar/CalendarList";
import gallery from "./gallery/GalleryList";
import SingleProject from "./projects/SingleProject";
import { LanguageProvider } from "./context/LanguageContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      projects: projects,
      news: news,
      calendar: calendar,
      gallery: gallery
    };
    this.findProject = this.findProject.bind(this);
    this.authenticated = this.authenticated.bind(this);
    this.createNews = this.createNews.bind(this);
    this.removeNews = this.removeNews.bind(this);
    this.createProject = this.createProject.bind(this);
    this.removeProject = this.removeProject.bind(this);
  }
  findProject(id) {
    return this.state.projects.find(prj => prj.id === id);
  }
  authenticated(){
    this.setState({ auth: true});
  }
  createNews(name, title, text){
    this.setState({
      news: [ { name, title, text, id: 'news03'}, ...this.state.news,]
    })  
  }
  removeNews(id){
    const filtered = this.state.news.filter(news => news.id !== id);
    this.setState({
      news: filtered
    })
  }
  createProject(name, subTitle, text){
    this.setState({
      projects: [ { name, subTitle, text, id: 'project3'}, ...this.state.projects, ]
    })  
  }
  removeProject(id){
    const filtered = this.state.projects.filter(prj => prj.id !== id);
    this.setState({
      projects: filtered
    })
  }
  render() {
    const { auth } = this.state;
   
    return (
      <div>
        <LanguageProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" render={(props) => <Login {...props} auth={this.state.auth} authenticated={this.authenticated}/>} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/calendar" render={() => <Calendar calendar={calendar} auth={auth}/>}/>
            <Route exact path="/catalog" render={() => <Catalog auth={auth}/>} />
            <Route exact  path="/gallery"  render={() => <Gallery gallery={gallery} auth={auth}/>} />
            <Route exact path="/news" render={() => 
              <News news={this.state.news} auth={auth} createNews={this.createNews} removeNews={this.removeNews}/>} 
              />
            <Route exact path="/projects" render={() => 
            <Projects 
              projects={this.state.projects} auth={auth} createProject={this.createProject} removeProject={this.removeProject}
            />}/>
            <Route exact path="/projects/:id" render={props => ( <SingleProject
                  projects={this.findProject(props.match.params.id)} /> )} />
            <Redirect to="/" />
          </Switch>
        </LanguageProvider>
      </div>
    );
  }
}
export default App;
