import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Navbar from "../../components/Navbar/Navbar";
const SPACED_DATE_FORMAT = "DD MMM YYYY";

const columns = [
  // { field: "First", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: "startDate",
    headerName: "Start Date",
    type: "date",
    width: 150,
    valueGetter: ({ value }) => value && new Date(value),
  },
  {
    field: "department",
    headerName: "Department",
    width: 150,
  },
  {
    field: "birthDate",
    headerName: "Date of Birth",
    type: "date",
    width: 150,
    valueGetter: ({ value }) => value && new Date(value),
  },
  {
    field: "street",
    headerName: "Street",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
  {
    field: "state",
    headerName: "State",
    width: 150,
  },
  {
    field: "zipCode",
    headerName: "ZipCode",
    width: 150,
  },
];
const EmployeeList = () => {
  const localData = JSON.parse(localStorage.getItem("employees"));
  const randomNumber = (max) => Math.floor(Math.random() * max);
  return (
    <>
      <Navbar />
      <div
        style={{
          height: 600,
          width: "70%",
          backgroundColor: "white",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          padding: 30,
        }}
      >
        <DataGrid
          rows={localData}
          columns={columns}
          pageSize={10}
          getRowId={(localData) => localData.firstName + randomNumber(200)}
          rowsPerPageOptions={[10, 50, 100]}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          disableExportSelector
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              // quickFilterProps: { debounceMs: 500 },
            },
          }}
        />
      </div>
    </>
  );
};

export default EmployeeList;
