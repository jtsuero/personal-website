import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';

class ContactButtons extends Component {
  //gmail, linked in, github
  //need icons
  render() {
    return (
      <div className="contact-buttons">
        <div>
          <a href={'mailto:jtsuero@gmail.com'}>
            <FontAwesomeIcon icon={faEnvelope} className="email-logo" />
          </a>
          <a href={'mailto:jtsuero@gmail.com'}>jtsuero@gmail.com</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jtsuero">
            <FontAwesomeIcon icon={faLinkedin} className="linkedin-logo" />
          </a>
          <a href="https://www.linkedin.com/in/jtsuero">
            https://www.linkedin.com/in/jtsuero
          </a>
        </div>
        <div>
          <a href="https://github.com/jtsuero">
            <FontAwesomeIcon icon={faGithub} className="github-logo" />
          </a>
          <a href="https://github.com/jtsuero">https://github.com/jtsuero</a>
        </div>
      </div>
    );
  }
}

export default ContactButtons;
