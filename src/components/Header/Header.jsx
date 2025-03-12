// src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Md. Mazharul Islam</h1>
        <p>Problem Solver | Technology Enthusiast | NLP Enthusiast</p>
      </div>
    </header>
  );
};

export default Header;