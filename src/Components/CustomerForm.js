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
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
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
              <TextField required id="outlined-required" label="First-Name" />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField id="outlined-disabled" label="Last-Name" />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField
                id="outlined-read-only-input"
                label="Mobile Number"
                type="number"
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <TextField id="outlined-number" label="Address" />
            </Grid>
            <Grid item xs={6} md={8}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={6} md={8}>
              {/* <TextField id="outlined-helperText" label="Govt. Id Type" />
               */}
              <FormLabel id="idType">Govt. Id Type</FormLabel>
              <RadioGroup
                aria-labelledby="idType"
                defaultValue="aadhar"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="aadhar"
                  control={<Radio />}
                  label="Aadhar"
                />
                <FormControlLabel value="PAN" control={<Radio />} label="PAN" />
                <FormControlLabel
                  value="Driving Licence"
                  control={<Radio />}
                  label="Driving Licence"
                />
              </RadioGroup>
            </Grid>

            <Grid item xs={6} md={8}>
              <TextField id="outlined-helperText" label="Id No." />
            </Grid>

            <Grid item xs={6} md={8}></Grid>
          </Grid>
        </FormControl>
      </div>
    </Box>
  );
}
