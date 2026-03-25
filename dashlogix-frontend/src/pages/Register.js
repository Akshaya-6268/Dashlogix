import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (name.length < 3) {
      alert("Name must be at least 3 characters");
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
      alert("Invalid email format");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert("Registered Successfully!");
    navigate("/login");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #141e30, #243b55)"
      }}
    >
      <div
        className="card p-4 shadow-lg border-0"
        style={{
          width: "400px",
          borderRadius: "20px"
        }}
      >
        <h2 className="text-center fw-bold mb-2">Create Account</h2>
        <p className="text-center text-muted mb-4">
          Join DashLogix
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button className="btn btn-success w-100 mb-3">
            Register
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;