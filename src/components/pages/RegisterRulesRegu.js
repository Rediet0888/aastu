import React from 'react';
import {Grid, Typography, Paper, TextField, Button} from "@material-ui/core"

const RegisterRulesRegu = () => {

    const regrules={padding: 20, height: '80vh', width: 300, margin: "20px auto"}
  return (
   <Grid>
       <Paper elevation={20} style={regrules}>
           <Grid>
               <h1>Rules and Regulatuion Registration Form</h1>
           </Grid>
           <Grid>
               <Typography>
                   RuleID
               </Typography>
               <TextField id="filled-basic" label="RuleID" variant="filled" />
           </Grid>
           <Grid>
               <Typography>
                   RuleName
               </Typography>
               <TextField id="filled-basic" label="RuleName" variant="filled" />
           </Grid>
           <Grid>
               <Typography>
                   RuleDescription
               </Typography>
               <TextField
         id="filled-textarea"
          label="Description"
          placeholder="Placeholder"
           multiline
         variant="filled"
      />
           </Grid>
           <Grid>
           <Button variant="contained">Register</Button>
           </Grid>
       </Paper>
   </Grid>
  )
}

export default RegisterRulesRegu;