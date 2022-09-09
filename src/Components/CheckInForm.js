import * as React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function CustomerForm() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <FormControl>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={6} md={8}>
              <TextField required id="outlined-required" label="Id" />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField id="outlined-disabled" label="User Id" />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                id="outlined-password-input"
                label="Room Id"
                type="email"
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                id="outlined-read-only-input"
                label="Check-In"
                type="date"
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField id="outlined-number" label="Check-Out" type="date" />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField id="outlined-number" label="Bill" />
            </Grid>
          </Grid>
        </FormControl>
      </div>
    </Box>
  );
}
