import React from 'react'
import Logo from '../image/logo.png'
const Header = () => {
  return (
    
    <header className='bg-[#a3876a]  font-mono text-xl'>
        <div className='flex justify-between items-center w-full px-3 py-2'> 
          <img src={Logo} alt="headImg" className='h-[6vh]  object-contain hover:cursor-pointer' />
          <p className='hover:cursor-pointer'>STONE-PAPER-SCISSOR GAME</p>
        </div>
    </header>
  )
}

export default Header