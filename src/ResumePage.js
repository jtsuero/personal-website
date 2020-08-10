import React, {Component} from 'react';
import resume from './JTS_Resume.pdf';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResumePage extends Component {
  render() {
    return (
      <Document file={resume} className="resume-container">
        <Page pageNumber={1} className="resume-pdf" />
      </Document>
    );
  }
}

export default ResumePage;
