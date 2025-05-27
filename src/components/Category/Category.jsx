import React from 'react';
import card_icon1 from '../images/category-1.svg';
import card_icon2 from '../images/category-2.svg';
import card_icon3 from '../images/category-3.svg';
import card_icon4 from '../images/category-4.svg';
import './Category.css';

const Category = () => {
  return (
    <div className="category-container">
      <div className="category-header">
        <h5>Categories</h5>
        <h2>
          Best Education <span>For Your</span> Child
        </h2>
      </div>

      <div className="category-cards">
        {[
          {
            icon: card_icon1,
            title: 'Play Group',
            description:
              'A warm and nurturing space where toddlers explore through play, music, and movement. We focus on social, emotional, and sensory development in a joyful environment.',
            bgClass: 'card1',
            iconClass: 'icon1',
          },
          {
            icon: card_icon2,
            title: 'Nursery',
            description:
              'Helping young minds bloom through sensory play, colors, stories, and hands-on activities. A joyful start to structured learning in a loving space.',
            bgClass: 'card2',
            iconClass: 'icon2',
          },
          {
            icon: card_icon3,
            title: 'Jr KG',
            description:
              'A playful and engaging start to early learning. Children build language, motor skills, and confidence through stories, games, and hands-on activities.',
            bgClass: 'card3',
            iconClass: 'icon3',
          },
          {
            icon: card_icon4,
            title: 'Sr KG',
            description:
              'Preparing young learners for formal schooling with a balanced focus on academics, creativity, and independence. Building strong foundations in reading, writing, and math.',
            bgClass: 'card4',
            iconClass: 'icon4',
          },
        ].map((card, idx) => (
          <div className={`category-card ${card.bgClass}`} key={idx}>
            <div className={`icon ${card.iconClass}`}>
              <img src={card.icon} alt={card.title} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
