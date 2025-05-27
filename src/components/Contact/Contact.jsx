import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60250.535974472914!2d73.1681363502847!3d19.29721164375199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be793ff76b0229d%3A0xc915e83f221ad950!2sMeridian%20School%20Kalyan!5e0!3m2!1sen!2sin!4v1746433569693!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="info-form-wrapper">
        <div className="contact-info">
          <div className="info-item">
            <i className="fa fa-map-marker"></i>
            <p>22, 2nd Avenue, Kemta Estate,<br />Idi-Aba, Abeokuta, Ogun State</p>
          </div>
          <div className="info-item">
            <i className="fa fa-phone"></i>
            <p>0815 231 4660<br />0800 000 0000</p>
          </div>
          <div className="info-item">
            <i className="fa fa-paper-plane"></i>
            <p>school-coe@edu.ng</p>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send us a message</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
