import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netfi from "../../Assets/Projects/netfi.png";
import pastry from "../../Assets/Projects/pastry.png";

import road from "../../Assets/Projects/road.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong> & Internship
        </h1>
        <p style={{ color: "white" }}>
          Here are some highlights from my hands-on experience.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
         {/* PROJECT 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netfi}
              isBlog={false}
              title=" NetFi – Online Mobile Recharge Platform"
              description="Developed a secure, scalable recharge system using Java, Spring Boot, ReactJS, and MySQL. Designed backend for user data & telecom transactions via RESTful APIs. Achieved 90%+ API accuracy and built a responsive UI."
              ghLink="https://github.com/vinothini245/Virtusa_Internship_project-OnlineRechargeSystem"
              techStack={["Java", "Spring Boot", "React JS", "MySQL"]}
            />
          </Col>

        {/* PROJECT 2 */}
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={road}
              isBlog={false}
              title="On Road Breakdown Assistance Finder"
              description="Developed a web application to assist users in finding nearby roadside breakdown assistance. User can provide their information and location, and admin will map the mechanics"
              // ghLink="https://github.com/MUGIL008/Foodie"
              techStack={["Java", "JavaScript", "MySQL", "HTML5", "CSS3", "Bootstrap"]}
            />
          </Col>


          {/* PROJECT 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pastry}
              isBlog={false}
              title="Learn-From-Home – Pastry Ordering Portal"
              description="Created a responsive pastry ordering portal using HTML, CSS, JavaScript, and Bootstrap. Implemented user-friendly navigation and optimized UI for seamless browsing and ordering experience."
              ghLink="https://github.com/vinothini245/learn_from_home_pastry_ordering"
              // demoLink="https://learn-from-home-008.web.app/enlight/index.html" 
              techStack={["HTML5", "CSS3", "JavaScript", "Bootstrap"]}
            />
          </Col>

          







          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

