import React from 'react'
import Portfolio1 from '../../assets/Bernulli.jpeg'
import Portfolio2 from '../../assets/hackaton23.jpeg'
import Portfolio3 from '../../assets/tableu.jpeg'
import Porfolio4 from '../../assets/wine.jpeg'
import "./projects.css"

const Projects = () => {
  return (
    <section id="projects">
      <h2 className='projectsTitle'>These are my projects. Feel free to click on them!</h2>
      <div className='projectsImg'>
        <figure className='cardImg'>
        <img src={Portfolio1} alt='projectimg' className='imgProject'/>
        <figcaption>
        <p>Ley de bernulli -Matlab</p>
        <br />
        <p>Simulation of the draining of a water tank, applying principles of physics.</p>
        <br/>
        <p>Dicember 2022</p>
        </figcaption>
        </figure>
        <figure className='cardImg'>
        <img src={Portfolio2} alt='projectimg' className='imgProject'/>
        <figcaption>
        <p>Exoplanet Generator AI -Javascript, OpenAI API</p>
        <br />
        <p>Web app leveraging artificial intelligence to generate an exoplanet based on user-defined parameters, raising awareness about Earth's perfection.</p>
        <br/>
        <p>October 2022</p>
        </figcaption>
        </figure>
        <figure className='cardImg'>
        <img src={Portfolio3} alt='projectimg' className='imgProject'/>
        <figcaption>
        <p>Store´s Database Analysis, KPI Identification, and Tableau Visualization</p>
        <br />
        <p>Analysis of a store's database, exploring insights to enhance store performance. Final dashboard details are confidential.</p>
        <br/>
        <p>September 2022</p>
        </figcaption>
        </figure>
        <figure className='cardImg'>
        <img src={Porfolio4} alt='projectimg' className='imgProject'/>
        <figcaption>
        <p>Wine Quality Classification: Integrating Machine Learning algorithms.</p>
        <br />
        <p>Categorization of wines based on 12 parameters to assess quality, juxtaposed with the subjective opinions of judges.</p>
        <br/>
        <p>November 2022</p>
        </figcaption>
        </figure>

      </div>
    </section>
  )
}

export default Projects
