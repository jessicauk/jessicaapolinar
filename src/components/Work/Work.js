import React from 'react';
import './Work.scss';
import image from '../../../public/assets/images/podcast.png'


function Work() {
  return (
    <section className="work" id="work">
      <div className="wrapper">
        <div className="card">
          <div className="layer" />
          <img src={image}/>
          <div className="info">
            <h1>Podcast App</h1>
            <p>Web App that shows a list of podcast consuming RSS service</p>
            {/* <button href="https://jessicauk.github.io/podcast/">More</button> */}
            <a id="" href="https://jessicauk.github.io/podcast" className="btn">Show more</a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Work