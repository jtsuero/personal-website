import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
import About from './About.js';
import ResumePage from './ResumePage.js';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
