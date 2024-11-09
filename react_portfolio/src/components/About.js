import React from 'react'
import Logo from '../layout/img/logo.jpg'

function About() {
  return (
    <div className="About" id="about">
      <div className="aboutContent">
        <h3>Oumaima El Hammani</h3>
        <span>Web developer & Mobile developer</span>
        <img src={Logo} />
        <a href="#contact">Contact Details</a>
      </div>
      <div className="aboutSplit"></div>
    </div>
  )
}

export default About
