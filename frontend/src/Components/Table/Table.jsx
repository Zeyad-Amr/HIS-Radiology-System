// import React, { useState } from "react";
import "./Table.css";

// const Table = ({ list, headers }) => {
//   const [data, setData] = useState(list);

//   const getHeaders = headers.map((item, index) => {
//     return <th key={index}>{Object.values(item)[0]}</th>;
//   });

//   const fetchResult = data.map((item, idx) => {
//     return (
//       <tr key={item.id}>
//         {headers.map((cell, index) => {
//           console.log(item[Object.keys(cell)[0]]);
//           return <td key={index}>{item[Object.keys(cell)[0]]}</td>;
//         })}
//       </tr>
//     );
//   });

//   return (
//     <div className="moka">
//       <table className="table">
//         <thead>
//           <tr>{getHeaders}</tr>
//         </thead>
//         <tbody>{fetchResult}</tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
export default function Table({ width }) {
  const [pageSize, setPageSize] = React.useState(5);
  const widths = 1000;
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: widths * 0.15,
      headerAlign: "center",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "firstName",
      headerName: "First name",
      width: widths * 0.15,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: widths * 0.15,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
    },
    {
      field: "age",
      headerName: "Age",
      width: widths * 0.15,
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      align: "center",
      type: "number",
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 10, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 11, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 12, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 13, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 14, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 15, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 16, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 17, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 18, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 20, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 21, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 22, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 23, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 24, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 25, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 26, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 27, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 28, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 29, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <div style={{ height: 500, width: "65%", marginLeft: "25%" }}>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        columns={columns}
        rows={rows}
        checkboxSelection
        disableSelectionOnClick
        getRowClassName={(params) => `super-app-theme-row`}
      />
    </div>
  );
}
