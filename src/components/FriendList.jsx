import * as React from "react";
import { useState } from "react";
import { useContext } from "react";
import { appContext } from "../App";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, TextField } from "@mui/material";
import "./component.css";

function FriendList() {
  const { display, setDisplay } = useContext(appContext);
  const [editMode, setEditMode] = useState(false);
  const [currentFriend, setCurrentFriend] = useState(null);
  const [updatedFriend, setUpdatedFriend] = useState({});

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

  function handleEditClick(friend) {
    setEditMode(true);
    setCurrentFriend(friend);
    setUpdatedFriend(friend);
  }

  function handleChange(e) {
    setUpdatedFriend({ ...updatedFriend, [e.target.name]: e.target.value });
  }

  async function handleUpdateUser(id) {
    try {
      await fetch(
        `https://crudcrud.com/api/44a4786065604a7a94715d64f785bca4/friends/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFriend),
        }
      );
    } catch (error) {
      console.log(error);
    }
    setDisplay(
      display.map((friend) =>
        friend._id === currentFriend._id ? updatedFriend : friend
      )
    );
    setEditMode(false);
    setCurrentFriend(null);
  }

  return (
    <div className="display">
      {editMode ? (
        <div>
          <TextField
            label="Name"
            name="name"
            value={updatedFriend.name}
            onChange={handleChange}
          />
          <TextField
            label="Age"
            name="age"
            value={updatedFriend.age}
            onChange={handleChange}
          />
          <TextField
            label="Color"
            name="color"
            value={updatedFriend.color}
            onChange={handleChange}
          />
          <TextField
            label="Image URL"
            name="img"
            value={updatedFriend.img}
            onChange={handleChange}
          />
          <Button onClick={handleUpdateUser} color="primary">
            Save
          </Button>
          <Button onClick={() => setEditMode(false)} color="secondary">
            Cancel
          </Button>
        </div>
      ) : (
        display.map((e) => (
          <Card key={e._id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                style={{ overflow: "hidden" }}
                component="img"
                width="250px"
                image={e.img}
                alt={e.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <p>Name {e.name}</p>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Age: {e.age}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.color}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={() => deleteUser(e._id)}
                size="small"
                color="error"
                variant="contained"
              >
                Delete
              </Button>
              <Button
                onClick={() => handleEditClick(e._id)}
                size="small"
                variant="contained"
              >
                Edit
              </Button>
            </CardActions>
          </Card>
        ))
      )}
    </div>
  );
}

export default FriendList;
