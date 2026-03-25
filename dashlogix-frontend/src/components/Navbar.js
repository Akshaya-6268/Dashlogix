import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow"
         style={{background: "linear-gradient(to right, #141e30, #243b55)"}}>

      <div className="container">

        <Link className="navbar-brand text-white fw-bold" to="/dashboard">
          DashLogix
        </Link>

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/upload">Upload</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/history">History</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/profile">Profile</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-danger" to="/">Logout</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;