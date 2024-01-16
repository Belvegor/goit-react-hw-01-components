import styles from "./FriendListItem.module.css" 

const FriendListItem = ({ friends }) => {
    return (
      <ul className={styles.FriendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id} className={styles.status}>
            <span
              className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}
            >
              {isOnline ? "Online" : "Offline"}
            </span>
            <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} width="48" />
            <p className={styles.name}>{name}</p>
          </li>
        ))}
      </ul>
    );
  };
  
  export default FriendListItem;