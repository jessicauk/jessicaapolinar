import React, { Fragment } from "react";
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import About from './components/About/About'
import Services from './components/Services/Services'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <Fragment>
      <Banner />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </Fragment>
  )
}
export default App;