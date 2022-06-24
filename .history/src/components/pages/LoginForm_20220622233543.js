import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';


import { useState } from 'react';

// import ChooseUser from '../ChooseUser';
import '../LoginForm.css'
import {  useNavigate } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';

const LoginForm=(props)=>{

  const [open, setOpen] = React.useState(false);

        const handleClick = () => {
          setOpen(true);
        };
      
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
        };

  
    const [email, setEmail] = useState('')
    const [emailErrors, setEmailErrors] = useState({ email: '' })
    const [errorMessage, setErrorMessage] = useState('');



    const [login, setLogin] = useState('')
    const [loginErrors, setLoginErrors] = useState(false)

    const [password, setPassword] = useState('')
const [passwordErrors, setPasswordErrors] = useState({ password: '' })

const disableButton = 
    emailErrors?.email ||
    !email ||
    passwordErrors?.password||
    !password 
      ? true
      : false
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

    const paperStyle={padding :20,height:'60vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    
    const navigate = useNavigate();

    const authUser = () =>{
      const baseURL = 'http://localhost:3000/users/login'
      console.log("hiiii")
      
      const body = {
        email: email,
        password: password
      }
      console.log(body);
      axios.post(baseURL,body,{
        headers:{
          "Access-Control-Allow-Headers": "*",
          "Content-Type": "application/json"
        }
       
      }).then(res => {
        console.log(res.data);
        
        if(res.data.message==="Authentication Successful"){
          window.localStorage.setItem("token", res.data.token)
          window.localStorage.setItem("role_type", res.data.role_type)
          window.localStorage.setItem("userId", res.data.userId)
          if(res.data.role_type === "student" || res.data.role_type === "Student"){
            navigate('components/pages/Student')
          }else if(res.data.role_type === "StudentAdmin"){
            navigate('components/pages/StudentAdmin')
          }else if(res.data.role_type === "Admin" || res.data.role_type === "admin"){
            navigate('components/pages/Admin')
          }else if(res.data.role_type === "EmployeeAdmin"){
            navigate('components/pages/EmployeeAdmin')
          }
          console.log("you are right" + res.data.message)
        }else{

          setLoginErrors(true)
          console.log("Invalid Credentials");
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Invalid Credentials please try again!
          </Alert>
        </Snackbar>
          navigate('/')
          console.log("errorrrr"+ res.data.message)
        }
      })
    }
    

    return(
        <Grid spacing={5}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><img src='/image/logo.jpg' alt=' ' width='40px'/></Avatar>
                    <h2>Sign In</h2>
                    <Typography color={loginErrors ? 'red' : 'green'} variant='body2'>
              {loginErrors ? 'Please enter valid credentials' : 'Please sign-in to your account'}
            </Typography> 
                    {/* <p>{ loginErrors ? "enter valid credentials" : ""}</p> */}
                </Grid>
                
                <Grid className='user'>

                <TextField error={Boolean(emailErrors?.email)}  helperText={emailErrors?.email} variant="outlined" value={email} onChange={handleEmailChange}  name='email' label='Email' placeholder='Enter email' fullWidth required/>
                </Grid>
                
                <Grid className='pass'>

                <TextField  error={Boolean(passwordErrors?.password)}  helperText={passwordErrors?.password}  variant="outlined" value={password} onChange={handlePasswordChange} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                </Grid>
            
        <Link to="/Student">
                <Button type='submit'  variant="contained" style={btnstyle} fullWidth
             color='primary'
            disabled={disableButton}
            size='large'
            onClick = {authUser}     
            >Sign in</Button>
                </Link>
                
                
            </Paper>
        </Grid>
    )
}

export default LoginForm