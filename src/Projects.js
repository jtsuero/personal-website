import React, {Component} from 'react';
import justfood from './justfood.jpeg';
import flashy from './flashy.jpg';
import fresh from './fresh-reads.jpeg';
import cryptocheck from './cryptocheck.jpeg';

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
            <div className="icon-container"></div>
          </div>
        </div>
        <div className="project-container">
          <img src={flashy} alt="" className="mockup"></img>
          <div className="project-overview">
            <div className="project-name">Flashy</div>
            <div className="project-description">
              Keep your studies simple using this flash card app.
            </div>
            <div className="icon-container"></div>
          </div>
        </div>
        <div className="project-container">
          <img src={cryptocheck} alt="" className="mockup"></img>
          <div className="project-overview">
            <div className="project-name">Cryptocheck</div>
            <div className="project-description">
              Check your cryptocurrency investments real time.
            </div>
            <div className="icon-container"></div>
          </div>
        </div>
        <div className="project-container">
          <img src={fresh} alt="" className="mockup"></img>
          <div className="project-overview">
            <div className="project-name">Fresh Reads</div>
            <div className="project-description">
              See all your stories from your favorite sites in one place.
            </div>
            <div className="icon-container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
