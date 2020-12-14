import React from 'react';
import './Banner.scss';
import image from '../../../public/assets/images/me-2.png'
 
function Banner() {
  return (
    <section className="banner">
      <div className="banner-text">
        <h2>Hello, I'm <br/><span>Jessica Apolinar.</span></h2>
        <h3>I'm a Front End Web Developer.</h3>
        <a href="#" className="btn">About me</a>
      </div>
      <div className="banner-image">
        <img className="image" src={image} width="600px" height="90%" alt="me"/>
      </div>
    </section>
  )
}

export default Banner
