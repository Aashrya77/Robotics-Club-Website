import React, { useRef } from 'react'
import './Services.css'
import { FaPencilRuler, FaShieldAlt } from 'react-icons/fa'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const headerRef = useRef(null)
  const servicesGridRef = useRef(null)
  const companiesRef = useRef(null)

  useGSAP(() => {
    // Header animation
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    })

    headerTl
      .from(headerRef.current.querySelector('h2'), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
      .from(headerRef.current.querySelector('p'), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')

    // Service cards animation
    const cardsTl = gsap.timeline({
      scrollTrigger: {
        trigger: servicesGridRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
        once: true
      }
    })

    cardsTl.from('.service-card', {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: {
        amount: 0.6,
        grid: 'auto'
      },
      ease: 'power2.out'
    })

    // Company logos animation - simpler animation
    gsap.set('.company-logo', { opacity: 0, y: 20 }) // Set initial state

    gsap.to('.company-logo', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: companiesRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  })

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
    '/codeHimalayaLogo.png',
    '/esewaLogo.png',
    '/codeHimalayaLogo.png',
    '/esewaLogo.png',
    '/codeHimalayaLogo.png',
    '/esewaLogo.png'
  ]

  return (
    <>
    <section className="services-section">
      <div className="services-header" ref={headerRef}>
        <h2>Services</h2>
        <p>
          Office touch you must be muted. Meta impact that's recursive solutions graced only value-added web tracked.
          Player couch last like old hit organic by one shower. Economy whatever type cost domains.
        </p>
      </div>

      <div className="services-grid" ref={servicesGridRef}>
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

      
    </section>
    <div className="companies-section" ref={companiesRef}>
        <h3>COMPANY I WORKED WITH</h3>
        <div className="companies-grid">
          {companies.map((logo, index) => (
            <img key={index} src={logo} alt={`Company ${index + 1}`} className="company-logo" />
          ))}
        </div>
      </div>
    </>
  )
}

export default Services