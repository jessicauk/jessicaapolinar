import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa"
import './Contact.scss';

function Contact() {

  return (
    <footer className="contact" id="contact">
      <div className="wrapper">
        <h2>Let's talk!</h2>
        <ul className="list-contact">
          <li>
            <a 
              href="https://www.linkedin.com/in/jessica-apolinar-890470119/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/jessicauk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a 
              href="mailto:jessica.uk220691@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a 
              href="tel:+525549643574"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhoneAlt />
            </a>
          </li>
        </ul>
        <div className="footer-text">
          <p>Live inspired.</p>
          <p>Created by Jessica Apolinar @<span>{new Date().getFullYear()}</span></p>
          <small>v.0.0.1_draft2</small>
        </div>
      </div>
    </footer>
  )
}

export default Contact