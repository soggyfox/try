import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img 
        variant="top" 
        src={props.imgPath} 
        alt="card-img"
        onError={(e) => {e.target.style.backgroundColor = "rgba(199, 112, 240, 0.1)"}}
      />
      <Card.Body>
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "#b1bac4", lineHeight: "1.6" }}>
          {props.description}
        </Card.Text>
        <div className="project-buttons">
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank" className="project-btn">
              <BsGithub /> {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="project-btn demo-btn"
            >
              <CgWebsite /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
