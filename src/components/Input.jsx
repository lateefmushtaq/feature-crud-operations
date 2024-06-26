import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextFields({ value, onChange }) {
  return (
    <Box
      component="form"
      sx={{
        minWidth: 300,
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ minWidth: "25%" }}
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}
