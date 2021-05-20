import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  return (
    <Container fluid className="skills card-b-s py-5 px-5 mb-5">
      <h3 className="mb-5">My skills</h3>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque adipisci
        nihil officiis necessitatibus laboriosam vitae, voluptatibus modi
        possimus nam at?
      </p>

      <Row>
        <Col lg={6} className="fw-normal ls-n1">
          HTML
        </Col>
        <Col lg={6} className="fw-normal ls-n1">
          CSS
        </Col>
        <Col lg={6} className="fw-normal ls-n1">
          JAVASCRIPT
        </Col>
        <Col lg={6} className="fw-normal ls-n1">
          SASS
        </Col>
        <Col lg={6} className="fw-normal ls-n1">
          REACTJS
        </Col>
        <Col lg={6} className="fw-normal ls-n1">
          BOOTSTRAP
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
