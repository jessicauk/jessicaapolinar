import React from 'react';
import './Work.scss';
import github from '../../../public/assets/images/github.png'
import portfolio from '../../../public/assets/images/jessicaapolinar2.png'


function Work() {
  return (
    <section className="work" id="work">
      {/* <div className="wrapper">
        <div className="card">
          <div className="layer" />
          <img src={image}/>
          <div className="info">
            <h1>Podcast App</h1>
            <p>Web App that shows a list of podcast consuming RSS service</p>
            <a id="" href="https://jessicauk.github.io/podcast" className="btn">Show more</a>
          </div>
        </div>
      </div> */}
      <div className="grid">
        <div className="grid__item">
          <div className="card">
            <img className="card__img" src={github}/>
            <div className="card__content">
              <h1 className="card__header">Github</h1>
              <p className="card__text">Github repository projects</p>
              <button className="card__button">Show more</button>
            </div>
          </div>
        </div>
        <div className="grid__item">
          <div className="card">
            <img className="card__img" src={portfolio}/>
            <div className="card__content">
              <h1 className="card__header">Jessica Apolinar</h1>
              <p className="card__text">Portfolio</p>
              <button className="card__button">Show more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work