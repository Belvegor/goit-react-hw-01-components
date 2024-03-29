import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendListItem/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

import user from "./components/Profile/user.json";
import data from "./components/Statistics/data.json";
import friendData from "./components/FriendListItem/friends.json";
import transactionsData from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <div className="wrap">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friend={friendData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
}
export default App;
