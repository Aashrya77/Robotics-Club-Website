import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './Home.css'

const Home = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonsRef = useRef(null)
  const overlayRef = useRef(null)

  useGSAP(() => {
    // Timeline for coordinated animations
    const tl = gsap.timeline()

    // Overlay animation
    tl.from(overlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut'
    })

    // Title animation with words
    tl.from('.home-title .animated-word', {
      opacity: 0,
      y: 50,
      rotateX: -45,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.5')

    // Subtitle animation
    tl.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.3')

    // Description fade in
    tl.from(descriptionRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.2')

    // Buttons animation
    tl.from('.home-btn', {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.6,
      ease: 'power2.out',
      clearProps: 'all'
    }, '-=0.4')
  })

  return (
    <div className='home-hero'>
      <div className='home-overlay' ref={overlayRef}></div>
      <div className='home-content'>
        <h1 className='home-title' ref={titleRef}>
          <span className='animated-word'>To</span>{' '}
          <span className='animated-word'>Survive</span>{' '}
          <span className='animated-word'>in</span>{' '}
          <span className='animated-word home-highlight'>Futuristic</span>{' '}
          <span className='animated-word'>World</span>
        </h1>
        <h2 className='home-subtitle' ref={subtitleRef}>Step Ahead.</h2>
        <p className='home-description' ref={descriptionRef}>
          Office youth you must be project Meta impact that's iterative, bringing ground only value-added work Product design-
          client tech like aid hit organic by one shower. Economy windows type consumption.
        </p>
        <div className='home-buttons'>
          <Link to='/join' className='home-btn home-btn-primary' style={{ opacity: 1 }}>Join Now</Link>
          <Link to='/events' className='home-btn home-btn-secondary' style={{ opacity: 1 }}>Explore Events</Link>
        </div>
      </div>
    </div>
  )
}

export default Home