import React from 'react'
import './Services.css'
import { FaPencilRuler, FaShieldAlt } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaPencilRuler className="service-icon" />,
      title: 'UX/UI Design',
      description: 'We customize Office productivity suites, data management software, media players, and more.'
    },
    {
      icon: <FaShieldAlt className="service-icon" />,
      title: 'Cyber Security',
      description: 'processes, and controls to protect systems, networks, programs, devices and data from cyber attacks.'
    },
    {
      icon: <FaShieldAlt className="service-icon" />,
      title: 'Cyber Security',
      description: 'processes, and controls to protect systems, networks, programs, devices and data from cyber attacks.'
    },
    {
      icon: <FaShieldAlt className="service-icon" />,
      title: 'Cyber Security',
      description: 'processes, and controls to protect systems, networks, programs, devices and data from cyber attacks.'
    }
  ]

  const companies = [
    '/esewaLogo.png',
    '/codeHimalayaLogo.png',
    '/esewaLogo.png',
    '/codeHimalayaLogo.png',
    '/esewaLogo.png',
    '/codeHimalayaLogo.png'
  ]

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Services</h2>
        <p>
          Office touch you must be muted. Meta impact that's recursive solutions graced only value-added web tracked.
          Player couch last like old hit organic by one shower. Economy whatever type cost domains.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="companies-section">
        <h3>COMPANY I WORKED WITH</h3>
        <div className="companies-grid">
          {companies.map((logo, index) => (
            <img key={index} src={logo} alt={`Company ${index + 1}`} className="company-logo" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services