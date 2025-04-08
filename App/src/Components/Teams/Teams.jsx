import React, { useRef } from 'react'
import './Teams.css'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Teams = () => {
  const headerRef = useRef(null)
  const teamGridRef = useRef(null)
  const statsRef = useRef(null)

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

    // Team cards animation
    gsap.from('.team-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: {
        amount: 0.8,
        grid: 'auto'
      },
      scrollTrigger: {
        trigger: teamGridRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none',
        once: true
      }
    })

    // Stats animation
    const statsItems = statsRef.current.children
    gsap.from(statsItems, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      scrollTrigger: {
        trigger: statsRef.current,
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
  const teamMembers = [
    {
      name: 'Prabin Basnet',
      role: 'UI/UX Designer',
      image: '/team/member1.jpg',
      bio: 'Lorem ipsum dolor sit amet. Consectetur dolor chain tufte. RespDay',
      social: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Prabin Basnet',
      role: 'UI/UX Designer',
      image: '/team/member2.jpg',
      bio: 'Lorem ipsum dolor sit amet. Consectetur dolor chain tufte. RespDay',
      social: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Prabin Basnet',
      role: 'UI/UX Designer',
      image: '/team/member3.jpg',
      bio: 'Lorem ipsum dolor sit amet. Consectetur dolor chain tufte. RespDay',
      social: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Prabin Basnet',
      role: 'UI/UX Designer',
      image: '/team/member4.jpg',
      bio: 'Lorem ipsum dolor sit amet. Consectetur dolor chain tufte. RespDay',
      social: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
        twitter: '#'
      }
    }
  ]

  const stats = [
    { icon: '👥', number: '3+', label: 'Team Members' },
    { icon: '🎯', number: '1+', label: 'Active Projects' },
    { icon: '🏆', number: '4+', label: 'Competition Wins' },
    { icon: '⏳', number: '1+', label: 'Year Experience' },
  ];

  return (
    <>
    
   
    <section className="teams-section">
      <div className="teams-header" ref={headerRef}>
        <h2>Teams</h2>
        <p>
          Office touch you must be muted. Meta impact that's recursive solutions graced only value-added web tracked.
          Player couch last like old hit organic by one shower. Economy whatever type cost domains.
        </p>
      </div>

      <div className="team-grid" ref={teamGridRef}>
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-member-image" />
            <div className="team-member-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
              <div className="social-links">
                <a href={member.social.instagram}><FaInstagram /></a>
                <a href={member.social.facebook}><FaFacebook /></a>
                <a href={member.social.linkedin}><FaLinkedin /></a>
                <a href={member.social.twitter}><FaTwitter /></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="view-all-btn">View all Members</button>

      
    </section>
    <div className="stats-grid" ref={statsRef}>
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 style={{ fontSize: '1.5rem' }}>{stat.icon}</h3>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Teams