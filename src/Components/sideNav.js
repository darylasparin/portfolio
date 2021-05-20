import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typical from "react-typical";
// import Typical from "../../node_modules/react-typical/dist/index";
import Profileimage from "../images/prof2.png";

function SideNav() {
  return (
    <div className="my-nav d-inline-block position-fixed d-none d-lg-block text-white">
      <Container className="my-bg-gradient m-0 p-4">
        <Container>
          <div className="circular--landscape mb-3">
            <img
              src={Profileimage}
              className="profile-image"
              alt="image.not.found"
            />
          </div>

          <h3 className="fw-bold d-flex align-items-center">
            John Daryl
            <div className="blob green mx-2"></div>
          </h3>
          <span className="role">
            <span className="text-capitalize d-flex wrapper">
              I'm a&nbsp;
              <ul className="list-unstyled dynamic-txts">
                <li>
                  <span>
                    <Typical
                      loop={Infinity}
                      steps={[
                        "web developer",
                        5000,
                        "web designer",
                        5000,
                        "frontend web developer",
                        5000,
                      ]}
                      wrapper="p"
                    />
                  </span>
                </li>
              </ul>
            </span>
          </span>
          <ul className="list-unstyled list-container mt-5">
            <li>
              <a href="#home" className="text-white text-decoration-none">
                <i className="fad fa-home "></i>Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white text-decoration-none">
                <i className="fad fa-user "></i>About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white text-decoration-none">
                <i className="fal fa-lightbulb "></i>Services
              </a>
            </li>
            <li>
              <a href="#experience" className="text-white text-decoration-none">
                <i className="fad fa-graduation-cap "></i>Resume
              </a>
            </li>
            <li>
              <a href="#portfolio" className="text-white text-decoration-none">
                <i className="fal fa-th-large "></i>Works
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white text-decoration-none">
                <i className="fal fa-phone "></i>Contact
              </a>
            </li>
          </ul>
          <div className="footer mt-3">
            <span className="font-monospace">© 2021 John Daryl Theme.</span>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default SideNav;
