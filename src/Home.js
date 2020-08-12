import React, {Component} from 'react';
import ContactButtons from './ContactButtons.js';
import {Link, withRouter} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-background"></div>
        <div className="home-background-black"></div>
        <div className="home-intro">
          <div className="home-name">
            Full Stack Engineer based in Seattle, WA
          </div>
          <Link to="/projects" className="home-header">
            I make cool products
          </Link>
        </div>
        <ContactButtons />
      </div>
    );
  }
}

export default withRouter(Home);
