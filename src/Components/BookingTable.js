import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckInForm from "../Components/CheckInForm";
function createData(id, roomType, roomPrice, roomStatus, booking) {
  return { id, roomType, roomPrice, roomStatus, booking };
}

const rows = [
  createData(1, "Deluxe", 5000, "Occupied"),
  createData(1, "Deluxe", 5000, "Occupied"),
  createData(1, "Deluxe", 5000, "Occupied"),
  createData(1, "Deluxe", 5000, "Occupied"),
  createData(1, "Deluxe", 5000, "Occupied"),
  createData(1, "Deluxe", 5000, "Occupied"),
  createData(1, "Deluxe", 5000, "Occupied"),
  createData(1, "Deluxe", 5000, "Occupied"),
  createData(1, "Deluxe", 5000, "Occupied"),
  createData(1, "Deluxe", 5000, "Occupied"),
];

export default function BookingTable() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const handleClose = () => {
    setDialogOpen(false);
  };
  const handleClickOpen = () => {
    setDialogOpen(true);
  };
  return (
    <TableContainer component={Paper}>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>Customer Registeration Form</DialogTitle>
        <DialogContent>
          <DialogContentText>All fields are mandatory</DialogContentText>
          <CheckInForm />
        </DialogContent>
      </Dialog>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Room Type</TableCell>
            <TableCell align="right">Room Price</TableCell>
            <TableCell align="right">Room Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.roomType}</TableCell>
              <TableCell align="right">{row.roomPrice}</TableCell>
              <TableCell align="right">{row.roomStatus}</TableCell>
              <TableCell>
                <Button
                  onClick={handleClickOpen}
                  variant="outlined"
                  startIcon={<BookOnlineIcon />}
                >
                  Book
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
