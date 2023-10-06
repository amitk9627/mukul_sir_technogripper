import React from 'react'
import {AiTwotoneBell,AiOutlineSearch, AiOutlinePlusSquare} from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='px-10 h-16 flex items-center justify-between bg-slate-300'>
      <div className='text-2xl font-bold'>Insights</div>
      <div className='flex gap-10'>
      <div className='flex items-center justify-center'><span><AiOutlinePlusSquare className='text-2xl' /></span></div>
        <div className='flex items-center justify-center'><span><AiOutlineSearch className='text-2xl' /></span></div>
        <div className='flex items-center justify-center'><span><AiTwotoneBell className='text-yellow-500 text-2xl'/></span></div>
        <div>
            <span>
                <img src="data:image/jpeg;base64,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" alt="" className='h-10 w-10 rounded-full'/>
            </span>
            </div>
      </div>
    </div>
  )
}

export default Navbar
