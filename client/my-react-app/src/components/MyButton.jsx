// MyButton.jsx
// This component renders the Login and Register buttons on the landing page.
// Students should implement navigation to the Login and Register pages when the buttons are clicked.
import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyButton() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "absolute",
        top: "1rem",
        right: "1rem",
        display: "flex",
        gap: "1rem",
      }}
    >
      <button
        onClick={() => navigate("/login")}
        style={{ padding: "0.5rem 1rem", borderRadius: "5px", background: "#aa3bff", color: "white", border: "none", cursor: "pointer" }}
      >
        Login
      </button>
      <button
        onClick={() => navigate("/register")}
        style={{ padding: "0.5rem 1rem", borderRadius: "5px", background: "#ffdfba", color: "#aa3bff", border: "none", cursor: "pointer" }}
      >
        Register
      </button>
    </div>
  );
}
