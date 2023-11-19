import React from 'react'
import './intro.css'
import profileImg from '../../assets/me-img.png'

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello </span>
        <span className='introText'>Im <span className='introName'>Francisco Mayoral</span><br />Mecathronic Student</span>
      </div>
      <img src={profileImg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro
