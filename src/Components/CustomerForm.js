import * as React from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";
import base_url from "../Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CustomerForm() {
  const postCustomerData = (data) => {
    console.log(data);
    axios.post(`${base_url}customer/create`, data).then(
      (response) => {
        console.log(response.data);
        toast.success("Customer Details Added Successfully");
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      mobile_no: data.get("mobile_no"),
      address: data.get("address"),
      gender: data.get("gender"),
      gov_id_type: data.get("gov_id_type"),
      id_no: data.get("id_no"),
    });
    const customerData = {
      id: "",
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      mobile_no: data.get("mobile_no"),
      address: data.get("address"),
      gender: data.get("gender"),
      gov_id_type: data.get("gov_id_type"),
      id_no: data.get("id_no"),
    };
    postCustomerData(customerData);
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
            <TextField
              required
              id="first_name"
              name="first_name"
              label="First-Name"
            />
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField id="last_name" name="last_name" label="Last-Name" />
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField id="email" name="email" label="Email" type="email" />
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField
              id="mobile_no"
              name="mobile_no"
              label="Mobile Number"
              type="number"
            />
          </Grid>
          <Grid item xs={6} md={8}>
            <TextField id="address" name="address" label="Address" />
          </Grid>
          <Grid item xs={6} md={8}>
            <FormLabel id="gender" name="gender">
              Gender
            </FormLabel>
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
              <FormControlLabel value="male" control={<Radio />} label="Male" />
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
            <FormLabel id="gov_id_type" name="gov_id_type">
              Govt. Id Type
            </FormLabel>
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
            <TextField id="id_no" name="id_no" label="Id No." />
          </Grid>
        </Grid>
      </FormControl>
      <Button type="submit">Submit</Button>
      <Button>Cancel</Button>
      <ToastContainer />
    </Box>
  );
}
