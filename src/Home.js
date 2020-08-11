import React, {Component} from 'react';
import headshot from './headshot.jpeg';
import ContactButtons from './ContactButtons.js';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="headshot">
          <img src={headshot} alt="" />
        </div>
        <div className="home-name">Hey, I'm Jordan</div>
        <div className="home-header">Self taught Full Stack Engineer</div>
        <div className="home-intro">
          I have always had a love for programming. Although my professional
          career has been focused on Project Management and Training, there has
          always been a part of me itching to program. I am hungry to work on
          interesting projects and work with teams that iterate quickly.
        </div>
        <ContactButtons />
      </div>
    );
  }
}

export default Home;
