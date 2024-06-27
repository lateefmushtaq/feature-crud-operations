import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import BasicSelect from "./Select";
import TextFields from "./Input";
import * as React from "react";
import { useContext } from "react";
import { appContext } from "../App";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function AddFriends() {
  const { setDisplay } = useContext(appContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [color, setColor] = useState("");
  const [img, setImage] = useState("");

  const randomId = uuidv4();
  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };
  const handleSelectImage = (event) => {
    setImage(event.target.value);
  };
  function handleClick() {
    if (name && age) {
      const friend = {
        name,
        age,
        color,
      };

      setDisplay((display) => [...display, friend]);
      setName("");
      setAge("");
      setColor("");
      console.log(";hi");
      async function createFriend() {
        try {
          const response = await fetch(
            "https://crudcrud.com/api/44a4786065604a7a94715d64f785bca4/friends/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name: friend.name,
                age: friend.age,
                favcolor: friend.color,
                img:
                  img === "Yes"
                    ? `https://i.pravatar.cc/${250}?u=${randomId}}`
                    : `https://i.pravatar.cc/${250}?u=2`,
              }),
            }
          );

          if (!response.ok) {
            throw new Error("Failed to create friend");
          }
        } catch (error) {}
      }

      createFriend();
    }
  }
  useEffect(() => {
    async function getFriend() {
      try {
        const response = await fetch(
          "https://crudcrud.com/api/44a4786065604a7a94715d64f785bca4/friends/"
        );

        if (!response.ok) {
          throw new Error("Failed to create friend");
        }
        const data = await response.json();
        setDisplay(data);
      } catch (error) {
        console.error("Error creating friend:", error);
      }
    }

    getFriend();
  }, [setDisplay]);

  return (
    <div className="input">
      <FormControl sx={{ minWidth: "25%", display: "inline-flex" }}>
        <InputLabel id="demo-simple-select-label">Select Image</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={img}
          onChange={handleSelectImage}
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </FormControl>

      <TextFields
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <TextFields
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />

      <BasicSelect
        color={color}
        setColor={setColor}
        type="text"
        value={color}
        onColorChange={handleColorChange}
        placeholder="Favorite Color"
      />

      <Stack direction="row" style={{ display: "block" }}>
        <Button onClick={handleClick} variant="contained">
          Add
        </Button>
      </Stack>
    </div>
  );
}

export default AddFriends;
