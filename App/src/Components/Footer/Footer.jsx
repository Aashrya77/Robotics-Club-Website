import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const email = 'Techspireroboticscommunityclb@gmail.com'
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Event', path: '/events' },
    { name: 'Our Teams', path: '/teams' },
    { name: 'About us', path: '/about' },
    { name: 'Memberships', path: '/membership' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h2>Connect with us</h2>
          <div className="email-section">
            <p>Email us:</p>
            <a href={`mailto:${email}`} className="email-link">
              {email}
            </a>
            <button onClick={() => window.location.href = '/contact'} className="contact-btn">
              Contact
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-nav">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path}>{link.name}</Link>
            ))}
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

        <div className="footer-legal">
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