// Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

const Sidebar = ({ theme }) => {
  return (
    <div
      className={styles.sidebar}
      style={{ backgroundColor: theme.sidebarBg, color: theme.sidebarText }}
    >
      <h2 style={{ marginBottom: "30px" }}>Admin Dashboard</h2>
      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sales"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
