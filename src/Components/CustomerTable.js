import * as React from "react";
import { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Button } from "@mui/material";
import axios from "axios";
import base_url from "../Api";

function createData(
  id,
  firstName,
  lastName,
  email,
  mobileNo,
  address,
  gender,
  govIdType,
  idNo
) {
  return {
    id,
    firstName,
    lastName,
    email,
    mobileNo,
    address,
    gender,
    govIdType,
    idNo,
  };
}

const rows = [
  createData(
    1,
    "xyz",
    "abc",
    "xyzabc2@gmail.com",
    9080796543,
    "Pune",
    "Female",
    "Adhar",
    7489
  ),
];

export default function CustomerTable() {
  const getCustomerData = () => {
    axios.get(`${base_url}customer/get_all`).then(
      (response) => {
        console.log(response.data);
        // setCustomers(response.data)
      },
      (error) => {
        console.log(error);
      }
    );
  };
  useEffect(() => {
    getCustomerData();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Mobile No.</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Govt Id Type</TableCell>
            <TableCell align="right">Id Number</TableCell>
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
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.mobileNo}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.govIdType}</TableCell>
              <TableCell align="right">{row.idNo}</TableCell>
              <TableCell>
                <Button startIcon={<DeleteForeverIcon />} />
                <Button startIcon={<BorderColorIcon />} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
