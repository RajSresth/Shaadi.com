import React from 'react'
import CardCarousal from './CardCarousal'

const MainCarousal = () => {
  return (
    <div  className='h-[882px] w-[100vw] flex flex-col items-center justify-center gap-[5rem]'>
        <h2 className='text-[#ff5a60] font-medium text-[2.5rem]'>Matrimony Service with Millions of Success Stories</h2>
        <CardCarousal></CardCarousal>
    </div>
  )
}

export default MainCarousal