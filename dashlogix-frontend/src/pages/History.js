import React from "react";
import Navbar from "../components/Navbar";

function History() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2>Log History</h2>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>log1.txt</td>
              <td>2026-03-22</td>
              <td>Processed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default History;