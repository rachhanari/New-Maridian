import React from 'react';
import image1 from '../images/course-1.jpg';
import image2 from '../images/course-2.jpg';
import image3 from '../images/course-3.jpg';
import image4 from '../images/course-1.jpg';
import img1 from "../images/meridian-img1.png";
import img2 from "../images/meridian-img2.png";
import img3 from "../images/merdian-school-add.jpg";
import img4 from "../images/meridian-img2.png";
import img5 from "../images/meridian-img2.png";
import './Courses.css';

const Courses = () => {
  const galleryImages = [img1, img2, img3, img4, img5, img1];

  return (
    <div className="container courses" id="courses">
      <div className="gallery-wrapper">
        <h2 className="gallery-title">Our School Gallery</h2>
        <div className="gallery-grid-enhanced">
          {galleryImages.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
              <div className="gallery-overlay">
                <p>Gallery {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
