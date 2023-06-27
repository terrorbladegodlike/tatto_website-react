import React, {useState, useEffect} from 'react'

// import data
import {headerData} from '../data'

// import motion
import {motion} from 'framer-motion'

// import components
import Nav from './Nav'
import NavMobile from './NavMobile'
import Socials from './Socials'

// import icons
import {TiThMenuOutline} from 'react-icons/ti'

// import variants
import {fadeIn} from '../variants'

const Header = () => {

  // destructure header data
  const {logo} = headerData;

  // header state
  const [isActive, setIsActive] = useState(false)

  // nav mobile state
  const [navMobile, setNavMobile] = useState(false)

  // scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
    })
  })

  return (
    <header className={`${
              isActive 
                ? 'h-[100px] lg:h-[110px] shadow-lg' 
                : 'h-[120px] lg:h-[150px]'
                } fixed bg-white left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className='flex justify-between items-center h-full pl-[50px] pr-[60px]'>
        {/* Logo */}
        <a href="/">
          <img className='w-[188px] h-[90px]' src={logo} alt="logo" />
        </a>
        {/* Nav - Initially hidden - show on desktop */}
        <div className='hidden lg:flex'>
          <Nav/>
        </div>
        {/* Nav menu btn - showing by default - hidden on desktop */}
        <div onClick={() => setNavMobile(!navMobile)} className='xl:hidden absolute right-[5%] bg-dark text-white p-2 rounded-md cursor-pointer'>
          <TiThMenuOutline className='text-3xl'/>
        </div>
        {/* Nav mobile - showing by default - hidden on desktop */}
        <div className={` ${navMobile ? 'max-h-full' : 'max-h-[0]'} ${isActive ? 'top-[100px] lg:top-[110px]' : 'top-[120px] lg:top-[150px]'} fixed w-full h-full left-0 bg-white -z-10 transition-all duration-300`}>
          <NavMobile/>
        </div>
        {/* Social icons -initially hidden - show on desktop */}
        <div className='hidden xl:flex'>
          <Socials/>
        </div>
      </div>
    </header>
  )
}

export default Header