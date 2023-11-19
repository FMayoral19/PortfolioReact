import React from 'react'
import Portfolio1 from '../../assets/proyect1.jpeg'
import "./projects.css"

const Projects = () => {
  return (
    <section id="projects">
      <h2 className='projectsTitle'>My Projects</h2>
      <span className='projectsDes'>These are my projects. Feel free to click on them!</span>
      <div className='projectsImg'>
        <img src={Portfolio1} alt='projectimg' className='projectImg'/>
        <img src={Portfolio1} alt='projectimg' className='projectImg'/>
        <img src={Portfolio1} alt='projectimg' className='projectImg'/>
        <img src={Portfolio1} alt='projectimg' className='projectImg'/>
        <img src={Portfolio1} alt='projectimg' className='projectImg'/>
        <img src={Portfolio1} alt='projectimg' className='projectImg'/>
      </div>
    </section>
  )
}

export default Projects
