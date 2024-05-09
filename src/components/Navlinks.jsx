import React from 'react'
import { FaChevronDown } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";

const Navlinks = () => {
  return (
    <div className='w-[10vw] text-white flex gap-10 items-center text-[1.11rem]'>
        <div >
            <a className='flex items-center gap-2 hover:underline cursor-pointer'>Login <FaChevronDown className='text-[0.85rem]' />   
            </a>
        </div>
        <div>
            <a className='flex items-center gap-2 hover:underline cursor-pointer'><FaRegCircleUser className='text-[1.5rem]' />
            Help
            <FaChevronDown className='text-[0.85rem]'/>
            </a>
        </div>
    </div>
  )
}

export default Navlinks