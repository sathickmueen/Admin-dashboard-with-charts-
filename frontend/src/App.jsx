import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SideBar";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import SettingsPage from "./pages/SettingsPage";
import "./App.module.css";

function App({ theme, toggleTheme }) {
  return (
    <div style={{ display: "flex", background: theme.background, minHeight: "100vh" }}>
      <Sidebar theme={theme} />
      <div style={{ flex: 1 }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<HomePage theme={theme} />} />
            <Route path="/users" element={<UsersPage theme={theme} />} />
            <Route path="/sales" element={<SalesPage theme={theme} />} />
            
            {/* ⚡ Wrap SettingsPage to pass props properly */}
            <Route
              path="/settings"
              element={<SettingsPageWrapper theme={theme} toggleTheme={toggleTheme} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

/* Wrapper ensures props update correctly on every render */
const SettingsPageWrapper = ({ theme, toggleTheme }) => {
  return <SettingsPage theme={theme} toggleTheme={toggleTheme} />;
};

export default App;
