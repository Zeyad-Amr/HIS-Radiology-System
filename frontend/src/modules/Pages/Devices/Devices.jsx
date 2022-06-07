import React from "react";
import Layout from "../../../shared/Layout/Layout";
import Table from "../../../shared/Table/Table";

const Devices = () => {
  return (
    <Layout>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          width: "100%",
          height: "100vh",
          // padding: "20px",
          position: "absolute",
          zIndex: "-1",
        }}
      >
        <Table
          list={[
            {
              id: 80,
              username: "zoz1234",
              email: "ahmed@gmail.com",
              password:
                "$2b$10$TQMJiqzKvJq/pXZHWaWnCOGJeHj9ZH1MGAD8Z8JEj5yyZP1Zw0W8G",
              create_time: null,
              fname: "Zeyad",
              lname: "Amr",
              bdate: "2001-07-10T21:00:00.000Z",
              gender: "null",
              phone: "1067662457",
              SSN: "01234527873221",
              address: "null",
              role: "patient",
              country: "null",
              user_id: null,
              salary: null,
              degree: null,
              shift: null,
              holidays: null,
              dep_id: null,
            },
            {
              id: 90,
              username: "zoz1234",
              email: "ahmed@gmail.com",
              password:
                "$2b$10$TQMJiqzKvJq/pXZHWaWnCOGJeHj9ZH1MGAD8Z8JEj5yyZP1Zw0W8G",
              create_time: null,
              fname: "Ahmed",
              lname: "Amr",
              bdate: "2001-07-10T21:00:00.000Z",
              gender: "null",
              phone: "1067662457",
              SSN: "01234527873221",
              address: "null",
              role: "patient",
              country: "null",
              user_id: null,
              salary: null,
              degree: null,
              shift: null,
              holidays: null,
              dep_id: null,
            },
            {
              id: 92,
              username: "zoz1234",
              email: "ahmed@gmail.com",
              password:
                "$2b$10$TQMJiqzKvJq/pXZHWaWnCOGJeHj9ZH1MGAD8Z8JEj5yyZP1Zw0W8G",
              create_time: null,
              fname: "Zeyad",
              lname: "Amr",
              bdate: "2001-07-10T21:00:00.000Z",
              gender: "null",
              phone: "1067662457",
              SSN: "01234527873221",
              address: "null",
              role: "patient",
              country: "null",
              user_id: null,
              salary: null,
              degree: null,
              shift: null,
              holidays: null,
              dep_id: null,
            },
          ]}
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
      </div>
    </Layout>
  );
};

export default Devices;
