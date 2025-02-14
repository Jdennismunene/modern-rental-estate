import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import { useDarkMode } from '../components/Darkmode'
import Aos from 'aos'
import 'aos/dist/aos.css'


function About() {
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
    <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full m-auto lg:px-10 px-40 py-20 grid lg:grid-cols-2`}>
        <div className='lg:w-[500px] w-[30rem] lg:h-[600px] lg:relative left-4 sm:relative right-24' >
            <img data-aos = "zoom-in" src={assets.about} alt="about image" className='rounded-2xl'  />
        </div>
      <div className='flex flex-col justify-center items-start gap-8 py-4 sm:relative right-20'>
        <h1 data-aos = "zoom-in" className='text-red-500 dark:text-gray-500 font-serif font-bold text-3xl'>ABOUT <span className='underline underline-offset-4 decoration-1 under font-light text-orange-500'>US</span></h1>
        <h1 data-aos = "zoom-in" data-aos-delay = "200" className='text-black text-[30px] font-semibold font-serif lg:leading-10 dark:text-gray-500'>Get a brief insight or view of our rental houses</h1>
        <p data-aos = "zoom-in" data-aos-delay = "400" className='text-xl text-gray-600 dark:gray-500 text-justify'>The Hawailer rentals estate is a company that deals with selling of rental houses, loaning of houses and also advertising rental houses of big owners who need to rent their houses.</p>
          <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 text-white font-semibold rounded-xl cursor-pointer transform hover:scale-110 transition-transform duration-300'>READ MORE</button>
      </div>
    </section>
  )
}

export default About
