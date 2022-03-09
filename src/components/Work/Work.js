import React from 'react';
import './Work.scss';
import github from '../../../public/assets/images/github.png'
import sanfer from '../../../public/assets/images/sanfer.png'
import codepen from '../../../public/assets/images/codepen.png'


function Work() {
  return (
    <div className="work" id="work">
      <section className="wrapper">
        <div className="grid">
          <div className="grid__item">
            <div className="card">
              <div className="card__figure">
                <img className="card__img" src={sanfer} />
              </div>
              <div className="card__content">
                <h1 className="card__header">Sanfer</h1>
                <p className="card__text">Sanfer Website</p>
                <a
                  className="card__button btn"
                  id=""
                  href="https://www.sanfer.com.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show
                </a>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <div className="card__figure">
                <img className="card__img" src={github} />
              </div>
              <div className="card__content">
                <h1 className="card__header">Github</h1>
                <p className="card__text">Github Projects</p>
                <a
                  className="card__button btn"
                  id=""
                  href="https://github.com/jessicauk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show
                </a>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <div className="card__figure">
                <img className="card__img" src={codepen} />
              </div>
              <div className="card__content">
                <h1 className="card__header">Codepen</h1>
                <p className="card__text">Codepen</p>
                <a
                  className="card__button btn"
                  id=""
                  href="https://codepen.io/jessicaapolinar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="work__btn ">
          <a
            className="btn"
            id=""
            href="https://github.com/jessicauk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show more ...
          </a>
        </div>
      </section>
    </div>
  );
}

export default Work