import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMicrosoftazure,
  SiInsomnia,
  SiSlack,
  SiVim,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { VscVscode } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <VscAzure />  {/* Azure icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode />  {/* VS Code icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInsomnia />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVim />
      </Col>
    </Row>
  );
}

export default Toolstack;
