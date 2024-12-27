import React from 'react';

function Contact() {
  return (
    <section style={sectionStyle}>
      <h2>Contact Me</h2>
      <p>You can reach me at:</p>
      <ul>
        <li>Email: yourname@example.com</li>
        <li>Phone: +123 456 7890</li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">Your LinkedIn</a></li>
      </ul>
    </section>
  );
}

const sectionStyle = {
  padding: '20px',
  maxWidth: '800px',
  margin: 'auto',
};

export default Contact;
