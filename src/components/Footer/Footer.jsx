import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: School Info */}
        <div className="footer-column">
          <h3>NEW MARIDIAN SCHOOL</h3>
          <p>Empowering young minds through quality education and a nurturing environment.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>📍 123 Learning Lane, Education City</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 info@newmaridian.edu</p>
        </div>

        {/* Column 4: Social Links */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NEW MARIDIAN SCHOOL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
