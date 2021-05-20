import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  return (
    <Container
      fluid
      className="dashboard text-white bg-blue card-b-s py-5 px-5 mb-5"
    >
      <Row>
        <Col
          md={6}
          lg={3}
          className="d-grid my-5 justify-content-center align-items-center"
        >
          <Col
            lg={12}
            className="mb-3 d-flex justify-content-center align-items-center"
          >
            <i className="fal fa-thumbs-up fa-2x bg-circle bg-rose p-3"></i>
          </Col>
          <Col
            lg={12}
            className="d-flex justify-content-center align-items-center"
          >
            <h2 className="fw-bold">1</h2>
          </Col>
          <Col
            lg={12}
            className="d-flex justify-content-center align-items-center "
          >
            <span className="m-0 text-center">Projects completed</span>
          </Col>
        </Col>
        <Col
          md={6}
          lg={3}
          className="d-grid my-5 justify-content-center align-items-center"
        >
          <Col
            lg={12}
            className="mb-3 d-flex justify-content-center align-items-center"
          >
            <i className="fal fa-thumbs-up fa-2x bg-circle bg-rose p-3"></i>
          </Col>
          <Col
            lg={12}
            className="d-flex justify-content-center align-items-center"
          >
            <h2 className="fw-bold">152</h2>
          </Col>
          <Col
            lg={12}
            className="d-flex justify-content-center align-items-center "
          >
            <span className="m-0 text-center">Projects completed</span>
          </Col>
        </Col>
        <Col
          md={6}
          lg={3}
          className="d-grid my-5 justify-content-center align-items-center"
        >
          <Col
            lg={12}
            className="mb-3 d-flex justify-content-center align-items-center"
          >
            <i className="fal fa-thumbs-up fa-2x bg-circle bg-rose p-3"></i>
          </Col>
          <Col
            lg={12}
            className="d-flex justify-content-center align-items-center"
          >
            <h2 className="fw-bold">152</h2>
          </Col>
          <Col
            lg={12}
            className="d-flex justify-content-center align-items-center "
          >
            <span className="m-0 text-center">Projects completed</span>
          </Col>
        </Col>
        <Col
          md={6}
          lg={3}
          className="d-grid my-5 justify-content-center align-items-center"
        >
          <Col
            lg={12}
            className="mb-3 d-flex justify-content-center align-items-center"
          >
            <i className="fal fa-thumbs-up fa-2x bg-circle bg-rose p-3"></i>
          </Col>
          <Col
            lg={12}
            className="d-flex justify-content-center align-items-center"
          >
            <h2 className="fw-bold">152</h2>
          </Col>
          <Col
            lg={12}
            className="d-flex justify-content-center align-items-center "
          >
            <span className="m-0 text-center">Projects completed</span>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
