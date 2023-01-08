import styles from '../Statistics/Statistics.module.css';
import propTypes from 'prop-types';

export const Statistics = ({
  good,
  bad,
  neutral,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
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
        Total: <span>{countTotalFeedback()}</span>
      </li>
      <li>
        Positive feedback: <span>{Math.round(countPositiveFeedbackPercentage())}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  countTotalFeedback: propTypes.number.isRequired,
  countPositiveFeedbackPercentage: propTypes.number.isRequired,
};