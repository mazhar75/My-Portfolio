import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';
import CardDetails from '../CardDetails/CardDetails';

const Card = ({ title, icon, summary, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPlatforms, setShowPlatforms] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (title === "Projects") {
      navigate('/projects', { state: { projects: details } });
    } else if (title === "Education") {
      navigate('/education');
    } else if (title === "Competitive Programming") {
      setShowPlatforms(true);
    } else {
      setIsOpen(true);
    }
  };

  // Custom modal for Competitive Programming
  const renderCompetitiveProgrammingModal = () => (
    <div className={styles.cpModalOverlay}>
      <div className={styles.cpModal}>
        <button className={styles.closePlatformButton} onClick={() => setShowPlatforms(false)}>
          ✕
        </button>
        <h2 className={styles.cpTitle}>Competitive Programming</h2>
        <div className={styles.cpSection}>
          <h3>Platform Stats</h3>
          <div className={styles.cpPlatformGrid}>
            {Object.keys(details).map((key) => {
              const platform = details[key];
              if (key === "Other Platforms") {
                return (
                  <div key={key} className={styles.cpPlatformCard}>
                    <h4>{key}</h4>
                    <span className={styles.cpBadge}>Total Problems Solved: {platform.problemsSolved}</span>
                  </div>
                );
              }
              return (
                <div key={key} className={styles.cpPlatformCard}>
                  <h4>{key}</h4>
                  <span className={styles.cpBadge}>Handle: {platform.handle}</span>
                  <span className={styles.cpBadge}>Max Rating: {platform.maxRating}</span>
                  <span className={styles.cpBadge}>Problems Solved: {platform.problemsSolved}</span>
                  <span className={styles.cpBadge}>Highest Ranking: {platform.highestRanking}</span>
                  <a href={platform.profileLink} target="_blank" rel="noopener noreferrer" className={styles.profileLink}>
                    View Profile
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.cpSection}>
          <h3>Special Mentions</h3>
          <ul className={styles.cpList}>
            <li>Top 800 in Codeforces</li>
            <li>Top 1100 in AtCoder</li>
            <li>Top 500 in CodeChef</li>
            <li>Top 12% in LeetCode</li>
          </ul>
        </div>
        <div className={styles.cpSection}>
          <h3>Participations</h3>
          <ul className={styles.cpList}>
            <li>Multiple ICPC selection contests (2021-2023)</li>
            <li>Google Coding Competition: Top 2000 in several Kickstart rounds, advanced in Code Jam 2021-2023</li>
            <li>Meta Hacker Cup: Top 3k in 2022, Top 2.5k in 2023</li>
            <li>Finalist in SUST Intra University Programming Contest</li>
            <li>Top 40 in Cafelo IUPC SUST, 2022</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.card} onClick={handleCardClick} tabIndex={0} role="button" aria-label={`Go to ${title}`}> 
        <div className={styles.cardHeader}>
          <span className={styles.icon}>{icon}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.cardDetailsSection}>
          <span className={styles.badge}>{title}</span>
        </div>
      </div>

      {isOpen && title !== "Competitive Programming" && (
        <CardDetails
          title={title}
          details={details}
          onClose={() => setIsOpen(false)}
        />
      )}

      {showPlatforms && title === "Competitive Programming" && renderCompetitiveProgrammingModal()}
    </>
  );
};

export default Card;
