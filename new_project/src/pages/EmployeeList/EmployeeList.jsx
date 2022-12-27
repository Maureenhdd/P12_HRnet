import * as React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import "../EmployeeList/EmployeeList.scss";

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
  return (
    <>
      <Navbar />

      <div className="table_block">
        {localData === null ? (
          <>
            <h1>Il n'y a aucun employé inscrit</h1>
            <Link to="/">Ajouter des Employés</Link>
          </>
        ) : (
          <Table localData={localData} columns={columns} />
        )}
      </div>
    </>
  );
};

export default EmployeeList;
