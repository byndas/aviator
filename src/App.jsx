import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Route, Switch} from 'react-router-dom';
import Video from './Video';
import AboutUs from './AboutUs';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <Navbar/>}/>
        <Route exact path='/about' render={() => <AboutUs/>}/>
      </Switch>
      <div>
          <Video/>
      </div>
    </div>
  );
}

export default App;
