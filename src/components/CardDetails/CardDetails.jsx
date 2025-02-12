// src/components/CardDetails/CardDetails.jsx
import React from 'react';
import styles from './CardDetails.module.css';

const CardDetails = ({ title, details, onClose }) => {
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