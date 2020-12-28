import React from 'react';
import './Header.scss';
 
function Header() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header !== null && header !== undefined) {
      header.classList.toggle('sticky', window.scrollY > 0)
    }
  })
  /* const button = document.getElementById("nav-item-about");
  if (button!== null && button !== undefined) {
    button.addEventListener('click', () => {
      button.scrollIntoView()
    })
  }

  const onClickHandler = (id) => {
    const element = document.getElementById(id);
    if (element!== null && element !== undefined) {
      element.addEventListener('click', () => {
        element.scrollIntoView()
      })
    }
  } */

  return (
    <header className="header">
      <a href="" className="logo" >Jessica Apolinar </a>
      <div className="toggle"></div>
      <ul>
        <li><a id="nav-item-home" href="#">Home</a></li>
        <li><a id="nav-item-about" href="#about">About</a></li>
        {/* <li><a id="nav-item-services" href="#services">Services</a></li> */}
        <li><a id="nav-item-work" href="#work">Work</a></li>
        <li><a id="nav-item-contact" href="#contact">Contact</a></li>
      </ul>
    </header>
  )
}

export default Header