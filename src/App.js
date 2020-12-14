import React, { Fragment } from "react";
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import About from './components/About/About'

function App() {
  return (
    <Fragment>
      <Banner />
      <Header />
      <About />
    </Fragment>
  )
}
export default App;