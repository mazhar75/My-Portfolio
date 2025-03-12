// About/About.jsx
import React, { useEffect, useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  const greetings = ["Assalamualaikum", "I am a", "Technology Enthusiast", " Problem Solver","NLP Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.greetingWrapper}>
        <h2 className={styles.greetingText}>{greetings[greetingIndex]}</h2>
      </div>
      <p className={`${styles.aboutText} ${styles.firstParagraph}`}>
      Hi, I'm Mazhar—a technology enthusiast and passionate problem solver with a deep interest in innovation and development. I'm currently an 8th-semester student at Shahjalal University of Science and Technology (SUST), pursuing a Bachelor's degree in Computer Science and Engineering.
      
      Throughout my academic journey, from school to university, I have gained valuable knowledge, skills, and experiences that have shaped my passion for technology. This portfolio showcases some of the highlights of my work, including projects, research, and achievements that reflect my dedication to learning and creating impactful solutions.
      <br></br><br></br>
      Currently, I am working on my thesis, which focuses on "Emotion detection from Romanized Sylheti text using BERT-based models". I look forward to graduating in June 2025, ready to take on new challenges and contribute to the tech industry.
      <br></br><br></br>
      Thank you for visiting my portfolio! Feel free to explore and connect with me for collaboration or opportunities.

      </p>
      <p className={styles.aboutText}>
      
      </p>
    </section>
  );
};

export default About;
