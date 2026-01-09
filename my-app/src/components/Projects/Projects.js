import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import maze from "../../Assets/Projects/maze.png";
import proxy from "../../Assets/Projects/proxy.png";
import sentiment from "../../Assets/Projects/sentiment.png";
import fakenews from "../../Assets/Projects/fakenewsdetect.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "50px" }}>
          Check out some of my recent work and side projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "20px", gapRow: "30px" }}>
          <Col lg={6} md={12} className="project-card">
            <ProjectCard
              imgPath={maze}
              isBlog={false}
              title="Labrinth Maze Game"
              description="Using Electrical Engineering and a Labrinth Maze Game Project. Operates maze using the accelerometer and computes change of angle in phone, mimicking that on the maze."
              ghLink="https://github.com/soggyfox/ElectricalEngineeringLabrinthMazeProject"
            />
          </Col>

          <Col lg={6} md={12} className="project-card">
            <ProjectCard
              imgPath={proxy}
              isBlog={false}
              title="Create Reverse Proxy for Quantora"
              description="Isolates private business workflows from the outside world. Built a robust reverse proxy system for enterprise security."
            />
          </Col>

          <Col lg={6} md={12} className="project-card">
            <ProjectCard
              imgPath={fakenews}
              isBlog={false}
              title="Fake News Detection"
              description="Masters Design Project with UCD and Microsoft. Availed of Azure and other cloud computing to curate large data sets and gauge whether a news article was truthful or contained misinformation."
              ghLink="https://github.com/SuperSaiyansUcd/Fake-News-Detection-"
            />
          </Col>

          <Col lg={6} md={12} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="AI driven Sentiment Analysis Trading Signals"
              description="Bachelor Thesis at the Univesrity of Twente - can sentiment can be used to trade bitcoin and beat other strategies such as buy and hold. Availed of Binance and Twitter to demonstrate."
              ghLink="https://github.com/soggyfox/SentimentBasedTradingSignals?tab=readme-ov-file"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
