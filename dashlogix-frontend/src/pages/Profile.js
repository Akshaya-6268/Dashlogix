import React from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Profile() {
  return (
    <>
      <Navbar />

      <div style={{ minHeight: "100vh", backgroundColor: "#f1f5f9" }}>

        <div
          style={{
            height: "180px",
            background: "linear-gradient(135deg, #1e3c72, #2a5298)"
          }}
        ></div>

        <div className="container" style={{ marginTop: "-80px" }}>

          <div className="card shadow-lg border-0" style={{ borderRadius: "15px" }}>

            <div className="text-center" style={{ marginTop: "-50px" }}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="profile"
                style={{
                  width: "110px",
                  height: "110px",
                  borderRadius: "50%",
                  border: "4px solid white"
                }}
              />
            </div>

            <div className="card-body text-center">

              <h3 className="fw-bold mt-2">User Name</h3>
              <p className="text-muted">user@gmail.com</p>

              <div className="d-flex justify-content-center gap-3 mb-4">
                <button className="btn btn-primary">Edit Profile</button>
                <button className="btn btn-outline-secondary">Settings</button>
              </div>

              <hr />

              <div className="row text-center mt-4">

                <div className="col-md-3">
                  <h5 className="fw-bold">Role</h5>
                  <p className="text-muted">User</p>
                </div>

                <div className="col-md-3">
                  <h5 className="fw-bold">Status</h5>
                  <p className="text-muted">Active</p>
                </div>

                <div className="col-md-3">
                  <h5 className="fw-bold">Project</h5>
                  <p className="text-muted">DashLogix</p>
                </div>

                <div className="col-md-3">
                  <h5 className="fw-bold">Logs</h5>
                  <p className="text-muted">25</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Profile;