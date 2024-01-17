import styles from "./FriendListItem.module.css";
import PropTypes from 'prop-types';

const FriendListItem = ({ friend }) => {
  const { id, avatar, name, isOnline } = friend;

  return (
    <li key={id} className={styles.status}>
      <span
        className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}
      >
        {isOnline ? "Online" : "Offline"}
      </span>
      <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};

export default FriendListItem;