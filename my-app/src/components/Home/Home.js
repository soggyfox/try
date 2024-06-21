import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" style={{ minHeight: '100vh' }}>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <span className="wave" role="img" aria-labelledby="wave">
                  🌶️
                </span>
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Kevin Singpurwala</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* add somehting here about template created by Soumyajit https://github.com/soumyajit4419 */}

      <Container fluid className="footer">
        <Row>
          <Col className="text-center py-3">
            <small>
              Appreciations for the template created by{" "} 
              <a href="https://github.com/soumyajit4419" target="_blank" rel="noopener noreferrer" style={{color: 'rgba(0, 0, 255, 0.5)'}}>
                Soumyajit
              </a>
            </small>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
