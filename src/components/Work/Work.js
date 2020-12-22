import React from 'react';
import './Work.scss';
import image from '../../../public/assets/images/background.jpg'


function Work() {
  return (
    <section className="work" id="work">
      <div className="heading">
        <h2>Work</h2>
      </div>
      <div className="wrapper">
        <div className="card">
          <img src={image}/>
          <div className="info">
            <h1>Podcast App</h1>
            <p>Web App that shows a list of podcast consuming RSS service</p>
            <button>More</button>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Work