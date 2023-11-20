import React from "react";
import "./Layouts.css";
import Logo from "./IMG_20230406_221754.jpg";
import download from "./kishor M Final Resume.pdf";
export default function Layouts() {
  return (
    <div className="layout ">
      <nav class="navbar navbar-expand-lg ">
        <div class="container align-items-center branding ">
          <a class="navbar-brand" href="/">
            Kishor M
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse  " id="navbarNav">
            <ul class="navbar-nav mx-auto nav-underline">
              <li class="nav-item mx-3">
                <a class="nav-link  " href="/">
                  Home
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#aboutme">
                  About
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#skills">
                  Skill
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item mx-3">
                <a class="nav-link " href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="info mt-3">
        <div>
          <p>
            Hello, I'm <span className="name">Kishor</span>
          </p>
          <p className="h4 mt-4">Web Developer</p>
          <p className="h6 mt-4">Knack of building Web Applications</p>
          <div className="btns mt-5 ">
            <a href="#contact" className="one first ">
              Hire Me
            </a>
            <a href={download} download>
              <button className="one second ">Get Resume</button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={Logo}
            class="rounded-circle img-fluid"
            alt="Cinque Terre"
            width="300"
            height="290"
          ></img>
        </div>
      </div>
    </div>
  );
}
