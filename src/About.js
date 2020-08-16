import React, {Component} from 'react';
import headshot from './headshot.jpeg';
import reactIcon from './react.png';
import cssIcon from './css3.png';
import jsIcon from './javascript.png';
import mongoIcon from './mongodb.png';
import awsIcon from './aws.png';
import htmlIcon from './html5.png';

class About extends Component {
  //image headshot
  //about me
  //skills
  render() {
    return (
      <div>
        <div className="headshot">
          <img src={headshot} alt=""></img>
        </div>
        <div className="about-me-header">About Me / Skills</div>
        <div className="about-skills-container">
          <div className="about-container">
            Although my professional career has been focused on Project
            Management and Training, there has always been an itch to program.
            While working I built my skillset through multiple personal projects
            and a supportive team of engineers. I am hungry to work on
            interesting projects and work with teams that iterate quickly.
          </div>
          <div className="skills-container">
            <img src={jsIcon} alt=""></img>
            <img src={reactIcon} alt=""></img>
            <img src={cssIcon} alt=""></img>
            <img src={htmlIcon} alt=""></img>
            <img src={mongoIcon} alt=""></img>
            <img src={awsIcon} alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
