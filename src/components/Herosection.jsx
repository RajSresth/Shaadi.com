import React from 'react'
import Nav from './Nav'
import HeaderContainer from './HeaderContainer'

const Herosection = () => {
  return (
    <div className='w-[100vw] h-[90vh] py-[2rem]  flex flex-col justify-between' id='hero-section'>
        <Nav></Nav>
        <HeaderContainer></HeaderContainer>
    </div>
  )
}

export default Herosection