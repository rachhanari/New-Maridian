import React, { useState } from 'react';
import logo from "../images/school-logo.png";
import './Header.css';
import { FaBars, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="New Maridian School" />
          <span>New Maridian School</span>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a onClick={() => handleScroll('home')}>Home</a>
          <a onClick={() => handleScroll('courses')}>Courses</a>
          <a onClick={() => handleScroll('blog')}>Blog</a>
          <a onClick={() => handleScroll('footer')}>Contact</a>
        </nav>

        <div className="right-section">
          <div className="socials">
            <a href="https://www.facebook.com/profile.php?id=100066911379078" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </header>

      <a href="/admission-form.pdf" download className="admission-banner">
        Admission Open 25–26 <FaArrowDownLong className="download-arrow" />
      </a>
    </>
  );
};

export default Header;
