import React, {useEffect} from 'react'
import LogoWithoutBackground from '../layout/img/logoWithoutBackground.png'


function Header() {
  useEffect(() => {
    
    let toggleBtn = document.getElementById("toggleBtn");
    let list = document.getElementById("list");
    let header = document.getElementById("header");
    let queryList = document.querySelectorAll(".list a");
    toggleBtn.addEventListener("click", () => {
      list.classList.toggle("toggleGrid");
      header.classList.toggle("heightHeader");
    });
    queryList.forEach((element) => {
      element.addEventListener("click", () => {
        list.classList.remove("toggleGrid");
        header.classList.remove("heightHeader");
      }); 
    });
  });
  return (
    <div className="Header" id="header">
      <div className="headerToggle" id="toggleBtn">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="logo">
        <img src={LogoWithoutBackground} />
        <h3>Oumaima El Hammani</h3>
      </div>
      <ul className="list" id="list">
        <a href="#home"><li>Home</li></a>
        <a href="#services"><li>Services</li></a>
        <a href="#about"><li>About</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul>
    </div>
  )
}

export default Header
