import React from 'react'
import Herosection from './components/Herosection'
import "./App.css"
import Exclusivesection from './Exclusive Section/Exclusivesection'
import MainCarousal from './Carousal Section/MainCarousal'

const App = () => {
  return (
    <div >
      <Herosection></Herosection>
      <Exclusivesection></Exclusivesection>
      <MainCarousal></MainCarousal>
    </div>
  )
}

export default App