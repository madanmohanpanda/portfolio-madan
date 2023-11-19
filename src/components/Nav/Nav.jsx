import React from "react";
import "./Nav.css";

const Nav = () => {
  
  

  return (
    <nav className="nav" >
      <div className="logo">
        <h1>M</h1>
      </div>
      <u className="features" >
        <a className="block" href="#">
          <li>Home</li>
        </a>
        <a className="block" href="#projects">
          
          <li>Projets</li>
        </a>
        <a className="block" href="#contact">
          <li>Contact me</li>
        </a>
      </u>
      <a  className="btn btn-primary none" href="#contact">
        Hire me!
      </a>
    </nav>
  );
};

export default Nav;
