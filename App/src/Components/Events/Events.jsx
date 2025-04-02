import React from 'react'
import './Events.css'
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa'

const Events = () => {
  const events = [
    {
      title: 'AI & Robotics Workshop',
      image: '/events/event1.jpg',
      date: 'April 15, 2025',
      time: '10:00 AM',
      location: 'Techspire College',
    },
    {
      title: 'AI & Robotics Workshop',
      image: '/events/event2.jpg',
      date: 'April 15, 2025',
      time: '10:00 AM',
      location: 'Techspire College',
    },
    {
      title: 'AI & Robotics Workshop',
      image: '/events/event3.jpg',
      date: 'April 15, 2025',
      time: '10:00 AM',
      location: 'Techspire College',
    },
    {
      title: 'AI & Robotics Workshop',
      image: '/events/event4.jpg',
      date: 'April 15, 2025',
      time: '10:00 AM',
      location: 'Techspire College',
    }
  ]

  return (
    <section className="events-section">
      <div className="events-header">
        <h2>Events</h2>
        <p>
          Office touch you must be muted. Meta impact that's recursive solutions graced only value-added web tracked.
          Player couch last like old hit organic by one shower. Economy whatever type cost domains.
        </p>
      </div>

      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>
            <div className="event-info">
              <h3>{event.title}</h3>
              <div className="event-details">
                <div className="detail">
                  <FaCalendar className="icon" />
                  <span>{event.date}</span>
                </div>
                <div className="detail">
                  <FaClock className="icon" />
                  <span>{event.time}</span>
                </div>
                <div className="detail">
                  <FaMapMarkerAlt className="icon" />
                  <span>{event.location}</span>
                </div>
              </div>
              <button className="register-btn">Register Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Events