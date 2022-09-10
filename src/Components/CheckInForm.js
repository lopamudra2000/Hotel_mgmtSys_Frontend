import * as React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import base_url from "../Api";
export default function CustomerForm() {
  const postBookingData = (data) => {
    console.log(data);
    axios.post(`${base_url}booking/create`, data).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const bookData = {
      id: data.get("id"),
      user_id: data.get("user_id"),
      room_id: data.get("room_id"),
      check_in: data.get("check_in"),
      check_out: data.get("check_out"),
    };
    console.log(bookData);
    postBookingData(bookData);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <FormControl>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={6} md={8}>
            <TextField required id="id" name="id" label="Id" />
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField id="user_id" name="user_id" label="User Id" />
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              id="room_id"
              name="room_id"
              label="Room Id"
              type="number"
            />
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              id="check_in"
              name="check_in"
              label="Check-In"
              type="date"
            />
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              id="check_out"
              name="check_out"
              label="Check-Out"
              type="date"
            />
          </Grid>
        </Grid>
      </FormControl>
      <Button type="submit">Submit</Button>
      <Button>Cancel</Button>
    </Box>
  );
}
