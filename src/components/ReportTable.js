import React from "react";
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


function createData(number, item, qty, price) {
 return { number, item, qty, price };
}
  
const rows = [
 createData(1, "Rediet", "forbidden equipments", 2),
 createData(2, "Rediet", "caught in dorm of others", 2),
 createData(3, "Ruth", "not cleaning her stuffs", 1),
 createData(4, "Leul", "we donot know what he does", 1),
 createData(5, "Unknown", "unknown accusation", 4)
];
  
export default function ReportTable() {
  const tablestudent={padding :20,height:'80vh',width:400, margin:"20px auto"}
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
               {row.number}
             </TableCell>
             <TableCell align="right">{row.item}</TableCell>
             <TableCell align="right">{row.qty}</TableCell>
             <TableCell align="right">{row.price}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
   </Grid>
 );
}