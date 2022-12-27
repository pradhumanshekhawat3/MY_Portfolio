import React from 'react'
import Profile from './Profile'
import Footer from '../Home/Footer/Footer'
// import Contact from '../Contactme/Contact'
import About from '../Aboutme/About'
import Foot from '../Foot/Foot'
import "./Home.css"
import Skills from '../Skills/Skills'
export default function() {
  return (
    <div className='home-conatiner'>
        <Profile/>
        <Footer/>
        <About/>
        <Skills/>
        {/* <Contact/> */}
        <Foot/>
    </div>
  )
}
