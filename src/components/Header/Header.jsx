// src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { heroData } from '../../data/portfolioData';

const Header = () => {
  return (
    <>
      <nav className={styles.navbarSticky}>
        <div className={styles.logo}><Link to="/">Mazhar</Link></div>
        <ul className={styles.navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/leadership">Leadership</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <header className={styles.headerBar}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>{heroData.name}</h1>
            <h2 className={styles.heroSubtitle}>{heroData.subtitle}</h2>
            <p className={styles.heroDescription}>{heroData.description}</p>
            <Link to="/contact" className={styles.ctaButton}>
              {heroData.ctaText}
            </Link>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;