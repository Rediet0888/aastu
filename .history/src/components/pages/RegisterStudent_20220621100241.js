import React from 'react'
import { Typography,Grid,Paper,TextField,Button, Divider} from '@material-ui/core'
import { useState, useEffect} from 'react'
import '../RegisterStudent.css'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const axios = require('axios');

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

const RegisterStudent = () => {

  const baseURL = 'http://localhost:3000/users/create'

  const [user, setUser] = useState({})

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

const [emergencyphoneno, setEmergencyPhoneNo] = useState('')
const [emergencyphoneNoErrors, setEmergencyPhoneNoErrors] = useState({ emergencyphoneno: '' })

const [gender, setGender] = useState('')

const [wereda, setWereda] = useState('')

const [houseno, setHouseNo] = useState('')

const [datebirth, setDateBirth] = useState('')

const [dateentrance, setDateEntrance] = useState('')

const [block, setBlock] = useState('')

const [section, setSection] = useState('')

const [department, setDepartment] = useState('')

const [dorm, setDorm] = useState('')

const [year, setYear] = useState('')




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
  setFirstName(event.target.value)
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
  setMiddleName(event.target.value)
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
  setLastName(event.target.value)
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
  setEmail(event.target.value)
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
  setCity(event.target.value)
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
  setFullName(event.target.value)
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
  setPhoneNo(event.target.value)
  const reg = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/).test(value)

  if (!reg) {
    setPhoneNoErrors({ phoneno: 'Invalid number' })
  }
  if (value === '') {
    setPhoneNoErrors({ phoneno: 'Required' })
  }
};

const handleEmergencyPhoneNoChange = (event) => {
  const {
    target: { value }
  } = event
  setEmergencyPhoneNoErrors({ phoneno: '' })
  setEmergencyPhoneNo(event.target.value)
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
  setPassword(event.target.value)
  const reg = new RegExp( /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/).test(value)

  if (!reg) {
    setPasswordErrors({ password: 'Invalid password' })
  }

  if (value === '') {
    setPasswordErrors({ password: 'Password field cannot be empty' })
  }
}


  const regse={padding: 20, height: '200vh', width:900, margin:"20px auto"}
  const classes = useStyles();

  const createUser = () => {
    const body = {
        
          first_name: firstname,
          middle_name: middlename ,
          last_name:lastname ,
          password:password ,
          email: email,
          date_of_birth: datebirth ,
          sex: gender,
          phone_no: phoneno,
          city: city,
          //sub_city: ,
          wereda: wereda,
          house_no: houseno,
          emergency_contact_full_name: fullname,
          emergency_contact_phone: emergencyphoneno,
          date_of_entrance: dateentrance,
          year: year,
          department: department ,
          section: section,
          block: block,
          dorm: dorm ,
          role_type: "student" 
        }
        console.log("sds", body, )
        axios.post(baseURL, body,{
          headers: {
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "application/json",    }    })
        .then(res => {
          setUser(res.data);
        });
      }
      
      

  
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
                <Grid xs={6} >
                <Typography>Phone Number</Typography>
                <TextField id="outlined-basic" label="PhoneNo" error={Boolean(phoneNoErrors?.phoneno)}  helperText={phoneNoErrors?.phoneno} variant="outlined" value={phoneno}  onChange ={handlePhoneNoChange}  />
            </Grid> 
            </Grid>
            <Grid className='divregid'>
       <Divider variant="middle" />
       </Grid>
       <Grid xs={12} className='reggender'>
           <Grid xs={6}>
               {/* <Gender/> */}
               <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup onChange={e => {
                      setGender(e.target.value)
                    }}
                    value={gender} defaultValue="female" aria-label="gender" name="customized-radios">
        <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
        <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
      </RadioGroup>
    </FormControl>
           </Grid>
           <Grid xs={6}>
               <Typography>Birth Date</Typography>
               {/* <Dateofbirth/> */}
               <form className={classes.container} noValidate>
      <TextField
       onChange={e => {
        setDateBirth(e.target.value)
      }}
      value={datebirth}
        id="date"
        label="Birthday"
        variant='outlined'
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
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
                <TextField id="outlined-basic" label="Wereda" variant="outlined"  onChange={e => {
        setWereda(e.target.value)
      }}
      value={wereda} />
            </Grid>
            <Grid xs={4} >
                <Typography>HouseNo</Typography>
                <TextField id="outlined-basic" label="HouseNo" variant="outlined"  onChange={e => {
        setHouseNo(e.target.value)
      }}
      value={houseno}/>
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
                <TextField id="outlined-basic" label="Emergency Contact Phone Number" error={Boolean(emergencyphoneNoErrors?.phoneno)}  helperText={emergencyphoneNoErrors?.phoneno} variant="outlined" value={emergencyphoneno}  onChange ={handleEmergencyPhoneNoChange}  />
            </Grid>   
            </Grid>
            <Grid className='divregemer'>
       <Divider variant="middle" />
       </Grid>
       <Grid xs={12} className='regentr'>
       <Grid xs={4} >
       <Typography>Date of Entrance</Typography>
        {/* <DateofEntrance/> */}
        <form className={classes.container} noValidate>
      <TextField
      onChange={e => {
        setDateEntrance(e.target.value)
      }}
      value={dateentrance}
        id="date"
        label="Date of Entrance"
        variant='outlined'
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
            </Grid>
            <Grid xs={4} >
                <Typography>Block</Typography>
                <TextField id="outlined-basic" label="Block" variant="outlined" onChange={e => {
        setBlock(e.target.value)
      }}
      value={block} />
            </Grid> 
            <Grid xs={4} >
                <Typography>Dorm</Typography>
                <TextField id="outlined-basic" label="Dorm" variant="outlined" onChange={e => {
        setDorm(e.target.value)
      }}
      value={dorm} />
            </Grid> 
       </Grid>
       <Grid className='divregentr'>
       <Divider variant="middle" />
       </Grid>
       <Grid xs={12} className='regyear'>
       <Grid xs={4} >
       <Typography>Year</Typography>
       <TextField id="outlined-basic" label="Year" variant="outlined" onChange={e => {
        setYear(e.target.value)
      }}
      value={year}/>
            </Grid>
            <Grid xs={4} >
                <Typography>Department</Typography>
                <TextField id="outlined-basic" label="Department" variant="outlined" onChange={e => {
        setDepartment(e.target.value)
      }}
      value={department} />
            </Grid> 
            <Grid xs={4} >
                <Typography>Section</Typography>
                <TextField id="outlined-basic" label="Section" variant="outlined" onChange={e => {
        setSection(e.target.value)
      }}
      value={section}/>
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
                  onClick={createUser}>Register</Button>
            </Grid>
        </Paper>
    </Grid>
    
  )





  }


export default RegisterStudent;