import React from 'react';
import './Services.scss';
 
function Services() {
  return (
    <section className="services" id="services">
      <div classname="section-heading white">
        <h2>Skills</h2>
        <p>Skill ......</p>
      </div>
      <div className="content">
        <div className="services-item">
          <img src=""></img>
          <h2>HTML5 + CSS3</h2>
          <p>Develop web sites</p>
        </div>
        <div className="services-item">
          <img src=""></img>
          <h2>React + Redux</h2>
          <p>Develop web sites</p>
        </div>
        <div className="services-item">
          <img src=""></img>
          <h2>Python</h2>
          <p>Develop web sites</p>
        </div>
        <div className="services-item">
          <img src=""></img>
          <h2>Node</h2>
          <p>Develop web sites</p>
        </div>
      </div>
    </section>
  )
}

export default Services