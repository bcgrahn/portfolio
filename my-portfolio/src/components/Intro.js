import spring from '../assets/spring.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';


export default function Intro() {
  const [loaded, setLoaded] = useState(true)
  return (
    <>
      {loaded
        ? <div
          className='fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center'
        >Loading...
        </div>
        : null}
      <div id='home' className='flex w-full h-screen flex-col md:flex-row gap-6 items-center justify-center text-white relative pt-20'>
        <div className='pt-20  md:w-3/6 md:p-4'>
          <img className='bounce' data-aos='flip-right' data-aos-duration='15000' data-aos-offset='200' src={spring} alt='profile' onLoad={() => setLoaded(false)} />
        </div>
        <div className='md:w-3/6' data-aos='fade-right' data-aos-duration='1000' data-aos-offset='100'>
          <div className='flex flex-col w-full mt-8'>
            <h1 className='text-2xl text-gray-200'>Hi, I'm</h1>
            <h1 className='text-3xl font-bold'>Bryce Grahn</h1>
            <p class='pt-8 text-xl font-bold text-gray-100'>Information Engineer</p>
            <p className='pt-2 text-md font-light text-gray-200 text-justify '>I am an engineer and software developer with an unwavering passion for innovation and a relentless drive to excel. My creative mindset fuels my quest to craft elegant solutions that blend cutting-edge technology with strategic thinking. I thrive on problem-solving, viewing challenges as opportunities to learn and grow. In my journey, I've discovered that success is not about working hard; it's about working smart. I'm committed to sharing my knowledge and uplifting the people I work with, as I believe in collective growth. </p>
            <p className='pt-5 text-md font-light text-gray-200  text-justify '>Outside of my professional endeavors, I embrace competition, whether in coding challenges or the thrill of racing FPV drones. In my downtime, I find solace in the art of fly fishing, a hobby that parallels my approach to life — patient, focused, and always in pursuit of the perfect catch.</p>
          </div>

          <ul className='pt-5 flex mt-2 gap-4 items-center'>
            <li>
              <a href='https://github.com/bcgrahn?tab=repositories' class='text-gray-200 hover:text-gray-100 dark:hover:text-white'><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
            </li>
            <li>
              <a href='https://www.instagram.com/bryce_grahn/' class='text-gray-200 hover:text-gray-100 dark:hover:text-white'><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/bryce-grahn/' class='text-gray-200 hover:text-gray-100 dark:hover:text-white'><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
            </li>
          </ul>
        </div>
        {/* <img src={hr} className="m-5 w-full md:h-2 absolute bottom-0" alt="hr" /> */}
      </div>
    </>
  )
}
