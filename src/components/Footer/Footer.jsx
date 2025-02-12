// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; 2025 Md. Mazharul Islam. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/mazhar75" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/md-mazharul-islamam-7994a5212/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:mazharulnihadmd@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;