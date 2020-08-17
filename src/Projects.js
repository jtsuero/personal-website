import React, {Component} from 'react';
import justfood from './justfood.jpeg';
import flashy from './flashy.jpg';
import fresh from './fresh-reads.jpeg';
import cryptocheck from './cryptocheck.jpeg';
import reactIcon from './react.png';
import cssIcon from './css3.png';
import jsIcon from './javascript.png';
import mongoIcon from './mongodb.png';
import awsIcon from './aws.png';
import htmlIcon from './html5.png';

class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        <div className="projects-header">Projects</div>
        <div className="project-container">
          <img src={justfood} alt="" className="mockup"></img>
          <div className="project-overview">
            <div className="project-name">Just Food</div>
            <div className="project-description">
              A completely visual experience that solves the daily dilemma of
              finding your next meal
            </div>
            <div className="icon-container">
              <img src={jsIcon} alt=""></img>
              <img src={reactIcon} alt=""></img>
              <img src={cssIcon} alt=""></img>
              <img src={htmlIcon} alt=""></img>
              <img src={mongoIcon} alt=""></img>
              <img src={awsIcon} alt=""></img>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img src={flashy} alt="" className="mockup"></img>
          <div className="project-overview">
            <div className="project-name">Flashy</div>
            <div className="project-description">
              Keep your studies simple using this flash card app.
            </div>
            <div className="icon-container">
              <img src={jsIcon} alt=""></img>
              <img src={reactIcon} alt=""></img>
              <img src={cssIcon} alt=""></img>
              <img src={htmlIcon} alt=""></img>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img src={cryptocheck} alt="" className="mockup"></img>
          <div className="project-overview">
            <div className="project-name">Cryptocheck</div>
            <div className="project-description">
              Check your cryptocurrency investments real time.
            </div>
            <div className="icon-container">
              <img src={jsIcon} alt=""></img>
              <img src={reactIcon} alt=""></img>
              <img src={cssIcon} alt=""></img>
              <img src={htmlIcon} alt=""></img>
            </div>
          </div>
        </div>
        <div className="project-container">
          <img src={fresh} alt="" className="mockup"></img>
          <div className="project-overview">
            <div className="project-name">Fresh Reads</div>
            <div className="project-description">
              See all your stories from your favorite sites in one place.
            </div>
            <div className="icon-container">
              <img src={jsIcon} alt=""></img>
              <img src={reactIcon} alt=""></img>
              <img src={cssIcon} alt=""></img>
              <img src={htmlIcon} alt=""></img>
            </div>
          </div>
        </div>
        <div className="footer">
          <span>All icons above provided by </span>
          <a href="https://icons8.com">icons8.com</a>
        </div>
      </div>
    );
  }
}

export default Projects;
