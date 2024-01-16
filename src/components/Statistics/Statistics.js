import styles from "./statistics.module.css"

const Statistics = ({ title, stats }) => {
    return (
      <section className={styles.statistics}>
        <h2 className={styles.title}>{title}</h2>
  
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
  
  export default Statistics;