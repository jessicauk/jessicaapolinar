import React, { Fragment } from "react";
import LazyBanner from './components/Banner/LazyBanner'
import LazyHeader from './components/Header/LazyHeader'
import LazyAbout from './components/About/LazyAbout'
import LazyServices from './components/Services/LazyServices'
import LazyWork from './components/Work/LazyWork'
import LazyContact from './components/Contact/LazyContact'

function App() {
  return (
    <Fragment>
      <LazyBanner />
      <LazyHeader />
      <LazyAbout />
      <LazyServices />
      <LazyWork />
      <LazyContact />
    </Fragment>
  )
}
export default App;