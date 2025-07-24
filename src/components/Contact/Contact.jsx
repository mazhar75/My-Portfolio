import React, { useState } from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formspreeEndpoint = `https://formspree.io/f/xrbeloqo`;
    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <h2 className={styles.contactTitle}>Contact Me</h2>
        <div className={styles.divider}></div>
        <p className={styles.contactSubtitle}>Ready to connect? Reach out for collaborations or just to say hello!</p>
        <div className={styles.contactInfoBox}>
          <div className={styles.contactInfoItem}>
            <FaEnvelope className={styles.contactIcon} />
            <span className={styles.emailHighlight}>mazharulnihadmd@gmail.com</span>
          </div>
          <div className={styles.socialLinksRow}>
            <a href="https://github.com/mazhar75" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaGithub className={styles.contactIcon} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/md-mazharul-islamam-7994a5212/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedin className={styles.contactIcon} /> LinkedIn
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formRow}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
