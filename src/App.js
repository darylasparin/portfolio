//Components
import SideNav from "./Components/sideNav";
import Home from "./Components/home";
import About from "./Components/about";
import Skills from "./Components/skills";
import Dashboard from "./Components/dashboard";
import Services from "./Components/services";
import Experience from "./Components/experience";
import Portfolio from "./Components/portfolio";
import Contact from "./Components/contact";
import TopNav from "./Components/topNav";

//Bootstrap
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <Container className="transition-global root-container d-flex justify-content-center mt-5">
      <Container fluid className="transition-global">
        <Row>
          <Col lg={2} className="header-container d-none d-lg-block ">
            <section className="text-danger header">
              <SideNav />
            </section>
          </Col>

          <Col lg={10} className="main-container">
            <Container fluid className="topnav " id="topNav">
              <TopNav />
            </Container>
            <section className="home" id="home">
              <Home />
            </section>
            <section className="about" id="about">
              <About />
            </section>
            <section className="skills" id="skills">
              <Skills />
            </section>
            <section className="dashboard" id="dashboard">
              <Dashboard />
            </section>
            <section className="services" id="services">
              <Services />
            </section>
            <section className="experience" id="experience">
              <Experience />
            </section>
            <section className="portfolio" id="portfolio">
              <Portfolio />
            </section>
            <section className="contact" id="contact">
              <Contact />
            </section>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
