import styles from "./FriendListItem.module.css";
import FriendListItem from "./FriendListItem";
import PropTypes from 'prop-types';

const FriendList = ({ friend }) => {
  return (
    <ul className={styles.FriendList}>
      {friend.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};


export default FriendList;