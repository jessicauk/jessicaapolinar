import React from 'react';
import './Header.scss';
 
function Header() {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header !== null && header !== undefined) {
      header.classList.toggle('sticky', window.scrollY > 0)
    }
  })
  return (
    <header className="header">
      <a href="" className="logo" >Jessica Apolinar </a>
      <div className="toggle"></div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </header>
  )
}

export default Header