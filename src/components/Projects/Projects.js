import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Zara from "../../Assets/Projects/Zara_clone.png";
import Lostit from "../../Assets/Projects/lost_it.png";
import Ideakart from "../../Assets/Projects/Ideakart.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Zara}
              isBlog={false}
              title="Zara"
              description="ZARA is a Spanish multi-national retail clothing chain. It specialises in fast fashion, and sells clothing, accessories, shoes, beauty products and perfumes."
              ghLink="https://github.com/Sakil9051/scintillating-work-864"
              demoLink="https://zara-clone-phi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lostit}
              isBlog={false}
              title="Lost-it"
              description="Lose It! is a calorie counting app that helps you reach your weight loss goal. Simply download the app, set your goals, and track your foods and exercises to lose weight."
              ghLink="https://github.com/sanjanyadav420/-medical-mint-9230"
              demoLink="https://sanjanyadav420.github.io/-medical-mint-9230/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ideakart}
              isBlog={false}
              title="Ideakart"
              description="Ideakart is a site that gives u an idea about the book you want to buy. We offer a huge collection of books in diverse categories."
              ghLink="https://github.com/Sakil9051/possessive-lunch-3778/tree/main/possessive-lunch-3778"
              demoLink="https://possessive-lunch-3778.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
