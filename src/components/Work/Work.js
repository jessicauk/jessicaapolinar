import React from 'react';
import './Work.scss';
import github from '../../../public/assets/images/github.png'
import portfolio from '../../../public/assets/images/jessicaapolinar2.png'


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
    </div>
  )
}

export default Work