import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const styleDeclarations = {
  containerColor: {
    backgroundColor: "#fff",
  },
};

const SideBar = () => {
  const [container, setContainer] = useState([1, 2, 3]);
  return (
    <React.Fragment>
      {container.length > 0 &&
        container.map((x) => (
          <Col>
            <Row className="mb-5" style={styleDeclarations.containerColor}>
              <Col>
                <div>
                  <h5>Hello</h5>
                  <p>
                    <span>Content</span>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        ))}
    </React.Fragment>
  );
};

export default SideBar;
