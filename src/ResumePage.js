import React, {Component} from 'react';
import resume from './JTS_Resume_Portfolio.pdf';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResumePage extends Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
    };
  }

  moveLeft = () => {
    if (this.state.pageNumber === 1) return;
    this.setState({pageNumber: 1});
  };

  moveRight = () => {
    if (this.state.pageNumber === 2) return;
    this.setState({pageNumber: 2});
  };

  render() {
    return (
      <div className="resume-container">
        <Document file={resume} className="resume-document">
          <Page pageNumber={this.state.pageNumber} className="resume-page" />
          <p>Page {this.state.pageNumber} of 2</p>
          <div className="button-container">
            <div className="left-button" name="left" onClick={this.moveLeft}>
              {'<'}
            </div>
            <div className="right-button" name="right" onClick={this.moveRight}>
              {'>'}
            </div>
          </div>
        </Document>
      </div>
    );
  }
}

export default ResumePage;
