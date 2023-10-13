// src/components/HomePage.js

import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Our Medical Practice</h1>
        <p>Your Health is Our Priority</p>
      </header>
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Primary Care</li>
          <li>Specialized Care</li>
          <li>Emergency Services</li>
          {/* Add more services here */}
        </ul>
      </section>
      <section className="doctors">
        <h2>Meet Our Doctors</h2>
        {/* Display doctor profiles or images here */}
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to contact us.</p>
        {/* Add contact information or a contact form */}
      </section>
    </div>
  );
}

export default HomePage;
