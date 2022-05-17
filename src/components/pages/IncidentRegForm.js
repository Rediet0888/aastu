import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Typography,TextField } from '@material-ui/core'
import CaseTypeSelect from '../CaseTypeSelect'
import CaseNameSelect from '../CaseNameSelect'

const IncidentRegForm = () => {

  const ppst={padding :20,height:'100vh',width:600, margin:"20px auto"}
  return(
     <Grid >
      <Paper elevation={20} style={ppst}>
        <Grid align='center'>
      <h1>AASTU Disciplinary Incicdents Registration Form</h1>
            </Grid>
            <Grid>
           <h4>
             Accuser
        </h4>
        <TextField id="filled-basic" label="Accusor Id" variant="filled" /><br /><br />
         <TextField id="filled-basic" label="Accusor Name" variant="filled" />
           <h4>
            Accused
          </h4>
         <TextField id="filled-basic" label="Id" variant="filled" /><br /><br />
       <TextField id="filled-basic" label="Name" variant="filled" />
       </Grid>
          <h4>
            Accussation Details
            </h4>
          <Grid>
            <CaseTypeSelect/>
            <CaseNameSelect/>
             
     </Grid>
            <Grid>
              <Typography>Case Details</Typography>
          <TextField
         id="filled-textarea"
          label="Description of Case"
          placeholder="Placeholder"
           multiline
         variant="filled"
      />
       <Typography>Date</Typography>
         
         </Grid>   
       </Paper>
     </Grid>
  )
}

export default IncidentRegForm;

 