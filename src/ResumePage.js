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
  render() {
    return (
      <div className="resume-container">
        <Document file={resume} className="resume-document">
          <Page pageNumber={this.state.pageNumber} className="resume-page" />
          <p>Page {this.state.pageNumber} of 2</p>
        </Document>
      </div>
    );
  }
}

export default ResumePage;
