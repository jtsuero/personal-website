import React, {Component} from 'react';
import resume from './JTS_Resume_Portfolio.pdf';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCaretRight, faCaretLeft} from '@fortawesome/free-solid-svg-icons';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResumePage extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
    };
  }

  move = direction => {
    if (direction === 'right' && this.state.pageNumber === 1) {
      this.setState({pageNumber: 2});
    } else if (direction === 'left' && this.state.pageNumber === 2) {
      this.setState({pageNumber: 1});
    }
  };

  render() {
    return (
      <div className="resume-container">
        <Document file={resume} className="resume-document">
          <Page pageNumber={this.state.pageNumber} className="resume-page" />
          <p>Page {this.state.pageNumber} of 2</p>
          <div className="button-container">
            <FontAwesomeIcon
              icon={faCaretLeft}
              className="move-button"
              onClick={() => {
                this.move('left');
              }}
            />
            <FontAwesomeIcon
              icon={faCaretRight}
              className="move-button"
              onClick={() => {
                this.move('right');
              }}
            />
          </div>
          <a href={resume} download="JTS_Resume">
            <button className="download-button">Download</button>
          </a>
        </Document>
      </div>
    );
  }
}

export default ResumePage;
