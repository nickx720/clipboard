import React from "react";
import { Col, Row } from "react-bootstrap";

const styleDeclarations = {
  containerBg: {
    backgroundColor: "#fff",
  },
  boundedBox: {
    backgroundColor: "var(--globalGrey)",
    width: "3rem",
    color: "#fff",
    padding: "0.5rem",
    fontWeight: "bold",
    textAlign: "center",
  },
};

const Display = () => {
  return (
    <Col style={styleDeclarations.containerBg}>
      <Row className="mb-5">
        <Col lg={2}>job postings</Col>
        <Col lg={2}></Col>
        <Col lg={8}>
          <div>Sort By</div>
          <div>Location</div>
          <div>Role</div>
          <div>Department</div>
          <div>Education</div>
          <div>Experience</div>
        </Col>
      </Row>
      <Row>
        <Col lg={1}>
          <p className="rounded" style={styleDeclarations.boundedBox}>
            AB
          </p>
        </Col>
        <Col lg={11}>8 jobs for Mamoth Hospital</Col>
      </Row>
    </Col>
  );
};

export default Display;
