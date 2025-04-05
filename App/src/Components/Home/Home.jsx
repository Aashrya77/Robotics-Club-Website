import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home-hero'>
      <div className='home-overlay'></div>
      <div className='home-content'>
        <h1 className='home-title'>
          To Survive in <span className='home-highlight'>Futuristic</span> World
        </h1>
        <h2 className='home-subtitle'>Step Ahead.</h2>
        <p className='home-description'>
          Office youth you must be project Meta impact that's iterative, bringing ground only value-added work Product design-
          client tech like aid hit organic by one shower. Economy windows type consumption.
        </p>
        <div className='home-buttons'>
          <Link to='/join' className='home-btn home-btn-primary'>Join Now</Link>
          <Link to='/events' className='home-btn home-btn-secondary'>Explore Events</Link>
        </div>
      </div>
    </div>
  )
}

export default Home