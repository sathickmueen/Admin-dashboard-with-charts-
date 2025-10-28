import React, { useEffect, useState } from "react";
import { getUsers } from "../api/userAPI";
import Charts from "../components/Charts";
import styles from "./SalesPage.module.css";

const SalesPage = ({ theme }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [roleFilter, setRoleFilter] = useState("All");
  const [minSales, setMinSales] = useState("");
  const [maxSales, setMaxSales] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data || []);
      setFilteredUsers(res.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  // Apply filters
  useEffect(() => {
    let temp = [...users];
    if (roleFilter !== "All") temp = temp.filter((u) => u.role === roleFilter);
    if (minSales !== "") temp = temp.filter((u) => u.sales >= Number(minSales));
    if (maxSales !== "") temp = temp.filter((u) => u.sales <= Number(maxSales));
    setFilteredUsers(temp);
  }, [roleFilter, minSales, maxSales, users]);

  const roles = ["All", ...new Set(users.map((u) => u.role))];

  const totalSales = filteredUsers.reduce((sum, u) => sum + u.sales, 0);
  const topUser = filteredUsers.reduce(
    (prev, curr) => (curr.sales > prev.sales ? curr : prev),
    { sales: 0, name: "-" }
  );

  return (
    <div className={styles.container} style={{ background: theme.background, color: theme.sidebarText }}>
      {/* Top summary cards */}
      <div className={styles.cards}>
        <div className={styles.card} style={{ background: theme.cardBg, color: theme.cardText }}>
          <h4>Total Sales</h4>
          <p>{totalSales}</p>
        </div>
        <div className={styles.card} style={{ background: theme.cardBg, color: theme.cardText }}>
          <h4>Total Users</h4>
          <p>{filteredUsers.length}</p>
        </div>
        <div className={styles.card} style={{ background: theme.cardBg, color: theme.cardText }}>
          <h4>Top Seller</h4>
          <p>{topUser.name} ({topUser.sales})</p>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filters} style={{ background: theme.cardBg, color: theme.cardText }}>
        <label>
          Role:{" "}
          <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
            {roles.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </label>
        <label>
          Min Sales:{" "}
          <input type="number" value={minSales} onChange={(e) => setMinSales(e.target.value)} />
        </label>
        <label>
          Max Sales:{" "}
          <input type="number" value={maxSales} onChange={(e) => setMaxSales(e.target.value)} />
        </label>
      </div>

      {/* Charts */}
      <div className={styles.charts}>
        {filteredUsers.length > 0 && <Charts users={filteredUsers} theme={theme} />}
      </div>

      {/* Bottom Table */}
      <div className={styles.tableWrapper} style={{ background: theme.cardBg, color: theme.cardText }}>
        <h2>Sales Details</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sales</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((u) => (
              <tr key={u._id}>
                <td>{u.name}</td>
                <td>{u.sales}</td>
                <td>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesPage;
