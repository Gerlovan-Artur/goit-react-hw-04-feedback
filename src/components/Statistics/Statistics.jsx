import styles from '../Statistics/Statistics.module.css';
import propTypes from 'prop-types';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={styles.statistics_list}>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li className={styles.bad}>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{total}</span>
      </li>
      <li>
        Positive feedback: <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};