import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  // SiWindows11,
  // SiSpringboot,
} from "react-icons/si";


import { DiMysql } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
        <h3 className="textColor">Windows 11</h3>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h3 className="textColor">VS Code</h3>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h3 className="textColor">Postman</h3>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <h3 className="textColor">Spring Boot</h3>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <h3 className="textColor">MySQL</h3>
      </Col>
    </Row>
  );
}

export default Toolstack;
