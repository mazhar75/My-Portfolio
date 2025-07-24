// About/About.jsx
import React, { useEffect, useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  const greetings = [
    "Assalamualaikum!",
    "I am a Technology Enthusiast",
    "Problem Solver",
    "RAG Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.greetingWrapper}>
        <h2 className={styles.greetingText}>{greetings[greetingIndex]}</h2>
      </div>
      <div className={styles.divider}></div>
      <h3 className={styles.nameHighlight}>Hi, I'm Mazhar</h3>
      <p className={styles.aboutText}>
        A passionate developer and lifelong learner, recently graduated with a BSc in Computer Science & Engineering from SUST. I love building impactful solutions, exploring AI and RAG systems, and sharing knowledge through projects and community work.
      </p>
    </section>
  );
};

export default About;
