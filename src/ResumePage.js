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

  move = e => {
    if (e.target.name === 'right' && this.state.pageNumber === 1) {
      this.setState({pageNumber: 2});
    } else if (e.target.name === 'left' && this.state.pageNumber === 2) {
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
            <input
              type="button"
              className="left-button"
              name="left"
              onClick={this.move}
              value="<"
            />
            <input
              type="button"
              className="right-button"
              name="right"
              onClick={this.move}
              value=">"
            />
          </div>
        </Document>
      </div>
    );
  }
}

export default ResumePage;
