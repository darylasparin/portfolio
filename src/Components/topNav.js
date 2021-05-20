import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import Typical from "react-typical";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import Profileimage from "../images/prof2.png";

function TopNav() {
  return (
    <div className="topnavs  d-md-block d-lg-none">
      <Container>
        <Row>
          <Col lg={12}>
            <ul className="nav d-flex justify-content-between  m-0 text-capitalize  list-unstyled ">
              {/* <li className=" active">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="">
                <a className="nav-link" href="#about">
                  about
                </a>
              </li>
              <li className="">
                <a className="nav-link" href="#services">
                  services
                </a>
              </li>
              <li className="">
                <a className="nav-link" href="#experience">
                  experience
                </a>
              </li>
              <li className="">
                <a className="nav-link" href="#portfolio">
                  portfolio
                </a>
              </li>
              <li className="">
                <a className="nav-link" href="#contact">
                  contact
                </a>
              </li> */}

              <a href="#home" className="py-2">
                <li>Home</li>
              </a>
              <a href="#about" className="py-2">
                <li>About</li>
              </a>
              <a href="#services" className="py-2">
                <li>Services</li>
              </a>
              <a href="#experience" className="py-2">
                <li>Resume</li>
              </a>
              <a href="#portfolio" className="py-2">
                <li>Works</li>
              </a>
              <a href="#contact" className="py-2">
                <li>Contact</li>
              </a>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopNav;
