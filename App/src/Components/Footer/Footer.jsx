import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'


const Footer = () => {
  const footerRef = useRef(null)
  const contactRef = useRef(null)
  const bottomRef = useRef(null)
  const legalRef = useRef(null)

  useGSAP(() => {
    // Contact section animation
    gsap.from(contactRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
        once: true
      }
    })

    // Bottom section animation
    gsap.from(bottomRef.current.children, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      scrollTrigger: {
        trigger: bottomRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none',
        once: true
      }
    })

    // Legal section fade in
    gsap.from(legalRef.current, {
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: legalRef.current,
        start: 'top 95%',
        toggleActions: 'play none none none',
        once: true
      }
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  })
  const email = 'techspireroboticscommunityclub@gmail.com'
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Event', path: '/events' },
    { name: 'Our Teams', path: '/teams' },
    { name: 'About us', path: '/about' },
    { name: 'Memberships', path: '/membership' }
  ]

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content">
        <div className="footer-contact" ref={contactRef}>
          <h2>Connect with us</h2>
          <div className="email-section">
            <div className="email">
              <p>Email us:</p>
            <a href={`mailto:${email}`} className="email-link">
              {email}
            </a>
            </div>
            
            <div className="social-section">
            <p>Social Follow:</p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </div>
          
          </div>
        </div>

        <div className="footer-bottom" ref={bottomRef}>
        <button onClick={() => window.location.href = '/contact'} className="contact-btn">
              Contact
            </button>
          <div className="footer-nav">
          
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path}>{link.name}</Link>
            ))}
          </div>
          
          
        </div>

        <div className="footer-legal" ref={legalRef}>
          <p>Copyright@2023 TRCC</p>
          <div className="legal-links">
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">•</span>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer