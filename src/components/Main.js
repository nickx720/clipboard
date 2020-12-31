import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Display from "./Display";
import Search from "./Search";
import SideBar from "./SideBar";

const Main = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Search />
        <Row className="mt-5">
          <Col lg={3}>
            <SideBar></SideBar>
          </Col>
          <Col lg={9}>
            <Display></Display>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Main;
