import React from "react";
import "./Education.css";
export default function Education() {
  return (
    <div>
      <div className="mt-5">
        <p className="education">Education</p>
        <p>Education Details !</p>
      </div>
      <div className="container mt-5">
        <table class="table table-borderless table-responsive">
          <tbody>
            <tr>
              <td>
                <span className="mac">
                  Kongunadu College of Engineering and Technology
                </span>
              </td>
              <td><button className="year">2019-2023</button></td>
            </tr>
            <tr>
              <td>B.E Electronics and Communication Engineering</td>
            </tr>
            <tr>
              <td>8.25 CGPA</td>
            </tr>
            <tr>
              <td>
                <span className="mac">
                  Indian Matric Higher Secondary School
                </span>
              </td>
             <td> <button className="year">2018-2019</button></td>
            </tr>
            <tr>
              <td>State Board</td>
            </tr>
            <tr>
              <td>68.6 %</td>
            </tr>
            <tr>
              <td>
                <span className="mac">Indian Matric Higher Secondary School</span>
              </td>
             <td> <button className="year">2016-2017</button></td>
            </tr>
            <tr>
              <td>State Board</td>
            </tr>
            <tr>
              <td>91.2 %</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
