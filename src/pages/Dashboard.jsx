import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div class="maindiv">
      <div class="dashboard">
        {" "}
        <h1 class="dash-header"> USER DASHBOARD</h1>
      </div>
      <Navbar />
    </div>
  );
};

export default Dashboard;
