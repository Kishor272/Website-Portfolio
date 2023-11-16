import React from 'react'
import './Skills.css'
export default function Skills() {
  return (
    <div>
      <div className="mt-5" id='skills'>
        <p className="skills">Skills</p>
        <p>Belong anywhere !</p>
        <div className="d-flex justify-content-center">
          <div className='mt-3'>
            <div>
              <p className='keys'>HTML5</p>
              <button className="html1"></button>
              <button className="html2"></button>
            </div>
            <div className="mt-3">
              <p className='keys'>CSS3</p>
              <button className="css1"></button>
              <button className="css2"></button>
            </div>
            <div className="mt-3">
              <p className='keys'>Javascript</p>
              <button className="js1"></button>
              <button className="js2"></button>
            </div>
            <div className="mt-3">
              <p className='keys'>React18</p>
              <button className="react1"></button>
              <button className="react2"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
