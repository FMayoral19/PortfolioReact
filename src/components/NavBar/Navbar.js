import React, { useState } from 'react'
import "./Navbar.css"
import logo from '../../assets/logo.svg'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'
import MobMenu from '../../assets/menu.svg'

const Navbar = () => {
const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-120} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-10} duration={500} className='desktopMenuListItem'>Skills</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
        <Link activeClass='active' to='cards-list' spy={true} smooth={true} offset={-200} duration={500} className='desktopMenuListItem'>Certificates</Link>

        </div>
        <button className='desktopMenuBtn' onClick={() => {
            document.getElementById('contactPage').scrollIntoView({behavior: 'smooth', });
        }}><img src={contactImg} alt='contactImg' className='desktopMenuImg' />Contact Me</button>

        <img src={MobMenu} alt='mobMenu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-120} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-40} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to='cards-list' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Certificates</Link>
                <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Projects</Link>
            </div>

    </nav>
  )
}

export default Navbar
