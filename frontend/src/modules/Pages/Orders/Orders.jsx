import React from "react";
import Button from "../../../shared/Button/Button";
import Layout from "../../../shared/Layout/Layout";
import Table from "../../../shared/Table/Table";
import { useState, useEffect } from "react";
import axios from "../../../globals/API/axios";

const Orders = () => {
  const [data, setData] = useState([]);

  const geetData = async () => {
    const response = await axios
      .get(`/order`, {
        headers: {
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjYsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY1NDE5Nzg2NH0.iIt0uRUfctdqZAtBTV3E6ylE-8LK_2IwwQH0S5j_tTM",
        },
      })
      .then((response) => {
        const result = response.data;
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
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "30px",
          alignItems: "center",
        }}
      >
        <h1>Orders</h1>
        <Button onClick={() => {}} value={"Create"} />{" "}
      </div>
      <div style={{ width: "100%" }}>
        {data.length > 0 ? (
          <Table
            list={data}
            headers={[
              { field: "id", headerName: "ID", width: 70 },
              {
                field: "ptFname",
                headerName: "Patient First Name",
                width: 150,
              },
              { field: "ptLname", headerName: "Patient Last Name", width: 150 },
              { field: "ptPhone", headerName: "Phone" },
              { field: "ptSSN", headerName: "Nationality ID" },
              { field: "srvName", headerName: "Service" },
              {
                field: "recptUsername",
                headerName: "Creator Username",
                width: 150,
              },
              { field: "cost", headerName: "Cost (L.E)" },
              {
                field: "appt_start_time",
                headerName: "Appointment Time",
                width: 150,
              },
            ]}
          />
        ) : (
          <div style={{ position: "absolute", top: "50%", left: "45%" }}>
            No Data Found
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Orders;
