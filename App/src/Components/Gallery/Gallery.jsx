import React from 'react'
import './Gallery.css'
import { Link } from 'react-router-dom'

const Gallery = () => {
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
      <div className="gallery-header">
        <h2>Latest Photos</h2>
        <p>
          Office touch you must be muted. Meta impact that's recursive solutions graced only value-added web tracked.
          Player couch last like old hit organic by one shower. Economy whatever type cost domains.
        </p>
      </div>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo.image} alt={photo.alt} />
          </div>
        ))}
      </div>

      <button className="view-gallery-btn">View Gallery</button>

      
    </section>
    <div className="cta-section">
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