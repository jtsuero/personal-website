import React, {Component} from 'react';
import resume from './JTS_Resume.pdf';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class ResumePage extends Component {
  render() {
    return (
      <div className="resume-container">
        <Document file={resume} className="resume-document">
          <Page pageNumber={1} className="resume-pdf" />
        </Document>
      </div>
    );
  }
}

export default ResumePage;
