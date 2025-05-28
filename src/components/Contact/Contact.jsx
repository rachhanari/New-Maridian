import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-wrapper">
        {/* Map Section */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.891438521925!2d73.05470297498292!3d19.287086681961426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd3fbde18e4f%3A0xb3908d42551e4e44!2sPragati%20Classes!5e0!3m2!1sen!2sin!4v1748443047957!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Info & Form */}
        <div className="contact-content">
          <h2>CONTACT US</h2>
          <p>We're open for any suggestion or just to have a chat</p>

          <div className="contact-info">
            <div className="info-item">
              <span>📍 <strong>ADDRESS:</strong></span>
              <p>New Meridian School & Pragati classes<br />
              Vemul Building, opp, Balaji Mandir Rd, Dhamankar Naka, Padma Nagar, Bhiwandi, Maharashtra 421302</p>
            </div>
            <div className="info-item">
              <span>📧 <strong>EMAIL:</strong></span>
              <p>info@newmeridianschool.org</p>
            </div>
            <div className="info-item">
              <span>📞 <strong>PHONE:</strong></span>
              <p>+91 7499803369</p>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Create a message here..." required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
