import React, { useEffect } from 'react'
import { useDarkMode } from '../components/Darkmode'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Contact() {

  useEffect(() => {
      Aos.init({
          offset: 200,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, [])
    const { darkMode, toggleDarkMode} = useDarkMode();
  return (
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} pb-20`}>
      <h1 className='text-red-900 dark:text-gray-500 text-2xl font-serif lg:px-10 lg:py-4'>OUR CONTACTS <span className='underline underline-offset-4 decoration-1 under font-light text-orange-500'>INFORMATION</span></h1>
      <section id='contact' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[95%] h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:px-36 py-20 px-6 gap-10`}>
        <div data-aos ="zoom-in" className='bg-white dark:bg-black flex flex-col justify-center items-start gap-4 rounded-xl p-8'>
          <h1 className='text-2xl text-black font-semibold dark:text-white'>Send your message today</h1>
          <input type="text" placeholder='Enter your full name here' className='w-full px-6 py-3 border-2 text-gray-500 border-gray-200 rounded-xl' />
          <input type="email" placeholder='Enter your valid email' className='w-full px-6 py-3 border-2 text-gray-500 border-gray-200 rounded-xl' />
          <input type="number" placeholder='Enter your mobile number' className='w-full px-6 py-3 border-2 text-gray-500 border-gray-200 rounded-xl' />
          <textarea name="" id="" cols="30" rows="5" placeholder='Enter your message' className='w-full px-6 py-3 border-2 text-gray-500 border-gray-200 rounded-xl'></textarea>
          <button className='bg-red-600 text-md w-full px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer'>SEND EMAIL</button>
        </div>
        <div className='flex flex-col justify-center items-start gap-8 lg:p-20 p-6'>
          <h1 data-aos = "zoom-in" data-aos-delay = "200" className='text-red-500 dark:text-white text-2xl font-serif'>REACH US ON:</h1>
          <h1 data-aos = "zoom-in" data-aos-delay = "400" className='text-black text-[40px] font-semibold leading-10 dark:text-white'>Our Social Media Handles shown below</h1>
          <div data-aos = "zoom-in" data-aos-delay = "600" id='social-icons' className='flex justify-start items-center gap-4 mt-4'>
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
        </div>
      </section>
    </div>
  )
}

export default Contact
