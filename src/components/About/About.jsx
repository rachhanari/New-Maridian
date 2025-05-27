import React from 'react';
import './About.css';
import playgroupImg from '../images/playgroup.jpg';
import nurseryImg from '../images/nursery.jpeg';
import jrkgImg from '../images/JRKG.jpeg';
import srkgImg from '../images/SRKG.jpg';
import trusteeImg from '../images/meridian-img1.png';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="about-title">About Our School</h2>
      <p className="about-desc">
        Welcome to <strong>New Maridian School </strong>, where young minds take their first steps into a lifetime of learning. 
        We provide a nurturing, stimulating environment designed to foster curiosity, creativity, and confidence. 
        Our curriculum is thoughtfully designed across four key stages of early education.
      </p>

      <div className="about-stages">
        <div className="stage-card">
          <img src={playgroupImg} alt="Playgroup" />
          <h3>Playgroup</h3>
          <p>A safe, loving space where toddlers explore the world through music, stories, and sensory play.</p>
        </div>
        <div className="stage-card">
          <img src={nurseryImg} alt="Nursery" />
          <h3>Nursery</h3>
          <p>Developing early skills through fun with colors, shapes, and letters in a joyful environment.</p>
        </div>
        <div className="stage-card">
          <img src={jrkgImg} alt="JRKG" />
          <h3>Junior KG</h3>
          <p>Building foundational skills in language, motor ability, and creativity through engaging activities.</p>
        </div>
        <div className="stage-card">
          <img src={srkgImg} alt="SRKG" />
          <h3>Senior KG</h3>
          <p>Preparing children for formal education through balanced academics and confidence-building tasks.</p>
        </div>
      </div>

      <div className="trustee-section">
        <h2>From the Trustee’s Desk</h2>
        <div className="trustee-content">
          <img src={trusteeImg} alt="Trustee" className="trustee-img" />
          <div className="trustee-text">
            <p>
              As the trustee of <strong>New Maridian School & Pragati Classes</strong>, I envision a place where every child is given the freedom to grow, explore, and shine. 
              Our school is built on the foundation of care, integrity, and excellence in education. 
              We aim to empower students not only academically, but also socially and emotionally — preparing them to thrive in every stage of life.
            </p>
            <p>
              Thank you for trusting us with your child’s education. We are honored to walk alongside them on their journey of discovery and development.
            </p>
            <p className="trustee-sign">— Shekhar sir, Founder & Trustee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
