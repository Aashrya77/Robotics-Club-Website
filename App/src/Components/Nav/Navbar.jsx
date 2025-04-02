import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>
          <img src='/logo.png' alt='RC Logo' />
        </Link>
      </div>
      <div className='nav-links'>
        <Link to='/' className='nav-item'>Home</Link>
        <Link to='/event' className='nav-item'>Event</Link>
        <div className='nav-item dropdown'>
          <span>Our Teams</span>
        </div>
        <Link to='/about' className='nav-item'>About us</Link>
        <Link to='/membership' className='nav-item'>Memberships</Link>
      </div>
      <div className='nav-button'>
        <Link to='/join' className='join-now'>Join Now</Link>
      </div>
    </nav>
  )
}

export default Navbar