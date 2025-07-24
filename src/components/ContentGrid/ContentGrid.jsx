// components/ContentGrid/ContentGrid.jsx
import styles from './ContentGrid.module.css';
import { cards } from '../../data/portfolioData';
import React from 'react';
import Card from '../Card/Card';

const ContentGrid = () => {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          icon={card.icon}
          summary={card.summary}
          details={card.details}
        />
      ))}
    </div>
  );
};

export default ContentGrid;