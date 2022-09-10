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
  return (
    <TableContainer component={Paper}>
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
                <Button variant="outlined" startIcon={<BookOnlineIcon />}>
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
