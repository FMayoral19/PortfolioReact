import React from 'react'
import './tools.css'
import Tool1 from '../../assets/js.svg'
import Tool2 from '../../assets/python_icon.svg'
import Tool3 from '../../assets/tableau-software.svg'
import Tool4 from '../../assets/office-2.svg'
import Tool5 from '../../assets/matlab.svg'

const Tools = () => {
  return (
    <section className='toolsSection'>
      <img src={Tool1} alt="Tool1" className='tool' />
      <img src={Tool2} alt="Tool1" className='tool' />
      <img src={Tool3} alt="Tool1" className='tool' />
      <img src={Tool4} alt="Tool1" className='tool' />
      <img src={Tool5} alt="Tool1" className='tool' />
    </section>
  )
}

export default Tools
