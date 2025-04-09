import React, { useRef } from 'react'
import './Events.css'
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Events = () => {
  const headerRef = useRef(null)
  const eventsGridRef = useRef(null)

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

    // Event cards animation
    const cards = gsap.utils.toArray('.event-card')
    cards.forEach((card, i) => {
      gsap.from(card, {
        x: i % 2 === 0 ? -50 : 50,
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      })

      // Animate event details
      gsap.from(card.querySelectorAll('.detail'), {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      })

      // Button animation
      gsap.from(card.querySelector('.register-btn'), {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
          once: true
        }
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  })
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
      <div className="events-header" ref={headerRef}>
        <h2>Events</h2>
        <p>
          Office touch you must be muted. Meta impact that's recursive solutions graced only value-added web tracked.
          Player couch last like old hit organic by one shower. Economy whatever type cost domains.
        </p>
      </div>

      <div className="events-grid" ref={eventsGridRef}>
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