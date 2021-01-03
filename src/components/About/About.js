import React from 'react';
import './About.scss';

import image from "../../../public/assets/images/me.png";
 
function About() {
  return (
    <div className="about" id="about">
      <section className="wrapper">
        <div className="content">
          <div className="content-description content-width">
            <h3>I'm a Front End Developer.</h3>
            <p>
              Computer Engineer, I have 4+ years of solid experience in web application development with specialization in Frontend. I have knowledge in Backend development on my own initiative. I consider myself attracted to digital world as editing and creating value content.
            </p>
          </div>
          <div className="content-width">
            <img src={image} className="image"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About