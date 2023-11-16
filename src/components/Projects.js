import React from 'react'
import './Projects.css'
export default function Projects() {
  return (
    <div>
      <div className="mt-5" id="projects">
        <p className="projects">Projects</p>
        <p>Expolre The Wonders !</p>
      </div>
      <div className="container mt-5 ">
        <table class="table table-borderless table-responsive">
          <tbody>
            <tr>
              <td>
                <span className="calculator">Simple Calculator</span>
              </td>
            </tr>
            <tr>
              <td className="title">Technology Used : HTML, CSS, Javascript</td>
            </tr>
            <tr>
              <td>
                Calculator designed to do correct calculations, and to do so
                efficiently
              </td>
            </tr>
            <td>
              <a
                href="https://steady-selkie-4c43d7.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <td>
                  <button className="link mt-3">Demo Link</button>
                  <hr className="line"></hr>
                </td>
              </a>
            </td>
            <tr>
              <td>
                <span className=" calculator">Quote Generator</span>
              </td>
            </tr>
            <tr>
              <td className="title">Technology Used : HTML, CSS, Javascript</td>
            </tr>
            <tr>
              <td>Quote Generator is used to display randon Quotes</td>
            </tr>
            <td>
              <a
                href="https://kishor272.github.io/Quote-Generator/"
                target="_blank" rel="noreferrer"
              >
                <td>
                  <button className="link mt-3">Demo Link</button>
                </td>
              </a>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}
