// src/components/CardDetails/CardDetails.jsx
import React from 'react';
import styles from './CardDetails.module.css';

const CardDetails = ({ title, details, onClose }) => {
  // Research Interests custom layout
  if (title === 'Research Interests' && details) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>✕</button>
          <h2 className={styles.leadershipTitle}>Research Interests</h2>
          <div className={styles.detailItem}>
            <h3>Interests</h3>
            <ul>
              {details.Interests && details.Interests.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.detailItem}>
            <h3>Publications</h3>
            <ul>
              {details.Publications && details.Publications.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.detailItem}>
            <h3>Thesis</h3>
            <ul>
              {details.Thesis && details.Thesis.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Competitive Programming custom layout
  if (title === 'Competitive Programming' && details) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>✕</button>
          <h2 className={styles.leadershipTitle}>Competitive Programming</h2>
          <div className={styles.detailItem}>
            <h3>Platforms</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {Object.keys(details).map((key) => {
                const platform = details[key];
                if (key === 'Other Platforms') {
                  return (
                    <div key={key} className={styles.leadershipCard}>
                      <strong>{key}</strong><br />
                      Problems Solved: {platform.problemsSolved}
                    </div>
                  );
                }
                return (
                  <div key={key} className={styles.leadershipCard}>
                    <strong>{key}</strong><br />
                    Handle: {platform.handle}<br />
                    Max Rating: {platform.maxRating}<br />
                    Problems Solved: {platform.problemsSolved}<br />
                    Highest Ranking: {platform.highestRanking}<br />
                    <a href={platform.profileLink} target="_blank" rel="noopener noreferrer" style={{ color: '#23243a', textDecoration: 'underline' }}>Profile</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Achievements custom layout
  if (title === 'Achievements' && details) {
    const achievementIcons = {
      IUPC: '🥇',
      'SUST Intra University Programming Contest': '🎯',
      'Google Coding Competition': '🌐',
      'Meta Hacker Cup': '🏅',
      ICPC: '🏆',
    };
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>✕</button>
          <h2 className={styles.leadershipTitle}>Achievements</h2>
          <div className={styles.detailItem}>
            <ul style={{ paddingLeft: 0 }}>
              {Object.entries(details).map(([key, value], idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', fontSize: '1.08rem' }}>
                  <span style={{ fontSize: '1.5rem', marginRight: '0.7rem' }}>{achievementIcons[key] || '🏅'}</span>
                  <span><strong>{key}:</strong> {value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Leadership custom layout
  if (title === 'Leadership' && details) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>✕</button>
          <h2 className={styles.leadershipTitle}>Leadership</h2>
          <div className={styles.timelineSection}>
            <h3>Volunteering</h3>
            <ul className={styles.timelineList}>
              {details.Volunteering && details.Volunteering.map((item, idx) => (
                <li key={idx} className={styles.timelineItem}>
                  <span className={styles.timelineDot}></span>
                  <span className={styles.timelineContent}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.timelineSection}>
            <h3>Leadership</h3>
            <div className={styles.leadershipCard}>{details.Leadership}</div>
          </div>
        </div>
      </div>
    );
  }

  // Projects custom layout
  if (title === 'Projects' && details) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose}>✕</button>
          <h2 className={styles.leadershipTitle}>Projects</h2>
          <div className={styles.detailItem}>
            <ul>
              {Object.entries(details).map(([proj, desc], idx) => (
                <li key={idx}><strong>{proj}:</strong> {desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Default rendering for other cards
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <h2>{title}</h2>
        {Object.entries(details).map(([key, value]) => (
          <div key={key} className={styles.detailItem}>
            <h3>{key}</h3>
            {Array.isArray(value) ? (
              <ul>
                {value.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;