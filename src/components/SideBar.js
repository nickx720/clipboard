import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const styleDeclarations = {
  containerColor: {
    backgroundColor: "#fff",
    padding: "2rem",
  },
  headerValue: {
    textTransform: "capitalize",
  },
};

const SideBar = () => {
  const [container, setContainer] = useState({});

  useEffect(() => {
    fetch("/api/filters")
      .then((json) => json.json())
      .then((value) => setContainer(value));
  }, []);
  return (
    <React.Fragment>
      {Object.keys(container).length > 0 &&
        Object.keys(container).map((x) => (
          <Col key={x}>
            <Row className="mb-5" style={styleDeclarations.containerColor}>
              <Col>
                <div>
                  <h5 style={styleDeclarations.headerValue}>
                    {x.split("_").join(" ")}
                  </h5>
                  {container[x].map(({ key, doc_count }) => (
                    <p key={key}>
                      <span>{key}</span>
                      <span>{doc_count}</span>
                    </p>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        ))}
    </React.Fragment>
  );
};

export default SideBar;
