import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sahil Laskar</span>
            from <span className="purple"> West Bengal, India.</span>
            <br />After completing my high school education at Champahati Nilmoni Kar Vidyalaya,
            I aim to become a full-stack web developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anima
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't give up on your dream till death"{" "}
          </p>
          <footer className="blockquote-footer">Sahil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
