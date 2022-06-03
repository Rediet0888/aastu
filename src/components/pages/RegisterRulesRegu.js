import React from 'react';
import {Grid, Typography, Paper, TextField, Button} from "@material-ui/core"
import '../RegisterRulesRegu.css'

const RegisterRulesRegu = () => {

    const regrules={padding: 20, height: '70vh', width: 500, margin: "20px auto"}
  return (
   <Grid>
       <Paper elevation={20} style={regrules}>
           <Grid>
               <h1>Rules Registration Form</h1>
           </Grid>
           <Grid xs={12} className='ruleid'>
           <Grid xs={3}>
               <Typography>
                   RuleID
               </Typography></Grid>
               <Grid xs={9}>
               <TextField id="outlined-basic" label="RuleID" variant="outlined" /></Grid>
           </Grid>
           <Grid xs={12} className='rulename'>
           <Grid xs={3}>
               <Typography>
                   RuleName
               </Typography></Grid>
               <Grid xs={9}>
               <TextField id="outlined-basic" label="RuleName" variant="outlined" /></Grid>
           </Grid>
           <Grid xs={12} className='ruledes'>
           <Grid xs={3}>
               <Typography>
                   RuleDescription
               </Typography></Grid>
               <Grid xs={9}>
               <TextField
         id="outlined-textarea"
          label="Description"
          placeholder="Placeholder"
           multiline
         variant="outlined"
      />
      </Grid>
           </Grid>
           <Grid className='ruleregbutton'>
           <Button variant="contained" color='primary'>Register</Button>
           </Grid>
       </Paper>
   </Grid>
  )
}

export default RegisterRulesRegu;