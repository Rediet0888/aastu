import * as React from 'react';
import data from '../../data/LocalStudents'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'department',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'blah',
    headerName: 'blah',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  }
];



export default function StudentList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <p>sdome</p>
      {/* <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      /> */}
    </div>
  );
}
