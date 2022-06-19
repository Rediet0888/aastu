import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react'

const LoginForm=()=>{

    const [email, setEmail] = useState('')
    const [emailErrors, setEmailErrors] = useState({ email: '' })

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
    
   
    
    return(
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><img src='/images/logo.jpg' alt=' ' width='40px'/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField error={Boolean(emailErrors?.email)}  helperText={emailErrors?.email} variant="outlined" value={email} onChange={handleEmailChange}  name='email' label='Email' placeholder='Enter email' fullWidth required/>
                
                
                <TextField  error={Boolean(passwordErrors?.password)}  helperText={passwordErrors?.password}  variant="outlined" value={password} onChange={handlePasswordChange} label='Password' placeholder='Enter password' type='password' fullWidth required/>
            
        
                <Button type='submit'  variant="contained" style={btnstyle} fullWidth
             color='primary'
            disabled={disableButton}
            size='large'
            onClick={LoginForm}>Sign in</Button>
                
                
                
            </Paper>
        </Grid>
    )
}

export default LoginForm