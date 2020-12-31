import { includes, lensProp, set } from "ramda";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Display from "./Display";
import Search from "./Search";
import SideBar from "./SideBar";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
};

const Main = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [sort, setSorted] = useState({
    location: false,
    job_type: false,
    department: false,
    required_credentials: false,
    experience: false,
  });
  const debouncedText = useDebounce(input, 500);

  const handleChange = (evt) => {
    console.log(evt.target.value);
    setInput(evt.target.value);
    evt.preventDefault();
  };

  const updateSort = (val) => {
    const xLens = lensProp(val);
    let newSort = set(xLens, !sort[val], sort);
    setSorted(newSort);
  };
  useEffect(() => {
    console.log(Object.values(sort).includes(true));
    let query;
    let filter = "";
    if (Object.values(sort).includes(true)) {
      for (const [key, value] of Object.entries(sort)) {
        if (value) {
          filter += `&${key}.asc`;
        }
      }
    }
    if (debouncedText.length === 0 && !Object.values(sort).includes(true)) {
      query = `/api/jobs`;
    } else if (input.length > 0) {
      query = `/api/jobs?search=${debouncedText}`;
    } else if (Object.values(sort).includes(true)) {
      query = `/api/jobs?${filter}`;
    }
    fetch(query)
      .then((json) => json.json())
      .then((value) => setData(value));
  }, [debouncedText, sort]);
  return (
    <React.Fragment>
      <Container fluid>
        <Search onHandleChange={handleChange} />
        <Row className="mt-5">
          <Col lg={3}>
            <SideBar />
          </Col>
          <Col lg={9}>
            <Display data={data} updateSort={updateSort} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Main;
