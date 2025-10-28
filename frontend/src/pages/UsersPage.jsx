// UsersPage.jsx
import React, { useEffect, useState } from "react";
import styles from "./UsersPage.module.css";

const UsersPage = ({ theme }) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [sales, setSales] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add or Update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, role, sales: Number(sales) };

    try {
      if (editingUserId) {
        // Update existing user
        await fetch(`http://localhost:5000/api/users/${editingUserId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
      } else {
        // Add new user
        await fetch("http://localhost:5000/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
      }
      // Reset form
      setName("");
      setRole("");
      setSales("");
      setEditingUserId(null);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  // Edit user
  const handleEdit = (user) => {
    setName(user.name);
    setRole(user.role);
    setSales(user.sales);
    setEditingUserId(user._id);
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/users/${id}`, { method: "DELETE" });
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={styles.container} style={{ background: theme.background, color: theme.sidebarText }}>
      <h1>Users Management</h1>

      {/* Add / Edit User Form */}
      <div className={styles.card} style={{ background: theme.cardBg, color: theme.cardText }}>
        <h3>{editingUserId ? "Edit User" : "Add User"}</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Sales"
            value={sales}
            onChange={(e) => setSales(e.target.value)}
            required
          />
          <button type="submit">{editingUserId ? "Update" : "Add"}</button>
          {editingUserId && <button type="button" onClick={() => { setEditingUserId(null); setName(""); setRole(""); setSales(""); }}>Cancel</button>}
        </form>
      </div>

      {/* Users Table */}
      <div className={styles.tableWrapper} style={{ background: theme.cardBg, color: theme.cardText }}>
        <h2>Users List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Sales</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.role}</td>
                <td>{u.sales}</td>
                <td>
                  <button onClick={() => handleEdit(u)}>Edit</button>
                  <button onClick={() => handleDelete(u._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
