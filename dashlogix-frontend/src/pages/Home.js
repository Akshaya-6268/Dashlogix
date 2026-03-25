import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div style={{ backgroundColor: "#16a34a", minHeight: "100vh" }}>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">

          <h4 className="fw-bold" style={{ color: "#16a34a" }}>
            DashLogix
          </h4>

          <div className="ms-auto d-flex align-items-center">

            {/* About Us Link */}
            <Link 
              to="/about" 
              className="me-3 fw-semibold"
              style={{ color: "#16a34a", textDecoration: "none" }}
            >
              About Us
            </Link>

            {/* Login & Register */}
            <Link to="/login" className="btn btn-outline-success me-2">
              Log in
            </Link>

            <Link to="/register" className="btn btn-success">
              Sign up
            </Link>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center">

          <div className="col-md-6 text-white">
            <h1 className="fw-bold mb-4" style={{ fontSize: "48px" }}>
              Monitor logs
              <br />
              without the complexity
            </h1>

            <p className="mb-4" style={{ fontSize: "18px" }}>
              DashLogix helps you upload, analyze, and visualize logs efficiently
              using powerful tools like Splunk, enabling quick error detection
              and improved system performance.
            </p>

            <Link to="/register" className="btn btn-light px-4 py-2 fw-bold">
              Get Started
            </Link>
          </div>

          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
              alt="dashboard"
              style={{ width: "80%", borderRadius: "10px" }}
            />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;