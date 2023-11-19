import React from "react";
import Card from "./Card";
import "./Experience.css";

const Experience = () => {
  const project1 = 1;
  const project2 = 2;
  const project3 = 3;
  const project4 = 4;
  return (
    <div className="part">
            <h2 className="center" id="projects">
              My Projects
            </h2>
            <div className="cards">
              <Card project={project1} />
              <Card project={project2} />
              <Card project={project3} />
              <Card project={project4} />
            </div>
    </div>
  );
};

export default Experience;
