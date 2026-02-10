import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vinothini M </span>
            from <span className="purple">Dindigul, Tamil Nadu, India.</span>
            <br />
            A Computer Science Engineering graduate (2023) with a CGPA of 9.29, passionate about building clean, efficient, and user-focused software applications.
            <br />
            I have hands-on industry exposure through my developer internship at Virtusa, where I worked on real-time development tasks, debugging, API testing, and understanding how scalable applications are built in professional environments. This experience strengthened my practical understanding of Java-based development, web technologies, and software engineering best practices.<strong className="purple">Java, Spring Boot, ReactJS, and MySQL</strong>.
            <br />
            I have also validated my Java proficiency by earning the Oracle Certified Java Associate (OCJA) certification with 86.3%, and demonstrated my aptitude through the TCS NQT with a score of 79.6%.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Craft Works
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Small lines of code, big real-world effect"{" "}
          </p>
          <footer className="blockquote-footer">Vinothini</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
