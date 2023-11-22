import React from 'react';
import './skills.css';
import Skill1 from '../../assets/skill1.svg';
import Skill2 from '../../assets/problesolving.svg';
import Skill3 from '../../assets/skill3.png'

const Skills = () => {
  return (
    <section id="skills">
      <h2 className='skillTitle'>What I am good at</h2>
      <div className='skillBars'>
      <div className='skillBar'>
        <img src={Skill1} alt='Skill1' className='skillBarImg' />
        <div className='skillBarText'>
            <h3>Leadership</h3>
            <p>Fostering teamworK and effective communication</p>
        </div>
      </div>
      <div className='skillBar'>
        <img src={Skill2} alt='Skill2' className='skillBarImg' />
        <div className='skillBarText'>
            <h3>Problem Solving</h3>
            <p>Using critical thinking</p>
        </div>
      </div>
      <div className='skillBar'>
        <img src={Skill3} alt='Skill3' className='skillBarImg' />
        <div className='skillBarText'>
            <h3>Handling Pressure</h3>
            <p>Making well-informed decisions, adaptability to navigate and overcome high-stress scenarios</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Skills
