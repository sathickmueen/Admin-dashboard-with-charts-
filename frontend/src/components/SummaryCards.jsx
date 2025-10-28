import React from "react";

const SummaryCards = ({ users, theme }) => {
  // Calculate summary values
  const totalSales = users.reduce((sum, u) => sum + u.sales, 0);
  const totalUsers = users.length;
  const uniqueRoles = [...new Set(users.map(u => u.role))].length;

  const cardInfo = [
    { title: "Total Users", value: totalUsers, accent: "#FF6A00" },
    { title: "Total Sales", value: totalSales, accent: "#2575FC" },
    { title: "Unique Roles", value: uniqueRoles, accent: "#6A11CB" },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "25px",
        marginBottom: "30px",
      }}
    >
      {cardInfo.map((card, idx) => (
        <div
          key={idx}
          style={{
            background: `linear-gradient(135deg, ${card.accent}33, ${theme.cardBg})`,
            color: theme.cardText,
            borderRadius: "20px",
            padding: "25px",
            textAlign: "center",
            boxShadow:
              theme.background === "#f5f5f7"
                ? "0 8px 20px rgba(0,0,0,0.08)"
                : "0 8px 25px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 12px 30px rgba(0,0,0,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              theme.background === "#f5f5f7"
                ? "0 8px 20px rgba(0,0,0,0.08)"
                : "0 8px 25px rgba(0,0,0,0.3)";
          }}
        >
          <h4
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: "700",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            {card.title}
          </h4>
          <p
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              fontFamily: "Arial, sans-serif",
            }}
          >
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
