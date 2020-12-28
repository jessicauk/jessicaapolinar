import React from 'react';
import './Banner.scss';
import image from '../../../public/assets/images/me_png.png'
 
function Banner() {
  const button = document.getElementById("btn-about");
  if (button!== null && button !== undefined) {
    button.addEventListener('click', () => {
      button.scrollIntoView()
    })
  }
  return (
    <section className="banner">
      <div className="section-heading">
        <h2>Jessica Apolinar.</h2>
        <h3>Front End Web Developer.</h3>
        <a id="btn-about" href="#about" className="btn">About me</a>
      </div>
      <div className="banner-image">
        <img className="image" src={image} width="600px" height="90%" alt="me"/>
      </div>
    </section>
  )
}

export default Banner
