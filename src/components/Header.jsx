import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { assets } from '../assets/assets'
import { useDarkMode } from './Darkmode'
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa'

function Header() {

  const { darkMode, toggleDarkMode} = useDarkMode();

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    {
      link : 'Home', path: 'home'
    },
    {
      link : 'About', path: 'about'
    },
    {
      link : 'Properties', path: 'properties'
    },
    {
      link : 'Services', path: 'services'
    },
    {
      link : 'Testimonials', path: 'testimonials'
    },
    {
      link : 'Contact', path: 'contact'
    },
  ]

  return (
    <nav className={`${darkMode ? 'dark bg-black drop-shadow-lg' : 'light bg-white drop-shadow-lg'} flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30`}>
      <div id='logo' className='flex items-center'>
      <img src={assets.logo} alt="" className='lg:w-[70px] w-[50px] dark:gray-500' />
      <h1 className='text-gray-500 font-serif text-xl'>HAWAILER <span className='underline underline-offset-4 decoration-1 under font-light text-orange-500'>RENTALS</span></h1>
      </div>
      <ul className='lg:flex justify-center items-center gap-8 hidden'>
        {navItems.map(({link, path}) => (
          <Link key={path} className='text-black text-[15px] font-semibold font-serif cursor-pointer px-3 py-2 dark:text-gray-500 rounded-lg hover:bg-red-600 hover:text-white' to={path} spy={true} offset={-100} smooth={true}>{link}</Link>
        ))}
      </ul>
      {/*mobile menu */}
      <div className='flex justify-center items-center lg:hidden' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-black dark:text-white text-2xl cursor-pointer' /> : <FaBars className='text-black dark:text-white text-2xl cursor-pointer' />}
        </div>
      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({link, path}) => (
            <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-red-600 hover:text-black w-full text-center' to={path}>{link}</Link>
          ))}
        </ul>
      </div>
      <div className='flex justify-center items-center lg:gap-8 gap-2'>
        <div className='flex justify-center items-center lg:gap-3 gap-1'>
          <FaPhoneAlt className='size-5 text-red-600' />
          <h1 className='lg:text-xl text-sm text-black dark:text-gray-500 font-semibold'>+254 115 942 960</h1>
        </div>
        <FaUserCircle className='size-6 text-red-600 cursor-pointer hover:drop-shadow:cyan-500/50' />
      </div>
    </nav>
  )
}

export default Header
