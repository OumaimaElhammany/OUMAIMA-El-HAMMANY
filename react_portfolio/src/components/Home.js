import React, { useEffect } from 'react'

function Home(props) {
  useEffect(() => {
    let copyClipboard = document.getElementById("copyClipboard");
    let clipboardMsg = document.getElementById("clipboardMsg");
    copyClipboard.addEventListener("click", () => {
      navigator.clipboard.writeText("hammanyoumaima987@gmail.com");
      clipboardMsg.style.opacity = 1;
      setTimeout(() => {
        clipboardMsg.style.opacity = 0;
      }, 2000);
    });
    
  });
  return (
    <div className="Home" id="home">
      <div className="homeOverlay"></div>
      <div className="homeContent">
        <h3>Hello, I'm <span>Oumaima El Hammani</span></h3>
        <div className="homeActions">
          <span id="copyClipboard"><i className="fa-regular fa-handshake"></i> Hire me</span>
          <a href="#services" id="servicesBtn">More</a>
        </div>
        <div className="socialMedia">
          <ul>
            <a href="#"><li><i className="fa-brands fa-facebook"></i></li></a>
            <a href="#"><li><i className="fa-brands fa-linkedin"></i></li></a>
            <a href="#"><li><i className="fa-brands fa-instagram"></i></li></a>
            <a href="#"><li><i className="fa-brands fa-github"></i></li></a>
          </ul>
        </div>
      </div>
      <div className="copiedClipboard" id="clipboardMsg">
        <i className="fa-solid fa-clipboard"></i> Copied in the clipboard
      </div>
      <a href="#services" className="downArrow" id="downArrow">
        <i className="fa-solid fa-angles-down"></i>
      </a>
    </div>
  )
}

export default Home
