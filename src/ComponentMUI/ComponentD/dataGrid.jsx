import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';
import {UseStyleD} from './style';
import { DataGrid } from '@material-ui/data-grid';

function DataGridComponent(){
   const styleD = UseStyleD();

   return(
      <Fragment>
         <Grid container justify='center' className={styleD.rootA} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>DataGrid</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid item xs={10} md={8} style={{height:'400px'}}>
                  <DataGrid rows={rows} columns={columns} pageSize={5} />
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

const columns = [
   { field: 'id', headerName: 'ID', width: 70 },
   { field: 'firstName', headerName: 'First name', width: 130 },
   { field: 'lastName', headerName: 'Last name', width: 130 },
   {
     field: 'age',
     headerName: 'Age',
     type: 'number',
     width: 90,
   },
   {
     field: 'fullName',
     headerName: 'Full name',
     description: 'This column has a value getter and is not sortable.',
     sortable: false,
     width: 160,
     valueGetter: (params) =>
       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
   },
 ];

 const rows = [
   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
 ];

export default DataGridComponent;