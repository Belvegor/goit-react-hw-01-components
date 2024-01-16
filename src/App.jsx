import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendListItem from "./components/FriendListItem/FriendListItem"; 
import TransactionHistory from "./components/TransactionHistory/TransactionHistory"; // Popraw ścieżkę do komponentu TransactionHistory
import user from "./components/Profile/user.json";
import data from "./components/Statistics/data.json";
import friendsData from "./components/FriendListItem/friends.json";
import transactionsData from "./components/TransactionHistory/transactions.json"; // Dodaj import danych transakcji

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
      <FriendListItem friends={friendsData} />
      <TransactionHistory items={transactionsData} /> {/* Przekaż dane transakcji jako props */}
    </div>
  );
}


export default App;