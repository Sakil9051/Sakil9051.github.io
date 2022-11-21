import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Resume from "../../Assets/resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://drive.google.com/u/0/uc?id=1aE5dxrTvwtJurbfxP166E2zvIZaGZkmv&export=download";

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const[numPage,setNumPages]= useState(null);
  const[pageNumber,setPageNumber] = useState(1);
  let pdf="https://drive.google.com/u/0/uc?id=1aE5dxrTvwtJurbfxP166E2zvIZaGZkmv&export=download";
  
  const onDocumentLoadSuccess =({numPage})=>{
    setNumPages(numPage);
    setPageNumber(1);
  }
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={Resume} 
          onLoadSuccess={onDocumentLoadSuccess}
          
          >
            <Page pageNumber={1}  scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
