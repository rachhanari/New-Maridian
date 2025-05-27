import React, { useState } from 'react';
import logo from "../images/school-logo.png";
import './Header.css';
import { FaBars, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenu(false); 
    }
  };

  return (
    <>
      <div className='header'>
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>New Maridian School</span>
        </div>

        <div className={`links ${menu ? 'open' : ''}`}>
          <a onClick={() => handleLinkClick('home')}>Home</a>
          <a onClick={() => handleLinkClick('courses')}>Courses</a>
          <a onClick={() => handleLinkClick('blog')}>Blog</a>
          <a onClick={() => handleLinkClick('footer')}>Contact</a>
        </div>

        <div className="try">
          <a href="https://www.facebook.com/profile.php?id=100066911379078" target="_blank" rel="noopener noreferrer" className="social facebook"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social instagram"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social youtube"><FaYoutube /></a>
          <div className="menu" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </div>

      <a 
        href="/admission-form.pdf" 
        download 
        className="admission-banner"
        aria-label="Download Admission Form"
      >
        Admission Open 25-26 
        <FaArrowDownLong className="download-arrow" />
      </a>
    </>
  );
};

export default Header;
