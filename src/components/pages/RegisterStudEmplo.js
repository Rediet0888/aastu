import { Typography,Grid,Paper,TextField,Button } from '@material-ui/core'

import React from 'react'
import RegStudEmpSelect from '../RegStudEmpSelect'
import '../RegisterStudEmplo.css'

const RegisterStudEmplo = () => {

    const regse={padding: 20, height: '80vh', width:400, margin:"20px auto"}
  return (
    <Grid>
        <Paper elevation={20} style={regse}>
            <Grid>
                <h1>Registration Form </h1>
            </Grid>
            <Grid xs={12} className="register">
                <Grid xs={3}>
                <Typography>Register</Typography></Grid>
                <Grid xs={9}>
                <RegStudEmpSelect/></Grid>
            </Grid>
            <Grid xs={12} className='regname'>
                <Grid xs={3}>
                <Typography>Name</Typography></Grid>
                <Grid xs={9}>
                <TextField id="outlined-basic" label="Name" variant="outlined" /></Grid>
            </Grid>
            <Grid xs={12} className='regid'>
            <Grid xs={3} >
                <Typography>ID</Typography></Grid>
                <Grid xs={9} >
                <TextField id="outlined-basic" label="ID" variant="outlined" /></Grid>
            </Grid>
            <Grid xs={12} className='regdep'>
            <Grid xs={3} >
                <Typography>Department</Typography></Grid>
                <Grid xs={9} >
                <TextField id="outlined-basic" label="Department" variant="outlined" /></Grid>
            </Grid>
            <Grid className='regbutton'>
            <Button variant="contained" color='primary'>Register</Button>

            </Grid>
        </Paper>
    </Grid>
  )
}

export default RegisterStudEmplo;