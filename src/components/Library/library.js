import React from 'react'
import '../Tools/tools.css'
import Tool1 from '../../assets/react-2.svg'
import Tool2 from '../../assets/pandas-icon.png'
import Tool3 from '../../assets/seaborn.png'

const Librarys = () => {
  return (
    <section className='toolsSection'>
      <img src={Tool1} alt="Tool1" className='library' />
      <img src={Tool2} alt="Tool1" className='library' />
      <img src={Tool3} alt="Tool1" className='library' />
    </section>
  )
}

export default Librarys
