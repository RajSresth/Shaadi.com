import React from 'react'
import img from "../assets/home-icon-sprite.png";
const Exclusivebottom = () => {
  return (
    <div className='h-[523px] w-[100%] flex flex-col gap-4 items-center justify-between py-[4.5rem]'>
        <h2 className='text-[#ec575c] text-center font-medium text-[2.5rem]'>Find your Special Someone</h2>
        <div className='flex'>
            <div className=' w-[380px] h-[343px] text-center flex flex-col justify-center items-center gap-11'>
                <div className="w-[133px] h-[148px] rounded-full bg-cover bg-no-repeat " id="exclusiveCard1">
                </div>
                <div>
                <h3 className='text-[#00bcd5] text-[1.5rem]'>Sign Up</h3>
                <p className='text-[#787883]'>Register for free & put up your Matrimony Profile</p>
                </div>
            </div>
            <div className=' w-[380px] h-[343px] text-center flex flex-col justify-center items-center gap-11'>
                <div className="w-[133px] h-[148px] rounded-full bg-cover  " id="exclusiveCard2">
                </div>
                <div>
                <h3 className='text-[#00bcd5] text-[1.5rem]'>Connect</h3>
                <p className='text-[#787883]'>Select & Connect with Matches you like</p>
                </div>
            </div>
            <div className=' w-[380px] h-[343px] text-center flex flex-col justify-center items-center gap-11'>
                <div className="w-[133px] h-[148px] rounded-full bg-cover  " id="exclusiveCard3">
                </div>
                <div>
                <h3 className='text-[#00bcd5] text-[1.5rem]'>Interact</h3>
                <p className='text-[#787883]'>Become a Premium Member & Start a Conversation</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Exclusivebottom