import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.list_stat}>
      <ul>
        <li className={css.list_item}>Good: {good}</li>
        <li className={css.list_item}>Neutral: {neutral}</li>
        <li className={css.list_item}>Bad: {bad}</li>
        <li className={css.list_item}>Total: {total}</li>
        <li className={css.list_item}>
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};