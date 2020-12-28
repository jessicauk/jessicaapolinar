import React from 'react';
import './Contact.scss';
 
function Contact() {

  return (
    <footer className="contact">
      <ul>
        <li><a id="nav-item-home" href="#">Home</a></li>
        <li><a id="nav-item-about" href="#about">About</a></li>
        <li><a id="nav-item-services" href="#services">Services</a></li>
        <li><a id="nav-item-work" href="#work">Work</a></li>
        <li><a id="nav-item-contact" href="#contact">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Contact