import React from "react";
import SideBar from "../../shared/SideBar/SideBar";
import Table from "../../shared/Table/Table";
import { useState, useEffect } from "react";
import axios from "../../globals/API/axios";

function AdminPage() {
  const [data, setData] = useState([]);
  const square_ref = React.createRef();

  const geetData = async () => {
    const response = await axios
      .get(`/users`, {
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY1NDE5Nzg2NH0.iIt0uRUfctdqZAtBTV3E6ylE-8LK_2IwwQH0S5j_tTM",
        },
      })
      .then((response) => {
        const result = response.data.data;
        console.log(result);
        if (result.length > 0) {
          setData(result);
        }
      });
  };
  useEffect(() => {
    geetData();
    console.log(data);
  }, []);

  return (
    <div className="Container">
      <SideBar />

      <div
        style={{
          marginLeft: "80%",
          padding: "10px",
          height: "80px",
          width: "120px",
        }}
      >
        <button
          style={{
            // padding: "20px",
            height: "40px",
            width: "90px",
            borderRadius: "20px",
            fontSize: "15px",
          }}
        >
          Create
        </button>
      </div>
      {data.length > 0 ? (
        <Table
          list={data}
          headers={[
            { field: "id", headerName: "ID" },
            { field: "username", headerName: "Username" },
            { field: "fname", headerName: "First Name" },
            { field: "lname", headerName: "Last Name" },
            { field: "email", headerName: "Email" },
            { field: "phone", headerName: "Phone" },
            { field: "SSN", headerName: "SSN" },
            { field: "role", headerName: "Role" },
          ]}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default AdminPage;
