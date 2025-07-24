import React from 'react';
import { cards } from '../../data/portfolioData';
import styles from '../Card/Card.module.css';
import { FaCode, FaJava, FaDatabase, FaCloud } from 'react-icons/fa';

const SkillsHighlightBar = () => (
  <div className={styles.skillsHighlightBar}>
    <span className={styles.skillItem}><FaCode style={{ color: '#00bcd4', marginRight: 6 }} /> <b>Golang</b></span>
    <span className={styles.skillItem}><FaJava style={{ color: '#e76f00', marginRight: 6 }} /> Java</span>
    <span className={styles.skillItem}><FaDatabase style={{ color: '#00e6ff', marginRight: 6 }} /> SQL/MongoDB</span>
    <span className={styles.skillItem}><FaCloud style={{ color: '#00bcd4', marginRight: 6 }} /> Cloud</span>
    <span className={styles.skillItem}><FaCode style={{ color: '#00bcd4', marginRight: 6 }} /> Backend</span>
  </div>
);

const CompetitiveProgrammingBar = () => {
  const cpCard = cards.find(card => card.title === 'Competitive Programming');
  if (!cpCard) return null;
  // Platform stats (hardcoded for now, can be made dynamic)
  const platforms = [
    {
      name: 'Codeforces',
      handle: 'petuk75',
      maxRating: 'Specialist (1500+)',
      problemsSolved: '1200+',
      highestRanking: 'Top 800',
      profile: 'https://codeforces.com/profile/petuk75',
    },
    {
      name: 'AtCoder',
      handle: 'petuk',
      maxRating: '928',
      problemsSolved: '400+',
      highestRanking: 'Top 1100',
      profile: 'https://atcoder.jp/users/petuk',
    },
    {
      name: 'CodeChef',
      handle: 'petuk0mazhar',
      maxRating: '4-star',
      problemsSolved: '300+',
      highestRanking: 'Top 500',
      profile: 'https://www.codechef.com/users/petuk0mazhar',
    },
    {
      name: 'LeetCode',
      handle: 'petuk',
      maxRating: 'Top 10% globally',
      problemsSolved: '180+',
      highestRanking: 'Top 10%',
      profile: 'https://leetcode.com/u/petuk/',
    },
  ];
  const participations = [
    'Multiple ICPC selection contests (2021-2023)',
    'Google Coding Competition: Top 2000 in several Kickstart rounds, advanced in Code Jam 2021-2023',
    'Meta Hacker Cup: Top 3k in 2022, Top 2.5k in 2023',
    'Finalist in SUST Intra University Programming Contest',
    'Top 40 in Cafelo IUPC SUST, 2022',
  ];
  return (
    <div>
      <SkillsHighlightBar />
      <h2 style={{
        textAlign: 'center',
        color: '#00bcd4',
        fontWeight: 700,
        fontSize: '2rem',
        margin: '2.5rem 0 1.2rem 0',
        letterSpacing: '1px',
        textShadow: '0 2px 8px rgba(0,188,212,0.10)'
      }}>
        Competitive Programming and Achievements
      </h2>
      <div className={styles.cpBarContainer}>
        {platforms.map(platform => (
          <div className={styles.cpBarCard} key={platform.name}>
            <div className={styles.cpBarCardTitle}>{platform.name}</div>
            <div className={styles.cpBarCardSection}><span className={styles.cpBarCardStat}>Handle:</span> {platform.handle}</div>
            <div className={styles.cpBarCardSection}><span className={styles.cpBarCardStat}>Max Rating:</span> {platform.maxRating}</div>
            <div className={styles.cpBarCardSection}><span className={styles.cpBarCardStat}>Problems Solved:</span> {platform.problemsSolved}</div>
            <div className={styles.cpBarCardSection}><span className={styles.cpBarCardStat}>Highest Ranking:</span> {platform.highestRanking}</div>
            <div className={styles.cpBarCardFooter}>
              <a
                href={platform.profile}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cpBarCardLink}
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
        <div className={styles.cpBarCard}>
          <div className={styles.cpBarCardTitle}>Participations</div>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            {participations.map((item, idx) => (
              <li key={idx} className={styles.cpBarCardStat}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveProgrammingBar; 