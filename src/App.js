import React from "react";
import LazyBanner from './components/Banner/LazyBanner'
import LazyHeader from './components/Header/LazyHeader'
import LazyAbout from './components/About/LazyAbout'
import LazyWork from './components/Work/LazyWork'
import LazyContact from './components/Contact/LazyContact'

function App() {
  return (
    <div className="app-wrapper">
      <LazyBanner />
      <LazyHeader />
      <div className="content__wrapper">
        <LazyAbout />
        <LazyWork />
        <LazyContact />
      </div>
    </div>
  )
}
export default App;