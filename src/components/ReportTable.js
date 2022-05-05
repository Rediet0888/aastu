import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
  
function createData(number, item, qty, price) {
 return { number, item, qty, price };
}
  
const rows = [
 createData(1, "Rediet", "by boiling equipments", 2),
 createData(2, "Rediet", "caught in dorm of others", 2),
 createData(3, "Ruth", "not cleaning her stuffs", 1),
 createData(4, "Leul", "we donot know what he does", 1),
 createData(5, "Unknown", "unknown accusation", 4)
];
  
export default function ReportTable() {
 return (
   <TableContainer component={Paper}>
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
 );
}