import React from "react";
import { Col, Row } from "react-bootstrap";
const styleDeclarations = {
  footerBg: {
    backgroundColor: "#fff",
    padding: "5rem",
  },
};
const Footer = () => {
  return (
    <footer style={styleDeclarations.footerBg}>
      <Row>
        <Col lg={6}>
          <h1>About us</h1>
          <p>
            We are a team of nurses, doctors, technologists and exectuives
            dedicated to help nurses find jobs that they love.
          </p>
          <p>All copyrights reserved &#169; 2020 - Health Explore</p>
        </Col>
        <Col lg={3}>
          <h1>SiteMap</h1>
          <p>Nurses</p>
          <p>Employers</p>
          <p>Social Networking</p>
          <p>Jobs</p>
        </Col>
        <Col lg={3}>
          <h1>Privacy</h1>
          <p>Terms of use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
