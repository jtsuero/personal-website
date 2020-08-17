import React, {Component} from 'react';
import headshot from './headshot.jpeg';
import reactIcon from './react.png';
import cssIcon from './css3.png';
import jsIcon from './javascript.png';
import mongoIcon from './mongodb.png';
import awsIcon from './aws.png';
import htmlIcon from './html5.png';
import node from './nodejs.png';

class About extends Component {
  render() {
    return (
      <div>
        <div className="headshot">
          <img src={headshot} alt=""></img>
          <div className="about-me-intro-container">
            <div className="about-me-name">Jordan Suero</div>
            <div className="about-me-title">Full Stack Engineer</div>
          </div>
        </div>
        <div className="about-skills-container">
          <div className="about-container">
            <div className="about-me-header">About Me</div>
            <div className="skills-content">
              Although my professional career has been focused on Project
              Management and Training, there has always been an itch to program.
              While working at Genentech and Facebook, I built my skillset
              through multiple personal projects and a supportive team of
              engineers. I am hungry to build interesting projects and work with
              teams that iterate quickly.
            </div>
          </div>
          <div className="about-container">
            <div className="about-me-header">Skills</div>
            <div className="skills-content">
              <img src={jsIcon} alt=""></img>
              <img src={reactIcon} alt=""></img>
              <img src={node} alt=""></img>
              <img src={cssIcon} alt=""></img>
              <img src={htmlIcon} alt=""></img>
              <img src={mongoIcon} alt=""></img>
              <img src={awsIcon} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
