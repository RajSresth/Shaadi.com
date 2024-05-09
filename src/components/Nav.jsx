import React from 'react'
import Logo from './Logo'
import Navlinks from './Navlinks'

const Nav = () => {
  return (
    <div className='flex justify-between mx-auto items-center w-[70vw] h-[8vh]'>
        <Logo></Logo>
        <Navlinks></Navlinks>
    </div>
  )
}

export default Nav