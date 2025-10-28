import React from "react";
import styles from "./SettingsPage.module.css";

const SettingsPage = ({ theme, toggleTheme }) => {
  const modeName = theme.background === "#f5f5f7" ? "Light Mode" : "Dark Mode";

  return (
    <div className={styles.container} style={{ background: theme.background, color: theme.sidebarText }}>
      <h1>Settings</h1>

      {/* Theme Toggle Card */}
      <div
        className={styles.card}
        style={{ background: theme.cardBg, color: theme.cardText }}
      >
        <h3>Theme</h3>
        <div className={styles.toggleContainer}>
          <span>{modeName}</span>
          <button className={styles.toggleButton} onClick={toggleTheme}>
            Toggle Theme
          </button>
        </div>
      </div>

      {/* Admin Profile Card */}
      <div
        className={styles.card}
        style={{ background: theme.cardBg, color: theme.cardText }}
      >
        <h3>Profile</h3>
        <p>Name: Admin</p>
        <p>Email: admin@example.com</p>
        <p>Role: Administrator</p>
      </div>
    </div>
  );
};

export default SettingsPage;
