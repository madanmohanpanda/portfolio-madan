import React from "react";

import "./Card.css";
import pro1 from "../../assets/moviex.png";
import pro2 from "../../assets/to-do.png";
import pro3 from "../../assets/pic3.jpg";
import pro4 from "../../assets/pic4.jpg";

const Card = ({ project }) => {
  if (project == 1) {
    return (
      <div className="card">
        <h2>Movix</h2>
        <img className="pro" src={pro1} alt="" />
        <div className="btn-group">
          <a
            className="btn btn-pro"
            href="https://github.com/madanmohanpanda/movix"
          >
            Github
          </a>
          <a className="btn btn-pro" href="https://movix-six-blond.vercel.app/">
            Watch
          </a>
        </div>
      </div>
    );
  }

  if (project == 2) {
    return (
      <div className="card">
        <h2>To-Do Manager</h2>
        <img className="pro" src={pro2} alt="" />
        <div className="btn-group">
          <a
            className="btn btn-pro"
            href="https://github.com/madanmohanpanda/to-do-list-tsx-app"
          >
            Github
          </a>
          <a
            className="btn btn-pro"
            href="https://to-do-list-tsx-app.vercel.app/"
          >
            Watch
          </a>
        </div>
      </div>
    );
  }
  if (project == 3) {
    return (
      <div className="card">
        <h2>PDF Merger</h2>
        <img className="pro" src={pro3} alt="" />
        <div className="btn-group">
          <a
            className="btn btn-pro"
            href="https://github.com/madanmohanpanda/pdf-merger"
          >
            Github
          </a>
          <button className="btn btn-pro">Watch</button>
        </div>
      </div>
    );
  }
  if (project == 4) {
    return (
      <div className="card">
        <h2>Amazon Clone</h2>
        <img className="pro" src={pro4} alt="" />
        <div className="btn-group">
          <a
            className="btn btn-pro"
            href="https://github.com/madanmohanpanda/SignInAuthenticationWebApp"
          >
            Github
          </a>
          <button className="btn btn-pro">Watch</button>
        </div>
      </div>
    );
  }
};

export default Card;
