// components/ContentGrid/ContentGrid.jsx
import styles from './ContentGrid.module.css';
import Card from '../Card/Card';
import { cards } from '../../data/portfolioData';

const ContentGrid = () => {
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default ContentGrid;