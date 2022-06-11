import { Typography,Grid,Paper,TextField,Button, Divider} from '@material-ui/core'

import React from 'react'

import '../RegisterStudent.css'
import Dateofbirth from '../Dateofbirth'
import Gender from '../Gender'
import DateofEntrance from '../DateofEntrance'

const RegisterStudEmplo = () => {

    const regse={padding: 20, height: '200vh', width:900, margin:"20px auto"}
  return (
    <Grid>
        <Paper elevation={20} style={regse}>
            <Grid>
                <h1>Registration Form  For Students</h1>
            </Grid>
          
            <Grid xs={12} className='regname'>
                <Grid xs={4}>
                <Typography>First Name</Typography>
                <TextField id="outlined-basic" label="FirstName" variant="outlined" />
                </Grid>
                <Grid xs={4}>
                <Typography>Middle Name</Typography>
                <TextField id="outlined-basic" label="MiddleName" variant="outlined" />
                </Grid>
                <Grid xs={4}>
                <Typography>Last Name</Typography>
                <TextField id="outlined-basic" label="LastName" variant="outlined" />
                </Grid>
                </Grid>
                <Grid className='divregname'>
       <Divider variant="middle" />
       </Grid>
            <Grid xs={12} className='regid'>
            <Grid xs={4} >
                <Typography>User Name</Typography>
                <TextField id="outlined-basic" label="UserName" variant="outlined" />
            </Grid>
            <Grid xs={4} >
                <Typography>Email</Typography>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
            </Grid>
            <Grid xs={4} >
                <Typography>Password</Typography>
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                </Grid>
            </Grid>
            <Grid className='divregid'>
       <Divider variant="middle" />
       </Grid>
       <Grid xs={12} className='reggender'>
           <Grid xs={6}>
               <Gender/>
           </Grid>
           <Grid xs={6}>
               <Typography>Birth Date</Typography>
               <Dateofbirth/>
           </Grid>
       </Grid>
       <Grid className='divreggender'>
       <Divider variant="middle" />
       </Grid>

            <Grid xs={12} className='regadd'>
            <Grid xs={4} >
                <Typography>City</Typography>
                <TextField id="outlined-basic" label="City" variant="outlined" />
            </Grid>
            <Grid xs={4} >
                <Typography>Wereda</Typography>
                <TextField id="outlined-basic" label="Wereda" variant="outlined" />
            </Grid>
            <Grid xs={4} >
                <Typography>HouseNo</Typography>
                <TextField id="outlined-basic" label="HouseNo" variant="outlined" />
                </Grid>
            </Grid>
            <Grid className='divregadd'>
       <Divider variant="middle" />
       </Grid>
            <Grid >
            <Typography>Emergency Contact</Typography>
            </Grid>
            <Grid xs={12} className='regemer'>
            <Grid xs={6} >
                <Typography>Full Name</Typography>
                <TextField id="outlined-basic" label="FullName" variant="outlined" />
            </Grid>
            <Grid xs={6} >
                <Typography>Phone Number</Typography>
                <TextField id="outlined-basic" label="PhoneNo" variant="outlined" />
            </Grid>   
            </Grid>
            <Grid className='divregemer'>
       <Divider variant="middle" />
       </Grid>
       <Grid xs={12} className='regentr'>
       <Grid xs={4} >
       <Typography>Date of Entrance</Typography>
        <DateofEntrance/>
            </Grid>
            <Grid xs={4} >
                <Typography>Block</Typography>
                <TextField id="outlined-basic" label="Block" variant="outlined" />
            </Grid> 
            <Grid xs={4} >
                <Typography>Dorm</Typography>
                <TextField id="outlined-basic" label="Dorm" variant="outlined" />
            </Grid> 
       </Grid>
       <Grid className='divregentr'>
       <Divider variant="middle" />
       </Grid>
       <Grid xs={12} className='regyear'>
       <Grid xs={4} >
       <Typography>Year</Typography>
       <TextField id="outlined-basic" label="Year" variant="outlined" />
            </Grid>
            <Grid xs={4} >
                <Typography>Department</Typography>
                <TextField id="outlined-basic" label="Department" variant="outlined" />
            </Grid> 
            <Grid xs={4} >
                <Typography>Section</Typography>
                <TextField id="outlined-basic" label="Section" variant="outlined" />
            </Grid> 
       </Grid>
       <Grid className='divregyear'>
       <Divider variant="middle" />
       </Grid>

            <Grid className='regbutton'>
            <Button variant="contained" color='primary'>Register</Button>

            </Grid>
        </Paper>
    </Grid>
  )
}

export default RegisterStudEmplo;