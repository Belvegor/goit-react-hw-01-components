import styles from "./statistics.module.css"
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
  
        <ul className={styles.stats}>
          {stats.map(({ id, label, percentage }) => (
            <li key={id} className={styles.item}>
              <span className={styles.label}>{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  export default Statistics;