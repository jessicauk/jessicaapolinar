import React from 'react';
import './Work.scss';
import github from '../../../public/assets/images/github.png'
import portfolio from '../../../public/assets/images/jessicaapolinar2.png'
import codepen from '../../../public/assets/images/codepen.png'


function Work() {
  return (
    <div className="work" id="work">
      <section className="wrapper">
        <div className="grid">
          <div className="grid__item">
            <div className="card">
              <img className="card__img" src={github}/>
              <div className="card__content">
                <h1 className="card__header">Github</h1>
                <p className="card__text">Github Projects</p>
                <a className="card__button btn" id="" href="https://github.com/jessicauk" target="_blank"
              rel="noopener noreferrer">Show more</a>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img className="card__img" src={portfolio}/>
              <div className="card__content">
                <h1 className="card__header">Jessica Apolinar</h1>
                <p className="card__text">Portfolio</p>
                <a className="card__button btn" id="" href="https://jessicaapolinar.com" target="_blank"
              rel="noopener noreferrer">Show more</a>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img className="card__img" src={codepen}/>
              <div className="card__content">
                <h1 className="card__header">Codepen</h1>
                <p className="card__text">Codepen</p>
                <a className="card__button btn" id="" href="https://codepen.io/jessicauk-the-looper" target="_blank"
              rel="noopener noreferrer">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work