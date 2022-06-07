import "./Table.css";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
export default function Table({ headers, list, onClick }) {
  const [pageSize, setPageSize] = React.useState(5);
  const [headersList, setHeadersList] = React.useState([]);

  React.useEffect(() => {
    const headersObj = headers.map((item) => {
      return {
        field: item.field,
        headerName: item.headerName,
        width: item.width ? item.width : 120,
        headerAlign: "center",
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
        align: "center",
      };
    });
    setHeadersList(headersObj);
  }, [headersList]);

  return (
    <div style={{ height: 450, marginLeft: "30px", marginRight: "30px" }}>
      <DataGrid
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        columns={headersList}
        rows={list}
        // checkboxSelection
        disableSelectionOnClick
        getRowClassName={(params) => `super-app-theme-row`}
        onCellClick={(params, event) => onClick(params.row)}
      />
    </div>
  );
}
