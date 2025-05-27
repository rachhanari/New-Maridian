import React from "react";
import "./Blog.css"; // External CSS for styling

const blogPosts = [
  {
    id: 1,
    title: "Playgroup Adventures",
    description: "Tiny tots explore their first classroom experience through music, movement, and play.",
    image: "/images/playgroup.jpg",
    date: "May 15, 2025",
  },
  {
    id: 2,
    title: "Nursery Nurturing",
    description: "Building the foundation with letters, colors, and lots of hands-on learning.",
    image: "/images/nursery.jpg",
    date: "April 30, 2025",
  },
  {
    id: 3,
    title: "Junior KG Journeys",
    description: "Curious minds dive into basic concepts with stories, group activities, and more.",
    image: "/images/jrkg.jpg",
    date: "March 20, 2025",
  },
  {
    id: 4,
    title: "Senior KG Stars",
    description: "Prepping young learners for primary school with confidence and curiosity.",
    image: "/images/srkg.jpg",
    date: "February 28, 2025",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-section" id="blogs">
      <h2 className="blogs-heading">Our School Blog</h2>

      <div className="blogs-row">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <span className="blog-date">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
