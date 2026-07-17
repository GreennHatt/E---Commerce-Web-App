import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/LoginSignup.css";
import { ShopContext } from "../Context/ShopContext";

const LoginSignup = () => {
  const { login, signup } = useContext(ShopContext);
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); // 'login' | 'signup'
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (mode === "signup" && !agreed) {
      setError("Please agree to the Terms of Use & Privacy Policy.");
      return;
    }

    if (mode === "signup" && form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    const result =
      mode === "signup"
        ? signup(form.name.trim(), form.email.trim(), form.password)
        : login(form.email.trim(), form.password);

    if (!result.success) {
      setError(result.message);
      return;
    }
    navigate("/");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{mode === "login" ? "Login" : "Sign Up"}</h1>
        <form className="loginsignup-fields" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Your name"
              required
            />
          )}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email address"
            required
          />
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            required
          />
          {mode === "signup" && (
            <div className="loginsignup-agree">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <p>I agree to the Terms of Use & Privacy Policy.</p>
            </div>
          )}
          {error && <p className="loginsignup-error">{error}</p>}
          <button type="submit">
            {mode === "login" ? "Login" : "Continue"}
          </button>
        </form>
        {mode === "login" ? (
          <p className="loginsignup-login">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setMode("signup");
                setError("");
              }}
            >
              Sign up here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setMode("login");
                setError("");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
