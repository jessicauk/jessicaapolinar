import React from 'react';
import './Header.scss';
 
function Header() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header !== null && header !== undefined) {
      header.classList.toggle('sticky', window.scrollY > 0)
    }
  })
  const button = document.getElementById("nav-item-about");
  if (button!== null && button !== undefined) {
    button.addEventListener('click', () => {
      button.scrollIntoView()
    })
  }
  return (
    <header className="header">
      <a href="" className="logo" >Jessica Apolinar </a>
      <div className="toggle"></div>
      <ul>
        <li><a id="nav-item-home" href="#">Home</a></li>
        <li><a id="nav-item-about" href="#about">About</a></li>
        <li><a id="nav-item-services" href="#">Services</a></li>
        <li><a id="nav-item-work" href="#">Work</a></li>
        <li><a id="nav-item-contact" href="#">Contact</a></li>
      </ul>
    </header>
  )
}

export default Header