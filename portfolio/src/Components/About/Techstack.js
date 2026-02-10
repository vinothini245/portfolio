import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  DiJqueryLogo,
  DiJavascript1,
  DiBootstrap,
  DiPhp,
  DiCodeigniter,
  DiNpm,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiDocker,
  DiJava,
} from "react-icons/di";

import {
  SiIntellijidea,
  SiFirebase,
  SiPostman,
  SiExpress,
  SiRedis,
  SiVite,
  SiTypescript,
  SiTailwindcss,
  SiElasticsearch,
  SiPostgresql,
  SiSpring,
  SiSocketdotio,
  SiBootstrap
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaAws,
  FaGithub,
  FaBootstrap
} from "react-icons/fa";

import { TbApi } from "react-icons/tb";


const techIconMap = {
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3 />,
  JavaScript: <DiJavascript1 />,
  "React JS": <FaReact />,
  Bootstrap: <DiBootstrap />,
  Java: <DiJava />,
  "Spring Boot": <SiSpring />,
  MySQL: <DiMysql />,
  Firebase: <SiFirebase />,
  Postman: <SiPostman />,     
  "REST API": <TbApi />, 
  JQuery: <DiJqueryLogo />,
  JavaScript: <DiJavascript1 />,
  TypeScript: <SiTypescript />,
  Npm: <DiNpm />,
  "Node JS": <DiNodejs />,
  "Express JS": <SiExpress />,
  MongoDB: <DiMongodb />,
  MySQL: <DiMysql />,
  PostgreSQL: <SiPostgresql />,
  PHP: <DiPhp />,
  Codeigniter: <DiCodeigniter />,
  Docker: <DiDocker />,
  Redis: <SiRedis />,
  AWS: <FaAws />,
  Github: <FaGithub />,
  Elasticsearch: <SiElasticsearch />,
  Tailwind: <SiTailwindcss />,
  Vite: <SiVite />,
  React: <FaReact />,
  IntelliJ: <SiIntellijidea />,
  "Socket.IO": <SiSocketdotio />,
};

function Techstack({ items, className, innerClassName }) {
  return (
    <Row className="gx-3 gy-3" style={{ marginTop: "10px" }}>
      {items.map((tech, idx) => (
        <Col xs={6} key={idx} className={className}>
          <div className={innerClassName}>
            {techIconMap[tech]}
            <h5 className="tech-label">{tech}</h5>
          </div>
        </Col>
      ))}
    </Row>
  );
}






export default Techstack;



