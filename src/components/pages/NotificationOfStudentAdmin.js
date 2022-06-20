import { Typography, Grid,Paper } from '@material-ui/core'
import React from 'react'

const NotificationOfStudentAdmin = () => {

  
  const notifyStyle={padding :20,height:'30vh',width:200, margin:"20px auto"}
  return (
    <div>
          <Paper elevation={10} style={notifyStyle}>
      <Grid>
        New Post 
      </Grid>
     <Grid>
      <Typography>Date and Time</Typography>
     </Grid>
     <Grid>
      <Typography>Accusation </Typography>
     </Grid>
     <Grid>
      <Typography>Accused Person Name </Typography>
     </Grid>
     <Grid>
      <Typography>Accusor Name </Typography>
     </Grid>
     
      </Paper>
    </div>
  )
}

export default NotificationOfStudentAdmin;