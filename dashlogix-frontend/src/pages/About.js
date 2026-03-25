import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <div
        className="container-fluid py-5"
        style={{
          background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
          minHeight: "100vh"
        }}
      >
        <div className="container">

          <div
            className="card shadow-lg border-0 p-5"
            style={{ borderRadius: "15px" }}
          >
            <h2 className="text-center fw-bold mb-4 text-dark">
              About DashLogix
            </h2>

            <p className="text-center text-secondary mb-4">
              DashLogix is a smart log monitoring and visualization system
              designed to simplify the analysis of large-scale log data using Splunk.
            </p>

            <hr />

            <h4 className="mt-4 text-primary">Project Overview</h4>
            <p className="text-muted">
              DashLogix enables users to efficiently monitor system logs,
              detect errors, and visualize data in a structured format. It
              transforms raw log data into meaningful insights that help
              improve system understanding and performance.
            </p>

            <h4 className="mt-4 text-primary">Features</h4>
            <ul className="text-muted">
              <li>User authentication with login and registration</li>
              <li>Upload and process log files</li>
              <li>View history of uploaded logs</li>
              <li>Dashboard for monitoring logs</li>
              <li>Visualization of logs using Splunk</li>
            </ul>

            <h4 className="mt-4 text-primary">Technologies Used</h4>
            <ul className="text-muted">
              <li>Frontend: React.js and Bootstrap</li>
              <li>Backend: Node.js and Express</li>
              <li>Log Analysis: Splunk</li>
            </ul>

            <h4 className="mt-4 text-primary">Objective</h4>
            <p className="text-muted">
              The objective of DashLogix is to provide an efficient and
              user-friendly platform for monitoring and analyzing logs,
              reducing manual effort and improving system reliability.
            </p>

          </div>

        </div>
      </div>
    </>
  );
}

export default About;