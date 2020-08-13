import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Route, Switch} from 'react-router-dom';
import Video from './Video';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={() => <Navbar/>}/>
      </Switch>
      <Video/>
    </div>
  );
}

export default App;
