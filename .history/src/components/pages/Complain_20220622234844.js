
import React from 'react'
import { Grid, Typography,Paper, TextField,Button } from '@material-ui/core'
import '../Complain.css'

const Complain = () => {
    const complain={padding :40,height:'80vh',width:400, margin:"20px auto"}
  return (
    <Grid>
        <Paper elevation={10} style={complain}>
            <Grid align='center'>
                <h1>Complaint Form</h1>
            </Grid>
            {/* <Grid className='userid' xs={12}>
                <Grid xs={2}>
                <Typography>User Id</Typography></Grid>
                <Grid xs={10}>
                <TextField id='outlined-basic' label="Userid" variant='outlined' fullWidth/></Grid>
            </Grid> */}
           
            <Grid className='complaintitle' xs={12}>
                <Grid xs={2}>
                <Typography>Title</Typography>
                </Grid>
                <Grid xs={10}>
                <TextField id="outlined-basic" label="Complain Title" variant="outlined"  fullWidth/> 
                </Grid>
            </Grid>
            <Grid className='detailcomplain' xs={12}>
                <Grid xs={2}>
                <Typography>Description</Typography>
                </Grid>
                <Grid xs={10}>
                <TextField
         id="outlined-textarea"
          label="Description of the Complain"
          placeholder="Placeholder"
           multiline
         variant="outlined"
         fullWidth
      />
      </Grid>
            </Grid>
           
            <Grid className='btncomplain'>
            <Button variant="contained" color="primary" >Send Complaint</Button>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default Complain;