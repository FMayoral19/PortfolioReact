import React from 'react';
import './intro.css';
import profileImg from '../../assets/me-img.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello, </span>
        <span className='introText'>Im <span className='introName'>Francisco Mayoral</span><br />Mecathronic Student</span>
        <p className='introPara'>I am an engineering student passionate about learning and applying my knowledge in the fields of automation, electronics, and programming. I am seeking an opportunity to contribute to challenging and dynamic projects that will allow me to further develop my skills in the design, implementation, and maintenance of advanced engineering systems.</p>
        <Link><button className='btn'><img src={btnImg} alt='CV' className='btnImg'/>  CV  </button></Link>
      </div>
      <img src={profileImg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro
