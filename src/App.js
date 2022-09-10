import "./App.css";
import SignIn from "./Pages/SignIn";
import Home from "./Pages/Home";
import Customer from "./Pages/Customer";
import Booking from "./Pages/Booking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import { Col, Row } from "reactstrap";
import SideBar from "./Components/SideBar";
// import Drawer from './Components/Drawer';
function App() {
  return (
    <Router>
      <Container>
        <Row>
          <Col md={2}>
            <SideBar />
          </Col>
          <Col md={10}>
            <Routes>
              <Route path="/signin" element={<SignIn />} exact />
              <Route path="/" element={<Home />} exact />
              <Route path="/customer" element={<Customer exact />} />
              <Route path="/booking" element={<Booking />} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
