import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

class ContactButtons extends Component {
  render() {
    return (
      <div className="contact-buttons">
        <div>
          <a href={'mailto:jtsuero@gmail.com'}>
            <FontAwesomeIcon icon={faEnvelope} className="contact-logo" />
          </a>
          <a href={'mailto:jtsuero@gmail.com'}>jtsuero@gmail.com</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jtsuero">
            <FontAwesomeIcon icon={faLinkedin} className="contact-logo" />
          </a>
          <a href="https://www.linkedin.com/in/jtsuero">
            linkedin.com/in/jtsuero
          </a>
        </div>
        <div>
          <a href="https://github.com/jtsuero">
            <FontAwesomeIcon icon={faGithub} className="contact-logo" />
          </a>
          <a href="https://github.com/jtsuero">github.com/jtsuero</a>
        </div>
      </div>
    );
  }
}

export default ContactButtons;
