import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Portfolio() {
  return (
    <Container fluid className="portfolio card-b-s py-5 px-5 mb-5 ">
      <h3 className="mb-5 ">Portfolio</h3>
      <Row>
        <Col>
          <Col>
            <p className="font-monospace">No Portfolio yet. 😄 😄 😄</p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
