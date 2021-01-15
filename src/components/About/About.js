import React from 'react';
import './About.scss';

import image from "../../../public/assets/images/me_png.png";
import LazyServices from '../Services/LazyServices'

function About() {
  return (
    <div className="about" id="about">
      <section className="wrapper">
        <LazyServices />
        <div className="content">
          <div className="content-description content-width">
            <h3>I'm a Front End Developer.</h3>
            <p>
              Software Engineer, I have 4+ years of solid experience in web application development with specialization in Frontend. I have knowledge in Backend development on my own initiative. I consider myself attracted to digital world as editing and creating value content.
            </p>
            <br/>
            <p>
            I found in code one way to show up my personality. Typing code lines  I materialize anything I can imagine whenever I put it into action. 
            </p>
            <br/>
            <p>
            One of my objectives in life is create value and share knwoledge which could motivate other developers.
            </p>
            <br/>
          </div>
          <div className="content-width">
            <img src={image} className="image"/>
          </div>
        </div>
        <div className="content">
          <div className="content-width">
            {/* <img src={image} className="image"/> */}
          </div>
          <div className="content-description content-width">
            <p>
            <h4>To sum up my iterative personal learning process.</h4>
            <ul>
              <li>First  I learn a lot from my mentors and people whom I'm inspired.📚👩‍🏫</li>
              <li>Next put into practice.🧠📔</li>
              <li>Then fail.❌</li>
              <li>Then do it over.🔁</li>
              <li>Finally get succed.🏆</li>
            </ul>
            </p>
            <br/>
            <p>
            The place where I'd love to join is somewhere I can growth technically and having personal development surrounded by mentors and craks. As well as where it let me feel free to express creativity. Moreover positive mindset.
            </p>
            <br/>
            <p>
            What works for me is being patient and consistent. It helps me to become a proficient developer. I usually feel positive even though tough situations.
            </p>
            <br/>
          </div>
        </div>
        <div className="content">
          <div className="content-description content-width">
            <h4>What I really love.</h4>
            <p>
              <ul>
                <li>👨‍👩‍👧‍👦🏡 My family is everything I need in life.</li>
                <li>🏋🏊‍♀️ I extremely enjoy doing physical activities.</li>
                <li>🛬🏖 I'm passionate about travel as long as I have time and money.</li>
                <li>💻📖 I love learning process to develop new skills.</li>
                <li>💰📈 I encourage myself to get on well with my finance.</li>
                <li>🇲🇽🌮 I'm in love with my country and its rich culture. </li>
                <li>🐯🌸 Does anyone else love animals and the nature? </li>
                <li>👦👧 Last but not least I'm fond of doing networking.</li>
              </ul>
            </p>
          </div>
          <div className="content-width">
            {/* <img src={image} className="image"/> */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About