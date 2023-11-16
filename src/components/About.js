import React from "react";
import "./About.css";
import download from "./kishor M Final Resume.pdf";
export default function About() {
  return (
    <div className="container hovering" id="aboutme">
      <div className=" mt-5">
        <p className="about">About Me</p>
        <p className=" h6">Why choose me ?</p>
      </div>
      <div className="information mt-5">
        <div className="higlight">
          <p className="content mt-3">
            Frontend web developer with knowledge of React JS, along with a
            knack of building applications with utmost efficiency.
          </p>
          <p className="lists">Here are a Few Highlights:</p>
          <div className="main">
            <ul className="items ">
              <li>Frontend Web Developer</li>
              <li>Interactive Front End design</li>
              <li>React JS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="buttons mt-3 ">
            <a href="#contact" className="second round1">Hire Me</a>
            <a href={download} download>
              <button className="second round2">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
