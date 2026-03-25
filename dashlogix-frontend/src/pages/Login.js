import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    // Empty check
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
      alert("Invalid email format");
      return;
    }

    // Password length check
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // If everything valid
    alert("Login Successful!");
    navigate("/dashboard");
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
          width: "380px",
          borderRadius: "20px"
        }}
      >
        <h2 className="text-center fw-bold mb-2">DashLogix</h2>
        <p className="text-center text-muted mb-4">
          Login to your account
        </p>

        {/* Email */}
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          className="btn btn-primary w-100 mb-3"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Link */}
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;