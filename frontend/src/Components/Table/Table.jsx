import "./Table.css";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
export default function Table({ headers, list }) {
  const [pageSize, setPageSize] = React.useState(5);
  const [headersList, setHeadersList] = React.useState([]);

  React.useEffect(() => {
    const headersObj = headers.map((item) => {
      return {
        field: item.field,
        headerName: item.headerName,
        width: 120,
        headerAlign: "center",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
      };
    });
    setHeadersList(headersObj);
  }, [headersList]);

  return (
    <div style={{ height: 400, marginLeft: "20%", marginRight: "20px" }}>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        columns={headersList}
        rows={list}
        checkboxSelection
        disableSelectionOnClick
        getRowClassName={(params) => `super-app-theme-row`}
      />
    </div>
  );
}
