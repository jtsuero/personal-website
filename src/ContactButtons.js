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
          <FontAwesomeIcon icon={faEnvelope} className="email-logo" />
          <span>jtsuero@gmail.com</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faLinkedin} className="linkedin-logo" />
          <span>https://www.linkedin.com/in/jtsuero</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faGithub} className="github-logo" />
          <span>https://github.com/jtsuero</span>
        </div>
      </div>
    );
  }
}

export default ContactButtons;
