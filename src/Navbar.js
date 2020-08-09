import React, {Component, useState} from 'react';

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

  navLinks = () => {
    let cls = 'navbar-links';
    let line1 = 'line1';
    let line2 = 'line2';
    let line3 = 'line3';
    if (this.state.navActive) {
      cls += ' active';
      line1 += ' active';
      line2 += ' active';
      line3 += ' active';
    }
    return (
      <div>
        <ul className={cls}>
          <li>Home</li>
          <li>About</li>
          <li>Resume</li>
          <li>Projects</li>
        </ul>
        <div className="burger" onClick={this.toggleNav}>
          <div className={line1}></div>
          <div className={line2}></div>
          <div className={line3}></div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="navbar">
        <div className="name">Jordan Suero</div>
        {this.navLinks()}
      </div>
    );
  }
}

export default Navbar;
