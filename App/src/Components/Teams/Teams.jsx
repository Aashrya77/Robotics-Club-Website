import React from 'react'
import './Teams.css'
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Teams = () => {
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
    { number: '3+', label: 'Team Members' },
    { number: '1+', label: 'Active Projects' },
    { number: '4+', label: 'Competition Win' },
    { number: '1+', label: 'Year Experience' }
  ]

  return (
    <section className="teams-section">
      <div className="teams-header">
        <h2>Teams</h2>
        <p>
          Office touch you must be muted. Meta impact that's recursive solutions graced only value-added web tracked.
          Player couch last like old hit organic by one shower. Economy whatever type cost domains.
        </p>
      </div>

      <div className="team-grid">
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

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Teams