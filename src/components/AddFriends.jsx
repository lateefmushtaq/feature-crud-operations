import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddFriends({ setDisplay }) {
  const mmuid = uuidv4();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");

  function handleClick() {
    if (name && age && color) {
      const friend = {
        name,
        age,
        color,
        id: mmuid,
      };

      setDisplay((display) => [...display, friend]);
      setName("");
      setAge("");
      setColor("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      ></input>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      ></input>
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Favorite Color"
      ></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default AddFriends;
