import "./component.css";
import EditIcon from "@mui/icons-material/Edit";

function FriendList({ display, setDisplay }) {
  async function deleteUser(id) {
    try {
      await fetch(
        `https://crudcrud.com/api/44a4786065604a7a94715d64f785bca4/friends/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
    setDisplay(display.filter((friend) => friend._id !== id));
  }

  return (
    <div className="display">
      {display.map((e) => (
        <div className="card" key={e._id} style={{ backgroundColor: e.color }}>
          {" "}
          <span id="editIcon">
            <EditIcon style={{ color: "#E88D67" }} />
          </span>
          <p>{e.name} </p> <span>{e.age}</span> {e.color}
          <div id="dp">
            {e.src !== null ? <img src={e.img} alt={e.name} /> : null}
          </div>
          <span>
            <button onClick={() => deleteUser(e._id)}>{"Delete"}</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default FriendList;
