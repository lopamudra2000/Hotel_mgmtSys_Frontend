import * as React from "react";
import Button from "@mui/material/Button";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Stack from "@mui/material/Stack";

import BookingTable from "../../Components/BookingTable";
import NavBar from "../../Components/NavBar";
import CheckInForm from "../../Components/CheckInForm";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LogOut from "../../Components/LogOut";
export default function Booking() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <NavBar />

      <Stack direction="row" spacing={2}>
        <LogOut />
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
          <MenuItem onClick={handleMenuClose}>Price</MenuItem>
          <MenuItem onClick={handleMenuClose}>Type</MenuItem>
          <MenuItem onClick={handleMenuClose}>Status</MenuItem>
          <MenuItem onClick={handleMenuClose}>Remove Filters</MenuItem>
        </Menu>
      </Stack>
      <BookingTable />
    </div>
  );
}
