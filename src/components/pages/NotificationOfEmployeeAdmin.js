import { Typography, Grid,Paper } from '@material-ui/core'
import React from 'react'

const NotificationOfEmployeeAdmin = () => {

  
  const notifyStyle={padding :20,height:'30vh',width:200, margin:"20px auto"}
  return (
    <div>
          <Paper elevation={10} style={notifyStyle}>
      <Grid>
        New Message 
      </Grid>
     <Grid>
      <Typography>Date and Time</Typography>
     </Grid>
     <Grid>
      <Typography>Accusation </Typography>
     </Grid>
     <Grid>
      <Typography>Accused person Name </Typography>
     </Grid>
     <Grid>
      <Typography>Accusor Name </Typography>
     </Grid>
      </Paper>
    </div>
  )
}

export default NotificationOfEmployeeAdmin;