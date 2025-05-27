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
      <div className="head1">
        <h5>Foundations for Lifelong Learning</h5>
      </div>
      <div className="head2">
        <h2>Select the Right Stage for Your Child's Growth</h2>
      </div>

      <div className="cards">
        {[{
          img: image1, label: "PLAYGROUP",
          text: "A safe and loving environment where toddlers begin their learning journey with songs, stories, and sensory play."
        }, {
          img: image4, label: "NURSERY",
          text: "Building early skills with colors, patterns, and letters—fostering curiosity and social skills in a nurturing space."
        }, {
          img: image2, label: "JRKG",
          text: "Engaging activities that promote language, motor skills, and creativity—laying the groundwork for lifelong learning."
        }, {
          img: image3, label: "SRKG",
          text: "Balanced learning in reading, writing, and numeracy with a focus on independence and classroom readiness."
        }].map(({ img, label, text }, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={img} alt={label} />
              <div className="duration">{label}</div>
            </div>
            <div className="para">
              <h3>{text}</h3>
            </div>
            <div className="rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p>(5.0/7 Rating)</p>
            </div>
            <div className="footerCrad">
              <i className="fa-solid fa-book"></i>
              <p>lessons</p> |
            </div>
          </div>
        ))}
      </div>

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
