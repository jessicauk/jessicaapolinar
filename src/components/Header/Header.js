import React, {useEffect, useState} from 'react';
import './Header.scss';
 
function Header() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header !== null && header !== undefined) {
      header.classList.toggle('sticky', window.scrollY > 0)
    }
  })

  useEffect(() => {
    if (windowSize.width < 421) {
      const element = document.getElementById('nav-list');
      const toggle = document.getElementById('toggle');
      element.classList.remove('responsive')
      toggle.classList.remove('toggle-transformed')
    }
  }, [windowSize])

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize()
    
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  const onClickToggle = () => {
    const element = document.getElementById('nav-list');
    if (element !== null && element !== undefined) {
      setIsOpenMenu(!isOpenMenu)
      element.classList.toggle('responsive')
    }
  }

  return (
    <header className="header">
      <a href="" className="logo" >Jessica Apolinar </a>
      <i className={`${isOpenMenu === true ? "toggle toggle-transformed": "toggle" }`} id="toggle" onClick={onClickToggle}></i>
      <ul id="nav-list">
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