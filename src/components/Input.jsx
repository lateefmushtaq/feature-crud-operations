import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextFields({ value, onChange, placeholder, type }) {
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
        label={placeholder}
        variant="outlined"
        value={value}
        onChange={onChange}
        type={type}
      />
    </Box>
  );
}
