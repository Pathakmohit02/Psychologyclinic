import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <div className="underline"></div>
          <p>Let's discuss how we can help bring your vision to life</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="icon">📧</div>
              <div>
                <h3>Email</h3>
                <p>help@psychologyclinic.sg</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+65 6970 5611</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Thomson V Two, 11 Sin Ming Road, #B1-14. Singapore 575629  </p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
            ></textarea>
            <button onClick={handleSubmit}>Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
