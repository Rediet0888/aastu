import { Typography,Grid,Paper,TextField,Button } from '@material-ui/core'

import React from 'react'
import RegStudEmpSelect from '../RegStudEmpSelect'

const RegisterStudEmplo = () => {

    const regse={padding: 20, height: '80vh', width:400, margin:"20px auto"}
  return (
    <Grid>
        <Paper elevation={20} style={regse}>
            <Grid>
                <h1>Registration Form</h1>
            </Grid>
            <Grid>
                <Typography>Register</Typography>
                <RegStudEmpSelect/>
            </Grid>
            <Grid>
                <Typography>Name</Typography>
                <TextField id="filled-basic" label="Name" variant="filled" />
            </Grid>
            <Grid>
                <Typography>ID</Typography>
                <TextField id="filled-basic" label="ID" variant="filled" />
            </Grid>
            <Grid>
                <Typography>Department</Typography>
                <TextField id="filled-basic" label="Department" variant="filled" />
            </Grid>
            <Grid>
            <Button variant="contained">Register</Button>

            </Grid>
        </Paper>
    </Grid>
  )
}

export default RegisterStudEmplo;