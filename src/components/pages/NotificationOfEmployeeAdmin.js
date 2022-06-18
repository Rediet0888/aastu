import { Typography,Button, Grid } from '@material-ui/core'
import React from 'react'

const NotificationOfAdminEmployees = () => {
  return (
    <div>
      <Grid>
        New Post 
      </Grid>
      <Grid>
        <Typography>Preferement News</Typography>
          <p>efsmklghwigjkhzsoghroejhogzjdohbj0eiojdogjojhzroooooooooooooo</p>
      </Grid>
      <Grid>
        <Typography>Accusation Notifications</Typography>
        <p>someone is accused of murdercase </p>
        <Grid>
        <Button variant='outlined' color='primary'>Accept</Button>
        </Grid>
       
      </Grid>
      <Grid>
      <Typography>Complain Notifications</Typography>
      <p>i didn't do this</p>
        </Grid>
    </div>
  )
}

export default NotificationOfAdminEmployees;