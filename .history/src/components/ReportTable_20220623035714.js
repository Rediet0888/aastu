import {React, useEffect, useState} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { Grid,Button } from "@material-ui/core";
import './ReportTable.css'
import axios from 'axios'


function createData(number, item, qty, price) {
 return { number, item, qty, price };
}
  

export default function ReportTable() {
  const [rows, setRows] = useState([])
  const tablestudent={padding :20,height:'80vh',width:400, margin:"20px auto"}

  useEffect(() => {
    axios.get('http://localhost:3000/accusations').then(response => { setRows(response.data) })
  })
 return (
  <Grid>
    
  <Grid align='left' className="btnade">
    <Grid >
      <Button variant="contained" color="primary" ><AddBoxIcon/></Button>
    </Grid>
    <Grid >
      <Button variant="contained" color="primary" ><DeleteOutlineIcon/></Button>
    </Grid>
    <Grid >
      <Button variant="contained" color="primary" ><EditIcon/></Button>
    </Grid>
  </Grid>
   <TableContainer >
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>S.No</TableCell>
           <TableCell align="right">Name</TableCell>
           <TableCell align="right">Case</TableCell>
           <TableCell align="right">How many until now</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {rows.map((row) => (
           <TableRow key={row.number}>
             <TableCell component="th" scope="row">
               {row.id}
             </TableCell>
             <TableCell align="right">{row.accusation_title}</TableCell>
             <TableCell align="right">{row.accused}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
             {/* <Grid >
           <Button variant="contained" color="primary" ><DeleteOutlineIcon/></Button>
           </Grid>
           <Grid >
          <Button variant="contained" color="primary" ><EditIcon/></Button>
           </Grid> */}

           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   </Grid>
 );
}