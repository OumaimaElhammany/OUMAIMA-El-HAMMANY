import React from 'react'
import HTML from '../layout/img/html.png'
import CSS from '../layout/img/css.png'
import JS from '../layout/img/js.png'
import JAVA from '../layout/img/java.png'
import C from '../layout/img/c.png'
import PYTHON from '../layout/img/python.png'

function Services() {
  return (
    <div className="Services" id="services">
      <div className="servicesOverlay"></div>
      <div className="servicesContent">
        <div className="leftService">
          <h3><i className="fa-solid fa-book"></i> Frameworks and Libraries</h3>
          <div className="advancedServices">
            <span className="reactjs"></span>
            <span className="reactNative"></span>
            <span className="nodejs"></span>
          </div>
        </div>
        <div className="rightService">
          <h3><i className="fa-solid fa-code"></i> Main Languages</h3>
          <div className="mainLanguages">
            <span>
              <img src={HTML} />
              <p>HTML</p>
            </span>
            <span>
              <img src={CSS} />
              <p>CSS</p>
            </span>
            <span>
              <img src={JS} />
              <p>Javascript</p>
            </span>
            <span>
              <img src={JAVA} />
              <p>Java</p>
            </span>
            <span>
              <img src={C} />
              <p>C</p>
            </span>
            <span>
              <img src={PYTHON} />
              <p>Python</p>
            </span>
          </div>
        </div>
      </div>
      <a href="#about" className="downArrow" id="downArrowService">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </div>
  )
}

export default Services
