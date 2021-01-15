import React, { Fragment } from "react";
import LazyBanner from './components/Banner/LazyBanner'
import LazyHeader from './components/Header/LazyHeader'
import LazyAbout from './components/About/LazyAbout'
import LazyWork from './components/Work/LazyWork'
import LazyContact from './components/Contact/LazyContact'

function App() {
  return (
    <Fragment>
      <LazyBanner />
      <LazyHeader />
      <LazyAbout />
      <LazyWork />
      <LazyContact />
    </Fragment>
  )
}
export default App;