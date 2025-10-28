// Charts.jsx
import React, { useEffect, useRef } from "react";
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Charts = ({ users = [], theme }) => {
  const chartRef = useRef(null);

  const data = {
    labels: users.map((u) => u.name),
    datasets: [
      {
        label: "Sales",
        data: users.map((u) => u.sales),
        backgroundColor: theme?.cardBg || "#007bff",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: theme?.sidebarText || "#000",
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: theme?.cardBg || "#fff",
        titleColor: theme?.sidebarText || "#000",
        bodyColor: theme?.sidebarText || "#000",
      },
    },
    scales: {
      x: {
        ticks: { color: theme?.sidebarText || "#000" },
        grid: { color: "rgba(0,0,0,0.1)" },
      },
      y: {
        ticks: { color: theme?.sidebarText || "#000" },
        grid: { color: "rgba(0,0,0,0.1)" },
      },
    },
  };

  return <Bar ref={chartRef} data={data} options={options} />;
};

export default Charts;
