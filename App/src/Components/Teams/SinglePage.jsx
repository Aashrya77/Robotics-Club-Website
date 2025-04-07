import React from 'react';
import './SinglePage.css';
import { Link } from 'react-router-dom';

const stats = [
  { icon: '👥', number: '3+', label: 'Team Members' },
  { icon: '🎯', number: '1+', label: 'Active Projects' },
  { icon: '🏆', number: '4+', label: 'Competition Wins' },
  { icon: '⏳', number: '1+', label: 'Year Experience' },
];

const teamData = [
  {
    id: 1,
    title: 'Founding Team',
    image: '/images/founding-team.webp',
    members: 5,
    description: 'Since 15 March 2024'
  },
  {
    id: 2,
    title: 'Founding Team',
    image: '/images/founding-team-2.webp',
    members: 12,
    description: 'Since 15 March 2024'
  },
  {
    id: 3,
    title: 'Dream Chasers',
    image: '/images/dream-chasers.webp',
    members: 8,
    description: '17 September'
  },
  {
    id: 4,
    title: 'Mech Warrior',
    image: '/images/mech-warrior.webp',
    members: 6,
    description: 'Since 15 March 2024'
  },
];

const TeamCard = ({ title, image, members, description }) => (
  <div className="team-card">
    <div className="card-image-container">
      <img src={image} alt={title} className="team-image" />
    </div>
    <div className="card-content">
      <h3 className="team-title">{title}</h3>
      <p className="team-description">{description}</p>
      <div className="team-members">
        <span className="member-count">
          <i className="fas fa-users"></i>
          {members} members
        </span>
      </div>
      <button className="view-teams-btn">View Teams</button>
    </div>
  </div>
);

const SinglePage = () => {
  return (
    <div className="teams-single-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Our Teams</h1>
          <p>Meet the innovative minds behind our robotics projects. Together, we're pushing the boundaries of technology and engineering.</p>
        </div>
      </div>
      <div className="teams-grid">
        {teamData.map((team) => (
          <TeamCard key={team.id} {...team} />
        ))}
      </div>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 style={{ fontSize: '1.5rem' }}>{stat.icon}</h3>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="team-details-section">
        <div className="team-detail">
          <div className="detail-content">
            <h2>Dream Chasers</h2>
            <p>Dream Chasers is the group of girls who have knowledge of Coding, designing and more this groups are mainly focused on coding and designing also may have skill but most members belong machine key content writer normal poderoko lekho birupoyo lekh ola (aba..)</p>
            <div className="member-avatars">
              <img src="/images/avatar1.webp" alt="Team member" />
              <img src="/images/avatar2.webp" alt="Team member" />
              <img src="/images/avatar3.webp" alt="Team member" />
              <img src="/images/avatar4.webp" alt="Team member" />
            </div>
            <button className="join-now-btn">Join now</button>
          </div>
          <div className="detail-image">
            <img src="/images/dream-chasers-detail.webp" alt="Dream Chasers team" />
          </div>
        </div>
        <div className="team-detail reverse">
          <div className="detail-content">
            <h2>Mech Warrior</h2>
            <p>Mech Warrior is the group of girls who have knowledge of Coding, designing and more this groups are mainly focused on coding and designing also may have skill but most members belong machine key content writer normal poderoko lekho birupoyo lekh ola (aba..)</p>
            <div className="member-avatars">
              <img src="/images/avatar5.webp" alt="Team member" />
              <img src="/images/avatar6.webp" alt="Team member" />
              <img src="/images/avatar7.webp" alt="Team member" />
              <img src="/images/avatar8.webp" alt="Team member" />
            </div>
            <button className="join-now-btn">Join now</button>
          </div>
          <div className="detail-image">
            <img src="/images/mech-warrior-detail.webp" alt="Mech Warrior team" />
          </div>
        </div>
      </div>
      <div className="cta-section">
        <h2>Ready to Join our Robotics Community?</h2>
        <p>Take the first step towards innovation and join our passionate team of robotics enthusiasts.</p>
        <div className="cta-buttons">
          <Link to="/join" className="apply-btn">Apply now</Link>
          <Link to="/about" className="learn-btn">Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
