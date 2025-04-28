import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import maze from "../../Assets/Projects/maze.png";
import proxy from "../../Assets/Projects/proxy.png";
import sentiment from "../../Assets/Projects/sentiment.png";
import fakenews from "../../Assets/Projects/fakenewsdetect.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maze}
              isBlog={false}
              title="Labrinth Maze Game"
              description="Using Electrical Engineering and a Labrinth Maze Game Project. Operates maze using the accelerometer and computes change of angle in phone, mimicking that on the maze. "
              ghLink="https://github.com/soggyfox/ElectricalEngineeringLabrinthMazeProject"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proxy}
              isBlog={false}
              title="Create Reverse Proxy for Quantora"
              description="Isolates private business workflows from the outside world"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fakenews}
              isBlog={false}
              title="Fake News Detection "
              description="Masters Design Project with UCD and Microsoft. Availed of Azure and other cloud computing to curate large data sets and guage whether a news article was truthful or contained misinformation"
              ghLink="https://github.com/SuperSaiyansUcd/Fake-News-Detection-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="AI driven Sentiment Analysis Trading Signals"
              description="Bachelor Thesis at the Univesrity of Twente - can sentiment can be used to trade bitcoin and beat other stragtegies such as buy and hold. Availed of Binance and Twitter to demonstrate."
              ghLink="https://github.com/soggyfox/SentimentBasedTradingSignals?tab=readme-ov-file"
            />
          </Col>


        {/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
