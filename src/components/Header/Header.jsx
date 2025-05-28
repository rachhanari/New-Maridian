import React, { useState } from 'react';
import logo from "../images/school-logo.png";
import './Header.css';
import { FaBars, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // close menu on mobile
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>New Meridian School</span>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a onClick={() => handleLinkClick('home')}>Home</a>
          <a onClick={() => handleLinkClick('about')}>AboutUs</a>
          <a onClick={() => handleLinkClick('courses')}>Gallery</a>
          <a onClick={() => handleLinkClick('blog')}>Blog</a>
          <a onClick={() => handleLinkClick('footer')}>Contact</a>
        </nav>

        <div className="right-section">
          <a href="https://www.facebook.com/profile.php?id=100066911379078" target="_blank" rel="noreferrer" className="social facebook"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social instagram"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social youtube"><FaYoutube /></a>

          <div className="menu-icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </header>

      <a
        href="/admission-form.pdf"
        download
        className="admission-banner"
        aria-label="Download Admission Form"
      >
        Admission Open 25–26
        <FaArrowDownLong className="download-arrow" />
      </a>
    </>
  );
};

export default Header;
