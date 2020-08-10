import React, {Component} from 'react';
import {BrowserRouter as Router, Link, withRouter} from 'react-router-dom';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      navActive: false,
    };
  }

  toggleNav = () => {
    this.setState({navActive: !this.state.navActive});
  };

  burger = () => {
    let line1 = 'line1';
    let line2 = 'line2';
    let line3 = 'line3';
    if (this.state.navActive) {
      line1 += ' active';
      line2 += ' active';
      line3 += ' active';
    }
    return (
      <div className="burger" onClick={this.toggleNav}>
        <div className={line1}></div>
        <div className={line2}></div>
        <div className={line3}></div>
      </div>
    );
  };

  navLinks = () => {
    let cls = 'navbar-links';
    if (this.state.navActive) {
      cls += ' active';
    }
    return (
      <ul className={cls}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <div className="navbar">
        <div className="name">Jordan Suero</div>
        {this.navLinks()}
        {this.burger()}
      </div>
    );
  }
}

export default withRouter(Navbar);
