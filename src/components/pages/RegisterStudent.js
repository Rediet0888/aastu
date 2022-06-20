import { Typography,Grid,Paper,TextField,Button, Divider} from '@material-ui/core'

import React from 'react'
import { useState} from 'react'
import '../RegisterStudent.css'
import Dateofbirth from '../Dateofbirth'
import Gender from '../Gender'
import DateofEntrance from '../DateofEntrance'

const RegisterStudEmplo = () => {
    const [email, setEmail] = useState('')
const [emailErrors, setEmailErrors] = useState({ email: '' })

const [city, setCity] = useState('')
const [cityErrors, setCityErrors] = useState({ city: '' })

const [password, setPassword] = useState('')
const [passwordErrors, setPasswordErrors] = useState({ password: '' })

const [firstname, setFirstName] = useState('')
const [firstNameErrors, setFirstNameErrors] = useState({ firstname: '' })

const [middlename, setMiddleName] = useState('')
const [middleNameErrors, setMiddleNameErrors] = useState({ middlename: '' })

const [lastname, setLastName] = useState('')
const [lastNameErrors, setLastNameErrors] = useState({ lastname: '' })

const [fullname, setFullName] = useState('')
const [fullNameErrors, setFullNameErrors] = useState({ fullname: '' })

const [phoneno, setPhoneNo] = useState('')
const [phoneNoErrors, setPhoneNoErrors] = useState({ phoneno: '' })

const disableButton = 
    emailErrors?.email ||
    !email ||
    cityErrors?.city||
    !city ||
    passwordErrors?.password ||
    !password ||
    lastNameErrors?.lastname ||
    !lastname ||
    fullNameErrors?.fullname ||
    !fullname ||
    firstNameErrors?.firstname||
    !firstname ||
    middleNameErrors?.middlename ||
    !middlename ||
    phoneNoErrors?.phoneno ||
    !phoneno
      ? true
      : false

const handleFirstNameChange = (event) => {
    const {
      target: { value }
    } = event
    setFirstNameErrors({ firstname: '' })
    setFirstName(value)
    const reg = new RegExp(/^[A-Za-z][A-Za-z0-9_]{2,29}$/).test(value)

    if (!reg) {
      setFirstNameErrors({ firstname: 'Invalid name' })
    }
    if (value === '') {
      setFirstNameErrors({ firstname: 'name field cannot be empty' })
    }
  };

  const handleMiddleNameChange = (event) => {
    const {
      target: { value }
    } = event
    setMiddleNameErrors({ middlename: '' })
    setMiddleName(value)
    const reg = new RegExp(/^[A-Za-z][A-Za-z0-9_]{2,29}$/).test(value)

    if (!reg) {
      setMiddleNameErrors({ middlename: 'Invalid name' })
    }
    if (value === '') {
      setMiddleNameErrors({ middlename: 'name field cannot be empty' })
    }
  };

  const handleLastNameChange = (event) => {
    const {
      target: { value }
    } = event
    setLastNameErrors({ lastname: '' })
    setLastName(value)
    const reg = new RegExp(/^[A-Za-z][A-Za-z0-9_]{2,29}$/).test(value)

    if (!reg) {
      setLastNameErrors({ lastname: 'Invalid name' })
    }
    if (value === '') {
      setLastNameErrors({ lastname: 'name field cannot be empty' })
    }
  };

 
const handleEmailChange = (event) => {
    const {
      target: { value }
    } = event
    setEmailErrors({ email: '' })
    setEmail(value)
    const reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(value)

    if (!reg) {
      setEmailErrors({ email: 'Invalid email' })
    }
    if (value === '') {
      setEmailErrors({ email: 'Email field cannot be empty' })
    }
  };

  const handleCityChange = (event) => {
    const {
      target: { value }
    } = event
    setCityErrors({ city: '' })
    setCity(value)
    const reg = new RegExp(/^[a-zA-Z\s\.]*$/).test(value)

    if (!reg) {
      setCityErrors({ city: 'Invalid name' })
    }
    if (value === '') {
      setCityErrors({ city: 'City field cannot be empty' })
    }
  };

  const handleFullNameChange = (event) => {
    const {
      target: { value }
    } = event
    setFullNameErrors({ fullname: '' })
    setFullName(value)
    const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

    if (!reg) {
      setFullNameErrors({ fullname: 'Invalid name' })
    }
    if (value === '') {
      setFullNameErrors({ fullname: 'name field cannot be empty' })
    }
  };

  const handlePhoneNoChange = (event) => {
    const {
      target: { value }
    } = event
    setPhoneNoErrors({ phoneno: '' })
    setPhoneNo(value)
    const reg = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/).test(value)

    if (!reg) {
      setPhoneNoErrors({ phoneno: 'Invalid number' })
    }
    if (value === '') {
      setPhoneNoErrors({ phoneno: 'Required' })
    }
  };

const handlePasswordChange = (event) => {
    const {
      target: { value }
    } = event
    setPasswordErrors({ password: '' })
    setPassword(value)
    const reg = new RegExp( /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/).test(value)

    if (!reg) {
      setPasswordErrors({ password: 'Invalid password' })
    }

    if (value === '') {
      setPasswordErrors({ password: 'Password field cannot be empty' })
    }
  }


    const regse={padding: 20, height: '155vh', width:900, margin:"20px auto"}
  return (
    <Grid>
        <Paper elevation={20} style={regse}>
            <Grid>
                <h1>Registration Form  For Students</h1>
            </Grid>
          
            <Grid xs={12} className='regname'>
                <Grid xs={4}>
                <Typography>First Name</Typography>
                <TextField id="outlined-basic" label="FirstName" error={Boolean(firstNameErrors?.firstname)}  helperText={firstNameErrors?.firstname} variant="outlined" value={firstname} onChange={handleFirstNameChange}/>
                </Grid>
                <Grid xs={4}>
                <Typography>Middle Name</Typography>
                <TextField id="outlined-basic" label="MiddleName" error={Boolean(middleNameErrors?.middlename)}  helperText={middleNameErrors?.middlename} variant="outlined" value={middlename} onChange={handleMiddleNameChange} />
                </Grid>
                <Grid xs={4}>
                <Typography>Last Name</Typography>
                <TextField id="outlined-basic" label="LastName" error={Boolean(lastNameErrors?.lastname)}  helperText={lastNameErrors?.lastname} variant="outlined" value={lastname} onChange={handleLastNameChange} />
                </Grid>
                </Grid>
                <Grid className='divregname'>
       <Divider variant="middle" />
       </Grid>
            <Grid xs={12} className='regid'>

            <Grid xs={4} >
                <Typography>Email</Typography>
                <TextField id="outlined-basic" label="Email" error={Boolean(emailErrors?.email)}  helperText={emailErrors?.email} variant="outlined" value={email} onChange={handleEmailChange} />
            </Grid>
            <Grid xs={4} >
                <Typography>Password</Typography>
                <TextField id="outlined-basic" label="Password" error={Boolean(passwordErrors?.password)}  helperText={passwordErrors?.password}  variant="outlined" value={password} onChange={handlePasswordChange} />
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
                <TextField id="outlined-basic" label="City" error={Boolean(cityErrors?.city)}  helperText={cityErrors?.city} variant="outlined" value={city} onChange={handleCityChange} />
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
                <TextField id="outlined-basic" label="FullName" error={Boolean(fullNameErrors?.fullname)}  helperText={fullNameErrors?.fullname} variant="outlined" value={fullname} onChange={handleFullNameChange} />
            </Grid>
            <Grid xs={6} >
                <Typography>Phone Number</Typography>
                <TextField id="outlined-basic" label="PhoneNo" error={Boolean(phoneNoErrors?.phoneno)}  helperText={phoneNoErrors?.phoneno} variant="outlined" value={phoneno}  onChange ={handlePhoneNoChange}  />
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
            <Button variant="contained" color='primary'
                  disabled={disableButton}
                  size='large'
                  type='submit'
                  onClick={RegisterStudEmplo}>Register</Button>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default RegisterStudEmplo;