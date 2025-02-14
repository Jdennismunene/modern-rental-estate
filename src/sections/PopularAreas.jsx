import React, { useEffect } from 'react'
import { useDarkMode } from '../components/Darkmode'
import { assets } from '../assets/assets'
import Aos from 'aos'
import 'aos/dist/aos.css'

function PopularAreas() {

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
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <section className={`${darkMode ? 'dark bg-gray-800' : 'light bg-red-100'} lg:w-[90%] w-full h-fit bg-cover bg-center rounded-xl flex flex-col justify-center items-center lg:px-20 lg:mx-10 px-6 py-20 gap-20  `}>
        <div id='top' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
          <div>
            <h1 data-aos = "zoom-in" className='text-red-500 dark:text-white text-3xl font-serif'>POPULAR <span className='underline underline-offset-4 decoration-1 under font-light text-orange-500'>AREAS</span></h1>
            <h1 data-aos = "zoom-in" className='text-black text-[40px] leading-10 mt-4 font-semibold dark:text-white'>Explore most of <br />our Popular areas</h1>
          </div>
          <div className='grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6'>
            <div data-aos = "zoom-in" data-aos-delay = "400" style={{backgroundImage: `url(${assets.area1})`}} className='h-[400px] bg-cover bg-center rounded-xl'>
            </div>
            <div data-aos = "zoom-in" data-aos-delay = "400" style={{backgroundImage: `url(${assets.area2})`}} className='h-[400px] bg-cover bg-center rounded-xl'>
            </div>
            <div data-aos = "zoom-in" data-aos-delay = "400" style={{backgroundImage: `url(${assets.area3})`}} className='h-[400px] bg-cover bg-center rounded-xl'>
            </div>
          </div>
        </div>
        <div id='bottom' className='w-full grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-start gap-6  '>
          <div data-aos = "slide-up" data-aos-delay = "200" className='flex justify-center lg:items-center sm:items-center gap-2 w-full '>
            <h1 className='text-black text-7xl font-semibold dark-text-white'>5K</h1>
            <h1 className='text-gray-500 dark:text-white'>ACTIVE <br /> LISTINGS</h1>
          </div>
          <div data-aos = "slide-up" data-aos-delay = "200" className='flex justify-center lg:items-center sm:items-center gap-2 w-full '>
            <h1 className='text-black text-7xl font-semibold dark-text-white'>10K</h1>
            <h1 className='text-gray-500 dark:text-white'>SALES <br /> LISTINGS</h1>
          </div>
          <div data-aos = "slide-up" data-aos-delay = "200" className='flex justify-center lg:items-center sm:items-center gap-2 w-full '>
            <h1 className='text-black text-7xl font-semibold dark-text-white'>50K</h1>
            <h1 className='text-gray-500 dark:text-white'>HOUSE <br /> RENTALS</h1>
          </div>
        </div>

      </section>
      
    </div>
  )
}

export default PopularAreas
