// src/components/HomePage.js
import './Fonts.css'
import './Home.css'
import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Welcome to Medtracer</h1>
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
        <h2>Contact Us:
          123-456-7890
        </h2>
        <p>If you have any questions, feel free to contact us.</p>
        {/* Add contact information or a contact form */}
      </section>
      <div class="footer-content">

<div class="logo">

</div>

<p>...</p>

<p1>....</p1>

<div class="social-links">

<i class="fa-brands fa-twitter"></i>

<i class="fa-brands fa-facebook-f"></i>

<i class="fa-brands fa-instagram"></i>

<i class="fa-brands fa-youtube"></i> <i class="fa-brands fa-pinterest-p"></i>

</div>

</div>

<div class="footer-bottom-content">

<p>Designed By DANY</p>

<div class="copyright">

<p>&copy; Copyright <strong>Medtracer</strong>.All Rights Reserved</p>


</div>

</div>

</div>
    
  );
}

export default HomePage;
