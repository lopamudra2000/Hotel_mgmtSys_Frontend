import * as React from "react";
import Button from "@mui/material/Button";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Stack from "@mui/material/Stack";

import BookingTable from "../../Components/BookingTable";
import NavBar from "../../Components/NavBar";
import CustomerForm from "../../Components/CustomerForm";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Booking() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <NavBar />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Customer Registraion Form</DialogTitle>
        <DialogContent>
          <DialogContentText>All Fields are required</DialogContentText>
          <CustomerForm />
        </DialogContent>
      </Dialog>
      {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions> */}
      <Stack direction="row" spacing={2}>
        <Button
          onClick={handleClickOpen}
          variant="outlined"
          startIcon={<AddBusinessIcon />}
        >
          Add Rooms
        </Button>
        <Button variant="contained" endIcon={<FilterAltIcon />}>
          Filters
        </Button>
      </Stack>
      <BookingTable />
    </div>
  );
}
