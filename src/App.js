import React, { Fragment } from "react";
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import About from './components/About/About'
import Services from './components/Services/Services'

function App() {
  return (
    <Fragment>
      <Banner />
      <Header />
      <About />
      <Services />
    </Fragment>
  )
}
export default App;