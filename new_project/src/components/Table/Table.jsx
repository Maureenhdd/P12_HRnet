import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Table = (props) => {
  const randomNumber = (max) => Math.floor(Math.random() * max);

  return (
    <DataGrid
      rows={props.localData}
      columns={props.columns}
      pageSize={10}
      getRowId={(localData) => localData.firstName + randomNumber(200)}
      rowsPerPageOptions={[10, 50, 100]}
      disableColumnFilter
      disableColumnSelector
      disableDensitySelector
      components={{ Toolbar: GridToolbar }}
      componentsProps={{
        toolbar: {
          showQuickFilter: true,
        },
      }}
    />
  );
};

export default Table;
