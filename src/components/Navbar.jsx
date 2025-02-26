import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-15 w-full bg-slate-900 flex justify-between items-center text-white'>
        <div className="logo mx-auto text-2xl font-bold ">
            <span  className='text-green-900'>&lt;</span>
            Pas
            <span className='text-green-700'>Save/&gt;</span>
        </div>
        <div className="icons px-3 mx-auto">
          <ul className=' text-xl '>
            <li className='flex justify-center items-center gap-1'><span><img className='w-8' src="git.png" alt="github logo" /></span><span>GitHub</span></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar