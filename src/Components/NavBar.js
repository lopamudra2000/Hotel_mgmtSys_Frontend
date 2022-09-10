import * as React from "react";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { CardBody } from "reactstrap";

export default function NavBar() {
  return (
    <div>
      <Card className="my-2 bg-primary bg-gradient">
        <CardBody>
          <h1 className="text-center my-2 text-white ">
            Hotel Management Application
          </h1>
        </CardBody>
      </Card>
    </div>
  );
}
