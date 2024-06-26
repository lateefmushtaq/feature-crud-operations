import './App.css';
import { useState } from "react";
import AddFriends from './components/AddFriends';
import FriendList from './components/FriendList';

function App() {
  const [display, setDisplay] = useState([]);


  return (
    <div className="App">
      <AddFriends display={display} setDisplay={setDisplay} />
      <FriendList display={display} setDisplay={setDisplay} />
    </div>
  );
}

export default App;
