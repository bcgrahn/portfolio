import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Skills from '../components/Skills'
import Honors from '../components/Honors'
import Certs from '../components/Certs'
import Testimonials from '../components/Testimonials'
import './Page.css'
import HR from '../components/HR'
import React from 'react'

const HomePage = () => {
  return (
    <div class='bggradient'>
      <div class='overlay'>
        <header class='sticky top-0'><Navbar /></header>
      </div>
      <div className='content px-6 lg:px-20 xl:px-36'>
        <Intro />
        <div className='pt-80 sm:pt-20 md:pt-1'>
        </div>
        <div className='pt-20 sm:pt-0'>
        </div>
        <HR />
        <Skills />
        <HR />
        {/* <Honors /> */}
        {/* <Certs /> */}
        {/* <Testimonials /> */}
      </div>
      <Footer />
    </div>
  )
}
export default HomePage
