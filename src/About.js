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
              <div>
                Although my professional career has been focused on Project
                Management and Training, there has always been an itch to
                program. Unable to shake the calling towards the Software
                Engineering world, I spent nights and weekend building my
                skillset.
              </div>
              <div>
                Turning an unshakeable passion into my career has been one of my
                proudest achievements thus far. Now as I continue to build upon
                this momentum, I am continually leveling up by immersing myself
                in growth minded surroundings. I look forward to building
                impactful and cool products.
              </div>
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
