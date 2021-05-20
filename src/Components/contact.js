import React from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Form,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Contact() {
  return (
    <Container fluid className="contact card-b-s py-5 px-5 mb-5 ">
      <h3 className="mb-5">Get in touch</h3>
      <Row>
        <Col lg={4}>
          <Row>
            <Col lg={12} className="d-flex  mb-5">
              <Col lg={3} className="me-4">
                <i className="fal fa-phone fa-2x text-rose "></i>
              </Col>
              <Col lg={9}>
                <Col lg={12}>
                  <h6>Phone</h6>
                </Col>
                <Col lg={12}>
                  <span className="font-monospace text-secondary lh-lg">
                    +63 966 988 1097
                  </span>
                </Col>
              </Col>
            </Col>
            <Col lg={12} className="d-flex  mb-5">
              <Col lg={3} className="me-4">
                <i className="fal fa-envelope  fa-2x text-rose"></i>
              </Col>
              <Col lg={9}>
                <Col lg={12}>
                  <h6>Email address</h6>
                </Col>
                <Col lg={12}>
                  <span className="font-monospace text-secondary lh-lg text-break">
                    jamessasparin1@gmail.com
                  </span>
                </Col>
              </Col>
            </Col>
            <Col lg={12} className="d-flex  mb-5">
              <Col lg={3} className="me-4">
                <i className="fal fa-map-marker-alt fa-2x text-rose "></i>
              </Col>
              <Col lg={9}>
                <Col lg={12}>
                  <h6>Location</h6>
                </Col>
                <Col lg={12}>
                  <span className="font-monospace text-secondary lh-lg">
                    Imus City, Cavite
                  </span>
                </Col>
              </Col>
            </Col>
            <Col lg={12} className="d-flex  mb-5">
              <Col lg={1} className="me-4">
                <a href="https://www.facebook.com/daryl.asparin/">
                  <i className="fab fa-facebook-square fa-2x text-secondary"></i>
                </a>
              </Col>
              <Col lg={1} className="me-4">
                <a href="https://www.linkedin.com/in/john-daryl-asparin-8aaa50211">
                  <i className="fab fa-linkedin fa-2x text-secondary"></i>
                </a>
              </Col>
              <Col lg={1} className="me-4">
                <a href="mailto:jamessasparin1@gmail.com">
                  <i className="fas fa-envelope fa-2x text-secondary"></i>
                </a>
              </Col>
            </Col>
          </Row>
        </Col>

        <Col lg={8} className="">
          <Form>
            <Row>
              <Col lg={12} className="mb-4 ">
                <Form.Row className="d-flex justify-content-between">
                  <Col md={6} lg={6}>
                    <Form.Control
                      placeholder="Your name"
                      className="card-b d-flex py-2 text-secondary font-monospace"
                    />
                  </Col>
                  <Col md={6} lg={6}>
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      className="card-b d-flex py-2 text-secondary font-monospace"
                    />
                  </Col>
                </Form.Row>
              </Col>
              <Col lg={12} className="mb-4 ">
                <Form.Row className="d-flex">
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <Form.Control
                      placeholder="Subject"
                      className="card-b py-2 text-secondary font-monospace"
                    />
                  </Col>
                </Form.Row>
              </Col>
              <Col lg={12} className="mb-4 ">
                <Form.Control
                  as="textarea"
                  placeholder="Message..."
                  className="card-b py-2 text-secondary font-monospace"
                  rows={7}
                />
              </Col>
              <Col lg={12} className="mb-4 ">
                {/* <Button type="submit" className="bg-rose text-white card-b">
                  Submit Message
                </Button> */}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Tooltip className="ms-1">
                      Submit button is not Working atm.
                    </Tooltip>
                  }
                >
                  <h6 className="d-inline-block button-hover btn-1 bg-rose text-white card-b me-3 mt-3 p-3 px-4  fw-normal">
                    Submit Message
                  </h6>
                </OverlayTrigger>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
