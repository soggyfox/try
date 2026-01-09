import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/Kevin_anois_gnath-2.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./ResumeNew.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="resume-page-wrapper">
      <Container className="resume-section">
        <Row className="resume-header">
          <Col xs={12} className="text-center">
            <h1 className="resume-heading">My Resume</h1>
            <p className="resume-subtitle">Download or view my CV</p>
          </Col>
        </Row>

        <Row className="button-container">
          <Col xs={12} md={6} className="button-col">
            <Button
              variant="primary"
              href={pdf}
              download="Kevin_Resume.pdf"
              className="action-btn download-btn"
            >
              <AiOutlineDownload size={20} />
              Download CV
            </Button>
          </Col>
          <Col xs={12} md={6} className="button-col">
            <Button
              variant="outline-primary"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn view-btn"
            >
              <FiExternalLink size={20} />
              View Online
            </Button>
          </Col>
        </Row>

        <Row className="resume-preview-row">
          <Col xs={12}>
            <div className="resume-preview-box">
              <h3>Resume Preview</h3>
              <div className="pdf-preview">
                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={1} scale={0.8} />
                </Document>
              </div>
              <p className="preview-info">Page 1 of {numPages || '...'}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
