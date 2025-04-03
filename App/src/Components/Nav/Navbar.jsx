import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>
          <img src='/Logo.png' alt='RC Logo' />
        </Link>
      </div>
      
      <div className='hamburger' onClick={toggleMenu}>
        {isMenuOpen ? (
          <RiCloseLine className='hamburger-icon' />
        ) : (
          <RiMenu3Line className='hamburger-icon' />
        )}
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to='/' className='nav-item' onClick={toggleMenu}>Home</Link>
        <Link to='/event' className='nav-item' onClick={toggleMenu}>Event</Link>
        <div className='nav-item dropdown'>
          <span>Our Teams</span>
        </div>
        <Link to='/about' className='nav-item' onClick={toggleMenu}>About us</Link>
        <Link to='/membership' className='nav-item' onClick={toggleMenu}>Memberships</Link>
        <div className='nav-button mobile'>
          <Link to='/join' className='join-now' onClick={toggleMenu}>Join Now</Link>
        </div>
      </div>

      <div className='nav-button desktop'>
        <Link to='/join' className='join-now'>Join Now</Link>
      </div>
    </nav>
  )
}

export default Navbar