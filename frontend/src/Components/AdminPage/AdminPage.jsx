import React from "react";
import SideBar from "../SideBar/SideBar";
import Table from "../Table/Table";
import { useState } from "react";
function AdminPage() {
  const [data, setData] = useState([]);

  return (
    <div className="container">
      <SideBar />
      <Table />
    </div>
  );
}

export default AdminPage;
