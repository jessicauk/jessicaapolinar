import React from "react";
import "./About.scss";

import image from "../../../public/assets/images/jessica3.png";
import LazyServices from "../Services/LazyServices";

function About() {
  return (
    <div className="about" id="about">
      <section className="wrapper">
        <LazyServices />
        <div className="content">
          <div className="content-description content-width">
            <h3>I'm a Front End Developer.</h3>
            <br />
            <p>
              I found in code one way to show up my personality. Typing code
              lines I materialize anything whenever I put it into action.
            </p>
            <br />
            <p>
              The most I like about software is the superpower of build products 
              which create unique experiences. 
            </p>
          </div>
          <div className="content-width">
            <img src={image} className="image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
