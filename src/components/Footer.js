import React from 'react'
import { Link } from 'react-scroll'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        {/* <a href='/'>Home</a> */}
                        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#about'>About</a> */}
                        <Link to="about" spy={true} smooth={true} offset={-90} duration={500}>About</Link>
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#testimonials'>Testimonials</a> */}
                        <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500}>Testimonials</Link>
                    </li>
                    <li className='nav-item'>
                        {/* <a href='#demo'>Demo</a> */}
                        <Link to="demo" spy={true} smooth={true} offset={-150} duration={500}>Demo</Link>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2020 Execute, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
  )
}

export default Footer