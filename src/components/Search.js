import React from "react";
import { Row, Form, FormControl, Col } from "react-bootstrap";

const styleDeclaration = {
  magnifier: {
    backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E")`,
    backgroundPosition: "0.5%",
    backgroundRepeat: "no-repeat",
    backfaceVisibility: "hidden",
    transformStyle: "preserve-3d",
    padding: "2rem",
    width: "100%",
    border: "1px solid var(--greyColor)",
  },
};

const Search = () => {
  return (
    <React.Fragment>
      <Row className="mt-5">
        <Col lg={12}>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              style={styleDeclaration.magnifier}
            />
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Search;
