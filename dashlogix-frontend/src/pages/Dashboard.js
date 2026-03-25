import React from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div
        className="container-fluid py-4"
        style={{
          minHeight: "100vh",
          background: "linear-gradient(to right, #eef2ff, #e0e7ff)"
        }}
      >
        <div className="container">

          <h2 className="fw-bold mb-4" style={{ color: "#1e3a8a" }}>
            Dashboard Overview
          </h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div
                className="card border-0 shadow-lg text-white p-4"
                style={{
                  borderRadius: "15px",
                  background: "linear-gradient(135deg, #6366f1, #4f46e5)"
                }}
              >
                <h6>Total Logs</h6>
                <h2 className="fw-bold">1200</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card border-0 shadow-lg text-white p-4"
                style={{
                  borderRadius: "15px",
                  background: "linear-gradient(135deg, #ef4444, #dc2626)"
                }}
              >
                <h6>Errors</h6>
                <h2 className="fw-bold">85</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card border-0 shadow-lg text-dark p-4"
                style={{
                  borderRadius: "15px",
                  background: "linear-gradient(135deg, #facc15, #eab308)"
                }}
              >
                <h6>Warnings</h6>
                <h2 className="fw-bold">150</h2>
              </div>
            </div>

          </div>

          <div className="mt-5">
            <div
              className="card shadow-lg border-0 p-5 text-center"
              style={{ borderRadius: "15px" }}
            >
              <h5 className="mb-3">Log Visualization</h5>
              <p className="text-muted">
                Charts and analytics will be displayed here.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;