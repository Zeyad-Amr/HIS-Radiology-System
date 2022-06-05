import React from "react";
import SideBar from "../SideBar/SideBar";
import Table from "../Table/Table";
import { useState, useEffect } from "react";
import axios from "../API/axios";

function AdminPage() {
  const [data, setData] = useState([]);
  const [width, setWidth] = useState(0);
  const square_ref = React.createRef();

  useEffect(() => {
    if (square_ref.current) {
      setWidth(square_ref.current.getBoundingClientRect().width);
    }
  }, []);

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
      <div className="sidebar-container">
        <SideBar />
      </div>

      <div className="table-container">
        {data.length > 0 ? (
          <Table
            list={data}
            headers={[
              { fname: "First Name" },
              { lname: "Last Name" },
              { email: "Email" },
              { role: "Role" },
              { username: "username" },
              { phone: "Phone" },
            ]}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default AdminPage;
