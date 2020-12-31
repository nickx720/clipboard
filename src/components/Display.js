import React from "react";
import { Col, Row } from "react-bootstrap";

const styleDeclarations = {
  containerBg: {
    backgroundColor: "#fff",
    padding: "2rem",
  },
  boundedBox: {
    backgroundColor: "var(--globalGrey)",
    width: "3rem",
    color: "#fff",
    padding: "0.5rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  sortingContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  onHoverDiv: {
    cursor: "pointer",
  },
};

const Display = ({ data, updateSort }) => {
  return (
    <Col style={styleDeclarations.containerBg}>
      <Row className="mb-5">
        <Col lg={2}>{data.length > 0 && data.length} postings</Col>
        <Col lg={2}></Col>
        <Col lg={8} style={styleDeclarations.sortingContent}>
          <div>Sort By</div>
          <div
            style={styleDeclarations.onHoverDiv}
            onClick={() => updateSort("location")}
          >
            Location
          </div>
          <div
            style={styleDeclarations.onHoverDiv}
            onClick={() => updateSort("job_type")}
          >
            Role
          </div>
          <div
            style={styleDeclarations.onHoverDiv}
            onClick={() => updateSort("department")}
          >
            Department
          </div>
          <div
            style={styleDeclarations.onHoverDiv}
            onClick={() => updateSort("required_credentials")}
          >
            Education
          </div>
          <div onClick={() => updateSort("experience")}>Experience</div>
        </Col>
      </Row>
      {data.length > 0 &&
        data.map((val) => (
          <Row key={val.name}>
            <Col lg={1}>
              <p className="rounded" style={styleDeclarations.boundedBox}>
                AB
              </p>
            </Col>
            <Col lg={11}>
              {val.total_jobs_in_hospital} jobs for {val.job_title}
            </Col>
          </Row>
        ))}
    </Col>
  );
};

export default Display;
