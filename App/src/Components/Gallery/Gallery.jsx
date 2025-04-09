import React, { useRef } from 'react'
import './Gallery.css'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
  const headerRef = useRef(null)
  const photoGridRef = useRef(null)
  const ctaRef = useRef(null)

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    })

    // Photo grid animation with masonry effect
    const photos = gsap.utils.toArray('.photo-card')
    photos.forEach((photo, i) => {
      gsap.from(photo, {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: photoGridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      })
    })

    // View Gallery button animation
    gsap.from('.view-gallery-btn', {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: photoGridRef.current,
        start: 'center center',
        toggleActions: 'play none none none',
        once: true
      }
    })

    // CTA section animation
    const ctaElements = ctaRef.current.children
    gsap.from(ctaElements, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true
      }
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  })
  const photos = [
    {
      image: '/gallery/photo1.jpg',
      alt: 'Space Robotics'
    },
    {
      image: '/gallery/photo2.jpg',
      alt: 'VR Experience'
    },
    {
      image: '/gallery/photo3.jpg',
      alt: 'Code Development'
    }
  ]

  return (
    <>
    <section className="gallery-section">
      <div className="gallery-header" ref={headerRef}>
        <h2>Latest Photos</h2>
        <p>
          Office touch you must be muted. Meta impact that's recursive solutions graced only value-added web tracked.
          Player couch last like old hit organic by one shower. Economy whatever type cost domains.
        </p>
      </div>

      <div className="photo-grid" ref={photoGridRef}>
        {photos.map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo.image} alt={photo.alt} />
          </div>
        ))}
      </div>

      <button className="view-gallery-btn">View Gallery</button>

      
    </section>
    <div className="cta-section" ref={ctaRef}>
        <h2>Ready to Join our Robotics Community?</h2>
        <p>Take the first step towards innovation and join our passionate team of robotics enthusiasts.</p>
        <div className="cta-buttons">
          <Link to="/join" className="apply-btn">Apply now</Link>
          <Link to="/about" className="learn-btn">Learn more</Link>
        </div>
      </div>
    </>
    
  )
}

export default Gallery