import styles from '../Section/Section.module.css';
import propTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className={styles.class_div}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};