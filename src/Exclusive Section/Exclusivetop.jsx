import React from 'react'
import vip from "../assets/vip_logo.webp";
import { RxArrowRight } from "react-icons/rx";

const Exclusivetop = () => {
  return (
    <div className='h-[265px] flex justify-center items-end pb-3'>
            <div className='bg-[#201530] h-[186px] w-[1064px] rounded-3xl flex py-6 px-[3.25rem]'>
            {/* left section */}
                    <div className='w-[675px] flex flex-col gap-7 border-r-2 border-[#d2b17c]'>
                           <h2 className='text-[1.85rem] text-[#d2b17c] font-serif font-bold'>
                           Exclusive & Personalised Matchmaking by Shaadi.com
                           </h2> 
                           <ul className='flex text-white gap-3 font-semibold text-[1.1rem]'>
                            <li>Top Rated Consultants</li>
                            <li>|</li>
                            <li>5 times higher success rates</li>
                            <li>|</li>
                            <li>100% Privacy</li>
                           </ul>
                    </div>
            {/* right section */}
                    <div className='flex flex-col items-center w-[337px] pl-5 h-[146px] gap-3'>
                            <div className='h-[56px] w-[269px]'>
                                <img src={vip} className='w-[100%] h-[100%] object-contain'/>
                            </div>
                            <div>
                                    <div className='bg-[#d2b17c] w-[263px] h-[44px] flex gap-1 justify-center items-center font-semibold text-[1.2rem] rounded'>Get Invited
                                    <RxArrowRight />
                                    </div>
                            </div>
                    </div>
            </div>
    </div>
  )
}

export default Exclusivetop