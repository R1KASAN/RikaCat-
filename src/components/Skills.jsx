import React from 'react';

function Skills() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

  return (
    <section style={sectionStyle}>
      <h2>My Skills</h2>
      <ul style={listStyle}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

const sectionStyle = {
  padding: '20px',
  maxWidth: '800px',
  margin: 'auto',
};

const listStyle = {
  listStyleType: 'none',
  padding: '0',
};

export default Skills;
