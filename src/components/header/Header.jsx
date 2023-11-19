import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";
import cv from "../../assets/cv.pdf";
import myImage from "../../assets/myimage.png";
import Nav from '../Nav/Nav'
const Header = () => {
  return (
    <>
   
    <header className="container">
      <div className="left">
        <div className="header_container">
          <h3 className="alert" >Hello I'm</h3>
          <h1 className="no-wrap">Madan Mohan Panda</h1>
          <h3 className="text-light tx-l">Frontend Developer</h3>
        </div>
        <CTA cv={cv} />
      </div>
      <HeaderSocials />

      <div className="me right">
        <img src={myImage} alt="My Image" />
      </div>
      <a href="#contact" className="abs scroll_down">
        Scroll Down
      </a>
    </header>
    </>
  );
};

export default Header;
