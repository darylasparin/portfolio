import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <Container
      fluid
      className=" home  p-lg-5 p-md-5  p-0 m-0 mb-5 mt-xs-5 mt-lg-0 d-flex justify-content-center align-items-center"
    >
      <Container>
        <Row>
          <Col lg={12}>
            <h1 className="fw-bold ">
              I'm Daryl <span className="point text-danger fw-bold">.</span>
            </h1>
          </Col>
          <Col lg={12}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            quos similique sapiente necessitatibus cumque eaque ipsum illum
            explicabo autem! Alias.
          </Col>
          <Col className="button-container">
            <a href="#portfolio" className="text-white text-decoration-none">
              <h6 className=" me-3 d-flex  mt-3 p-3 px-4 justify-content-center align-items-center button-1  fw-normal">
                <i className="fal fa-th-large px-3 "></i>View Portfolio
              </h6>
            </a>
            <a
              href="https://www.linkedin.com/in/john-daryl-asparin-8aaa50211/"
              className="text-white text-decoration-none"
            >
              {/* <a
                className="text-decoration-none text-white"
                href="https://www.linkedin.com/in/john-daryl-asparin-8aaa50211/"
              > */}
              <h6 className=" me-3 d-flex mt-3 p-3 px-4 justify-content-center align-items-center button-2 border fw-normal">
                <i className="fal fa-envelope px-3 "></i>Hire me
              </h6>
              {/* </a> */}
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
