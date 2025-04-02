import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <h1 className='hero-title'>
          To Survive in <span className='highlight'>Futuristic</span> World
        </h1>
        <h1 className='hero-subtitle'>Step Ahead.</h1>
        <p className='hero-description'>
          Time equips you to get started. Meta impact that's iterative, bringing ground only idea, object tech. Harvest. Figma
          focus size big aid hit organic by one shower. Economy windows type consumption.
        </p>
        <div className='hero-buttons'>
          <Link to='/join' className='join-btn'>Join Now</Link>
          <Link to='/events' className='explore-btn'>Explore Events</Link>
        </div>
      </div>
    </div>
  )
}

export default Home