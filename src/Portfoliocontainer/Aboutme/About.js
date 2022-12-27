import React from 'react'
import "./About.css"
export default function About() {
  return (
    <div className='main-container'>

      <div className="main-about">
        <h1>About Me</h1>
        <p>Hello! I’m Pradhuman Singh Shekhawat.I am from Jaipur (Rajasthan).
          I am Persuing B-Tech(Computer Science & Engineering) from Central University of Haryana.
          <br />
          I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!

        </p>

      </div>
      {/* <div className="main-about">
        <h1>Bio</h1>
        <ul className='bio-list'>
          <li>
            <i class="fa-solid fa-calendar-days"> Age</i>
            21</li>
          <li>
            <i class="fa-solid fa-calendar-days">Email</i>pradhumanshekhawat@gmail.com
          </li>
          <li>
            <i class="fa-solid fa-calendar-days">Phone</i> +91 9057333614
          </li>
          <li>
            <i class="fa-solid fa-calendar-days"> Address</i> Jaipur Rajasthan
          </li>
        </ul>
      </div> */}

    </div>
  )
}
