import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function LogOut() {
  return (
    <Button component={Link} to="/signin">
      Logout
    </Button>
  );
}
