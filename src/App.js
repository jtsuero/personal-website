import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
import About from './About.js';
import Home from './Home.js';
import Projects from './Projects.js';
import ResumePage from './ResumePage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/resume">
            <ResumePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
