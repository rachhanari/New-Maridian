import React from 'react';
import card_icon1 from '../images/category-1.svg';
import card_icon2 from '../images/category-2.svg';
import card_icon3 from '../images/category-3.svg';
import card_icon4 from '../images/category-4.svg';
import './Category.css';

const Category = () => {
    return (
        <div className="container category">
            <div className="head1">
                <h5>Categories</h5>
            </div>
            <div className="head2">
                <h2>Best Education <span>For Your</span> Child</h2>
            </div>
            <div className="cards">
                <div className="card card1">
                    <div className="icon icon1">
                        <img src={card_icon1} alt="Play Group" />
                    </div>
                    <h3>Play Group</h3>
                    <p>A warm and nurturing space where toddlers explore through play, music, and movement. We focus on social, emotional, and sensory development in a joyful environment.</p>
                </div>

                <div className="card card2">
                    <div className="icon icon2">
                        <img src={card_icon2} alt="Nursery" />
                    </div>
                    <h3>Nursery</h3>
                    <p>Helping young minds bloom through sensory play, colors, stories, and hands-on activities. A joyful start to structured learning in a loving space.</p>
                </div>

                <div className="card card3">
                    <div className="icon icon3">
                        <img src={card_icon3} alt="Jr KG" />
                    </div>
                    <h3>Jr KG</h3>
                    <p>A playful and engaging start to early learning. Children build language, motor skills, and confidence through stories, games, and hands-on activities.</p>
                </div>

                <div className="card card4">
                    <div className="icon icon4">
                        <img src={card_icon4} alt="Sr KG" />
                    </div>
                    <h3>Sr KG</h3>
                    <p>Preparing young learners for formal schooling with a balanced focus on academics, creativity, and independence. Building strong foundations in reading, writing, and math.</p>
                </div>
            </div>
        </div>
    );
};

export default Category;
