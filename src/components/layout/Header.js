import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={headerStyle}>
      <header>
        <h1>ToDo List App</h1>
        <Link style={linkStyle} to="/">
          Home
        </Link>{" "}
        |{" "}
        <Link style={linkStyle} to="/about">
          About
        </Link>
      </header>
    </div>
  );
}
const headerStyle = {
  background: "#333",
  color: "white",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
export default Header;
