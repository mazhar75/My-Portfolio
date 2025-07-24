import React from 'react';
import { cards } from '../../data/portfolioData';
import styles from './LeadershipPage.module.css';

const leadershipCard = cards.find(card => card.title === 'Leadership');
const volunteering = leadershipCard?.details?.Volunteering || [];
const leadership = leadershipCard?.details?.Leadership || '';

const LeadershipPage = () => {
  return (
    <section className={styles.leadershipSection}>
      <h1 className={styles.title}>Leadership & Volunteering</h1>
      <div className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>Volunteering</h2>
        <ul className={styles.timelineList}>
          {volunteering.map((item, idx) => (
            <li key={idx} className={styles.timelineItem}>
              <span className={styles.timelineDot}></span>
              <span className={styles.timelineContent}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.timelineSection}>
        <h2 className={styles.sectionTitle}>Leadership</h2>
        <div className={styles.leadershipCard}>{leadership}</div>
      </div>
    </section>
  );
};

export default LeadershipPage; 