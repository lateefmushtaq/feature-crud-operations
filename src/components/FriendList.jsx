function FriendList({ display, setDisplay }) {
  function handleDelete(id) {
    const updatedDisplay = display.filter((e) => e.id !== id);
    setDisplay(updatedDisplay);
  }

  return (
    <div>
      {display.map((e) => (
        <div key={e.id}>
          {" "}
          {e.name} <span>{e.age}</span> <span>{e.color}</span>{" "}
          <span>
            {" "}
            <button onClick={() => handleDelete(e.id)}>{"Delete"}</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default FriendList;
