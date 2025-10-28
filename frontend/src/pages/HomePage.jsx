// HomePage.jsx
import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userAPI";
import { Line, Pie, Doughnut } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend } from "chart.js";
import styles from "./HomePage.module.css";

Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Tooltip, Legend);

const HomePage = ({ theme }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const colors = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

  const lineData = {
    labels: users.map(u => u.name),
    datasets: [
      {
        label: "Sales Over Users",
        data: users.map(u => u.sales),
        borderColor: colors,
        backgroundColor: colors.map(c => c + "55"),
        tension: 0.3,
      },
    ],
  };

  const pieData = {
    labels: users.map(u => u.name),
    datasets: [
      {
        data: users.map(u => u.sales),
        backgroundColor: colors,
      },
    ],
  };

  const doughnutData = {
    labels: users.map(u => u.name),
    datasets: [
      {
        data: users.map(u => u.sales),
        backgroundColor: colors,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { labels: { color: theme.sidebarText } },
      tooltip: {
        backgroundColor: theme.cardBg,
        titleColor: theme.sidebarText,
        bodyColor: theme.sidebarText,
      },
    },
    scales: {
      x: { ticks: { color: theme.sidebarText }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: theme.sidebarText }, grid: { color: "rgba(255,255,255,0.1)" } },
    },
  };

  return (
    <div className={styles.container} style={{ background: theme.background, color: theme.sidebarText }}>
      <h1>Dashboard</h1>

      <div className={styles.charts}>
        <div className={styles.card}>
          <h3>Sales Line Chart</h3>
          <Line data={lineData} options={options} />
        </div>

        <div className={styles.card}>
          <h3>Sales Pie Chart</h3>
          <Pie data={pieData} options={{ plugins: options.plugins }} />
        </div>

        <div className={styles.card}>
          <h3>Sales Doughnut Chart</h3>
          <Doughnut data={doughnutData} options={{ plugins: options.plugins }} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
