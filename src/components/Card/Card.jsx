import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import styles from './Card.module.css';
import CardDetails from '../CardDetails/CardDetails';

const Card = ({ title, icon, summary, details }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPlatforms, setShowPlatforms] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCardClick = () => {
    if (title === "Projects") {
      // Navigate to the projects page with project details
      navigate('/projects', { state: { projects: details } });
    } else if (title === "Education") {
      navigate('/education');
    } else if (title === "Competitive Programming") {
      // Show the platform modal instead of opening the normal modal
      setShowPlatforms(true);
    } else {
      setIsOpen(true);  // Open modal for other cards
    }
  };

  return (
    <>
      {/* Main Card */}
      <div className={styles.card} onClick={handleCardClick}>
        <div className={styles.cardHeader}>
          <span className={styles.icon}>{icon}</span>
          <h3>{title}</h3>
        </div>
        <p className={styles.summary}>{summary}</p>
      </div>

      {/* For non-Competitive Programming cards, show modal if isOpen */}
      {isOpen && title !== "Competitive Programming" && (
        <CardDetails
          title={title}
          details={details}
          onClose={() => setIsOpen(false)}
        />
      )}

      {/* For Competitive Programming, show the platform modal */}
      {showPlatforms && title === "Competitive Programming" && (
        <div className={styles.platformModal}>
          <button 
            className={styles.closePlatformButton} 
            onClick={() => setShowPlatforms(false)}
          >
            ✕
          </button>
          <div className={styles.platformCards}>
            {Object.keys(details).map((key) => {
              // Skip keys that are not platform details
              const platform = details[key];
              if (key === "Other Platforms"){
                return (
                  <div key={key} className={styles.platformCard}>
                    <h3>{key}</h3>
                    <p><strong>Total Problems Solved:</strong> {platform.problemsSolved}</p>
                  </div>
                );
              }
             
              return (
                <div key={key} className={styles.platformCard}>
                  <h3>{key}</h3>
                  <p><strong>Handle:</strong> {platform.handle}</p>
                  <p><strong>Max Rating:</strong> {platform.maxRating}</p>
                  <p><strong>Problems Solved:</strong> {platform.problemsSolved}</p>
                  <p><strong>Highest Ranking:</strong> {platform.highestRanking}</p>
                  <a 
                    href={platform.profileLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.profileLink}
                  >
                    View Profile
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
