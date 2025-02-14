import React from 'react'
import { useDarkMode } from './Darkmode'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { IoMdMail } from 'react-icons/io'
import prop7 from '../assets/images/prop7.jpg'
import prop8 from '../assets/images/prop8.jpg'

function Footer() {

  const { darkMode, toggleDarkMode} = useDarkMode();
  return (
    <>
      <footer className={`${darkMode ? 'dark bg-black' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 px-20 grid lg:grid-cols-3 grid-cols-1 justify-center items-start lg:gap-20 gap-10`}>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>About Us</h1>
          <p className='text-slate-200 text-justify'>The Hawailer rentals estate is a company that deals with selling of rental houses, loaning of houses and also advertising rental houses of big owners who need to rent their houses.</p>
          <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duratio-300'>
              <FaFacebook className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duratio-300'>
              <FaInstagram className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duratio-300'>
              <FaTwitter className='size-5' />
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duratio-300'>
              <FaYoutube className='size-5' />
            </div>
          </div>
          <h1 className='text-white mt-8'>Copyright Real Estate, All Rights Reserved</h1>
        </div>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='size-5 text-white' />
            <p className='text-slate-200'>Our offices are in the coastal parts of kenya in Kwale County, Wtamu areas.</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='size-5 text-white' />
            <p className='text-slate-200'>+254 115 942 960</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaFax className='size-5 text-white' />
            <p className='text-slate-200'>254 736 435 307</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <IoMdMail className='size-5 text-white' />
            <p className='text-slate-200'>realestate@gmail.com</p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop7} className='w-[120px] rounded-lg transform duration-300 cursor-pointer transition-transform' alt="" />
            <div>
              <h1 className='text-lg text-white'>Coastals with Amazing Views</h1>
              <p className='text-slate-400'>$ 287.98</p>
            </div>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <img src={prop8} className='w-[120px] rounded-lg transform duration-300 cursor-pointer transition-transform' alt="" />
            <div>
              <h1 className='text-lg text-white'>Smart Beach Views</h1>
              <p className='text-slate-400'>$ 587.98</p>
            </div>
          </div>
        </div>
      </footer>

      {/*slide to top button */}
      <div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-6 bottom-4 right-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
        <FaArrowUp className='size-6 text-white' />
        </Link>
      </div>

      {/*darkmode with toggle icons */}
      <div>
        <button onClick={toggleDarkMode} className='flex items-center rounded-full bg-orange-500 fixed lg:top-52 right-2 top-20 p-4 cursor-pointer'>
          {darkMode ? <FaMoon size={25} className='text-black'/> : <FaSun size={25} className='text-black' />}
        </button>
      </div>
    </>
  )
}

export default Footer
