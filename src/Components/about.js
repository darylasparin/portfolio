import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Profileimage from "../images/prof2.png";

function About() {
  return (
    <Container fluid className="about py-5 px-5 mb-5 ">
      <Row>
        <Col lg={12}>
          <h3>About Me</h3>
        </Col>
      </Row>
      <Row>
        <Col lg={3} className="mt-3 d-flex justify-content-center">
          <div className="circular--landscape">
            <img
              src={Profileimage}
              className="profile-image"
              alt="no.image.found"
            />
          </div>
        </Col>
        <Col lg={9} className="mt-3">
          <Col lg={12}>
            <h3>Hello,</h3>
          </Col>
          <Col lg={12}>
            <p className="fs-14 text-secondary ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, aperiam necessitatibus est accusantium nihil, sunt
              dolorum inventore voluptas quos voluptatibus pariatur aspernatur
              vero id atque, reiciendis deleniti quisquam quod placeat
              distinctio? Dolorum, consequatur commodi quae nihil totam velit
              ullam modi non, repudiandae iste officiis in?
            </p>
          </Col>
          <Row className="mb-3 fs-14 fw-lbold">
            <Col lg={6} className=" ">
              <p className="text-secondary">
                Name: <span className="text-dark "> John Daryl Asparin</span>
              </p>
            </Col>
            <Col lg={6} className="">
              <p className="text-secondary">
                Location: <span className="text-dark  ">Imus, Cavite</span>
              </p>
            </Col>
            <Col lg={6}>
              <p className="text-secondary ">
                Birthday:
                <span className="text-dark ">Lorem, ipsum dolor.</span>
              </p>
            </Col>
            <Col lg={6}>
              <p className="text-secondary text-break">
                Email:
                <span className="text-dark ">jamessasparin1@gmail.com</span>
              </p>
            </Col>
          </Row>
          <Row className="">
            <Col
              lg={6}
              md={5}
              sm={5}
              xs={12}
              className="bg-rose button-hover btn-1 d-flex  rounded-pill  justify-content-center align-items-center"
            >
              <i className="fal fa-cloud-download-alt p-3 px-2"></i>
              Download CV
            </Col>
            <Col lg={5} md={3} sm={5} xs={12} className="nomp">
              <a href="#contact" className="text-white  text-decoration-none">
                <h6 className="bg-blue button-hover fw-normal btn-2  d-flex p-3  rounded-pill  mt-2 mt-sm-0 justify-content-center align-items-center">
                  <i className="fal fa-envelope px-2 "></i>
                  Hire Me
                </h6>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
