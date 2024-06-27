import './App.css';
import { useState, createContext } from "react";
import AddFriends from './components/AddFriends';
import FriendList from './components/FriendList';
export const appContext = createContext()
function App() {
  const [display, setDisplay] = useState([]);


  return (
    <appContext.Provider value={{ display, setDisplay }}>
      <div className="App">
        <AddFriends />
        <FriendList />
      </div>
    </appContext.Provider >

  );
}

export default App;
