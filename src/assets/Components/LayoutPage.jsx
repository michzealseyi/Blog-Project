import React from "react";
import { Link } from "react-router-dom";
function Layout() {
  return (
    <div className="layout">
      <h2>NAMES</h2>
      <Link to="/">Home</Link> | <Link to="/newnames">New Names</Link>
    </div>
  );
}

export default Layout;
