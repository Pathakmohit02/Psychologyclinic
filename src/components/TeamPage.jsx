import React from 'react';
import './TeamPage.css';

const teamMembers = [
  { name: 'Alexandrea Tay', role: 'Senior Psychologist', degree:"Clinical Psychology", image: '/Alex.jpg' },
  { name: 'Amy Chan', role: 'Psychologist',degree:"Fellow of the Royal Society of Medicine, UK", image: '/amy.jpg' },
  { name: '​Aloysius Tay', role: 'Principal Psychologist',degree:"Fellow of the Royal Society of Medicine, UK", image: '/aloy.jpg' },
  { name: '​June Lim', role: 'Senior Psychologist', degree:"Registered Psychologist (SPS), 心理学家",image: '/june.jpeg' },
  { name: '​June Chan', role: 'Psychologist',degree:"Clinical Psychology", image: '/june2.jpg' },
  { name: 'Anna Lo', role: 'Psychologist',degree:"Applied Psychology", image: '/anna.jpeg' },
  { name: '​Evangelyn Neo', role: 'Psychologist',degree:"Applied Psychology", image: '/eva.jpeg' },
  { name: 'Lavinia Seah', role: 'Psychologist',degree:"​Counselling Psychology", image: '/lav.jpeg' },
  { name: 'Yew San Ho', role: 'Psychotherapist', degree:"​​Clinical Hypnotherapist",image: '/yew.jpg' },
  { name: '​Priscilla Kua', role: 'Counsellor',degree:"Clinical Hypnotherapist", image: '/pk.jpeg' },
  { name: 'Lee Kai Xuan', role: 'Associate Psychologist',degree:"​Clinical Hypnotherapist", image: '/lee.jpg' },
];

const TeamPage = () => {
  return (
    <section className="team-section">
      <h1 className="team-title">Meet Our Team</h1>
      <p className="team-description">
        Our team consists of highly skilled professionals dedicated to delivering the best results.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-degree">{member.degree}</p>
            {/* {member.degree && <p className="member-degree">{member.degree}</p>} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
