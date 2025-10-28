import React from "react";

const Navbar = ({ theme }) => {
  return (
    <div
      style={{
        background: theme.navbarBg,
        color: theme.navbarText,
        padding: "16px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "600",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    >
      <h3>Welcome, Admin</h3>
      <button
        style={{
          padding: "8px 16px",
          borderRadius: "10px",
          border: "none",
          background: "linear-gradient(135deg,#1abc9c,#16a085)",
          color: "#fff",
          cursor: "pointer",
          fontWeight: "600",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.opacity = "0.85")}
        onMouseOut={(e) => (e.target.style.opacity = "1")}
      >
        Profile
      </button>
    </div>
  );
};

export default Navbar;
