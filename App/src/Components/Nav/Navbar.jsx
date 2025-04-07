import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)
  const logoRef = useRef(null)
  const linksRef = useRef([])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      gsap.to(menuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut'
      })
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.inOut'
      })
    }
  }

  useGSAP(() => {
    // Initial animation
    gsap.from(logoRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from(linksRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    })

    // Hover animations for nav items
    const mouseEnterHandlers = new Map()
    const mouseLeaveHandlers = new Map()

    linksRef.current.forEach(link => {
      if (link) {
        const mouseEnterHandler = () => {
          gsap.to(link, {
            scale: 1.1,
            duration: 0.2
          })
        }

        const mouseLeaveHandler = () => {
          gsap.to(link, {
            scale: 1,
            duration: 0.2
          })
        }

        mouseEnterHandlers.set(link, mouseEnterHandler)
        mouseLeaveHandlers.set(link, mouseLeaveHandler)

        link.addEventListener('mouseenter', mouseEnterHandler)
        link.addEventListener('mouseleave', mouseLeaveHandler)
      }
    })

    return () => {
      linksRef.current.forEach(link => {
        if (link) {
          const mouseEnterHandler = mouseEnterHandlers.get(link)
          const mouseLeaveHandler = mouseLeaveHandlers.get(link)
          
          if (mouseEnterHandler) {
            link.removeEventListener('mouseenter', mouseEnterHandler)
          }
          if (mouseLeaveHandler) {
            link.removeEventListener('mouseleave', mouseLeaveHandler)
          }
        }
      })
    }
  })

  return (
    <nav className='navbar'>
      <div className='nav-logo' ref={logoRef}>
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
        <div className="nav-right">
           <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
        <Link to='/' className='nav-item' onClick={toggleMenu} ref={el => linksRef.current[0] = el}>Home</Link>
        <Link to='/event' className='nav-item' onClick={toggleMenu} ref={el => linksRef.current[1] = el}>Event</Link>
        <Link to='/teams' className='nav-item' onClick={toggleMenu} ref={el => linksRef.current[2] = el}>Our Teams</Link>
        <Link to='/about' className='nav-item' onClick={toggleMenu} ref={el => linksRef.current[3] = el}>About us</Link>
        <Link to='/membership' className='nav-item' onClick={toggleMenu} ref={el => linksRef.current[4] = el}>Memberships</Link>
        <div className='nav-button mobile'>
          <Link to='/join' className='join-now' onClick={toggleMenu}>Join Now</Link>
        </div>
      </div>

      <div className='nav-button desktop'>
        <Link to='/join' className='join-now'>Join Now</Link>
      </div>
        </div>
     
    </nav>
  )
}

export default Navbar