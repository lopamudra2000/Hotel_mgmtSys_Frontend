import React from "react";
import LogOut from "../../Components/LogOut";
import NavBar from "../../Components/NavBar";

export default function Home() {
  const setBackground = {
    backgroundImage:
      "url('https://www.croatiaweek.com/wp-content/uploads/2020/01/fb1d5efd13-m2001400005-scaled.jpg?x60085')",
    height: "100vh",
    fontSize: "30px",
    fontWeight: "200",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <NavBar />
      <LogOut />

      <div className="centered" style={setBackground}>
        <div className="translayer">
          <p className="frontFont">WELCOME </p>
        </div>
      </div>
    </div>
  );
}
