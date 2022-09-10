import React from "react";
import NavBar from "../../Components/NavBar";
import CustomerForm from "../../Components/CustomerForm";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Stack from "@mui/material/Stack";
import CustomerTable from "../../Components/CustomerTable";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogOut from "../../Components/LogOut";

export default function Customer() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <NavBar />
      <LogOut />

      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>Customer Registeration Form</DialogTitle>
        <DialogContent>
          <DialogContentText>All fields are mandatory</DialogContentText>
          <CustomerForm />
        </DialogContent>
      </Dialog>

      <Stack direction="row" spacing={2}>
        <Button
          onClick={handleClickOpen}
          variant="outlined"
          startIcon={<AddBusinessIcon />}
        >
          Add New Customer
        </Button>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="contained"
          endIcon={<FilterAltIcon />}
        >
          Filters
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleMenuClose}>All Guests</MenuItem>
          <MenuItem onClick={handleMenuClose}>Checked-Out Guests</MenuItem>
          <MenuItem onClick={handleMenuClose}>Occupied</MenuItem>
        </Menu>
      </Stack>
      <CustomerTable />
    </>
  );
}
