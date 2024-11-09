import React from 'react'

function Contact() {
  return (
    <div className="Contact" id="contact">
      <div className="leftContact"></div>
      <div className="rightContact">
        <div className="contactTitle">
          <h3>Contact Details</h3>
          <p>Warning! spammers are not welcomed...</p>
        </div>
        <div className="contactDetails">
          <ul>
            <li>
              <i className="fa-solid fa-mobile-screen"></i>
              <span>+86 15874031329</span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>hammanyoumaima987@gmail.com</span>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>Fix Unavailable</span>
            </li>
            <li>
              <i className="fa-solid fa-address-book"></i>
              <span>Changsha city, Hunan province, China</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact
