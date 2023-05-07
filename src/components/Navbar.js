import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {

    // setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // change nav color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor)

    // close menu on click 
    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <nav className='navbar'> 
                    
                <Link href='/' className='logo' to="hero" spy={true} smooth={true} offset={-100} duration={500}>
                    <img src={logo} alt='logo' />
                </Link>
               
                <div className='hamburger' onClick={handleClick}>
                    {
                        click ? <FaTimes size={30} style={{color: '#fff'}}/> : <FaBars size={30} style={{color: '#fff'}} />
                    }
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        {/* <a href='/' onClick={closeMenu}>Home</a> */}
                        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#about' onClick={closeMenu}>About</a> */}
                        <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>About</Link>
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#testimonials' onClick={closeMenu}>Testimonials</a> */}
                        <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500}>Testimonials</Link>
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#demo' onClick={closeMenu}>Demo</a> */}
                        <Link to="demo" spy={true} smooth={true} offset={-150} duration={500}>Demo</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar