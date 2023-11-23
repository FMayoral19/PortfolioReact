import React from 'react';
import './intro.css';
import profileImg from '../../assets/me-img.png';
import btnImg from '../../assets/hireme.png';
import PDF from '../../assets/resumi.pdf'

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello, </span>
        <span className='introText'>I'm <span className='introName'>Francisco Mayoral</span><br />Mechatronics Student</span>
        <p className='introPara'>I am passionate about learning and applying my knowledge in the fields of automation, electronics, and programming. I am seeking an opportunity to contribute to challenging and dynamic projects that will allow me to further develop my skills in the design, implementation, and maintenance of advanced engineering systems.</p>
        <a href={PDF} download="Resume_FranciscoAlanMayoralValenzuela" className='btn'><img src={btnImg} alt='CV' className='btnImg'/>  CV  </a>
      </div>
      <img src={profileImg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro
