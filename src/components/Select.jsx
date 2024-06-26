import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ onColorChange }) {
  const [color, setColor] = React.useState("");

  const handleChange = (event) => {
    const selectedColor = event.target.value;
    setColor(selectedColor);
    onColorChange(selectedColor); // Pass selected color to parent component
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        minWidth: 300,
        "& > :not(style)": { m: 1 },
      }}
    >
      <FormControl sx={{ minWidth: "25%" }}>
        <InputLabel id="demo-simple-select-label">Select Color</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={color}
          onChange={handleChange}
          label="Select Color"
        >
          <MenuItem value={"Voilet"}>Voilet</MenuItem>
          <MenuItem value={"Indigo"}>Indigo</MenuItem>
          <MenuItem value={"Blue"}>Blue</MenuItem>
          <MenuItem value={"Green"}>Green</MenuItem>
          <MenuItem value={"Orange"}>Orange</MenuItem>
          <MenuItem value={"Red"}>Red</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
