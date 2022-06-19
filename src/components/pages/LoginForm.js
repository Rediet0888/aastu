import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import Validation from '../Validation';
import ChooseUser from '../ChooseUser';


const LoginForm=()=>{

    
       const [values, setValues] = useState({
           username: "",
           password: "",
       } );
       const handleChange =(event) =>{
           setValues({
               ...values,
               [event.target.name]: event.target.value,
           })
       }

       const handleFormSubmit = (event) => {
           setErrors(Validation(values));
           event.preventDefault();
       };

 const [errors, setErrors] = useState({});
 
       

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
                <Grid>
                    <ChooseUser/>
                </Grid>
                <TextField value={values.username} name='username' onChange={handleChange} label='Username' placeholder='Enter username' fullWidth required/>
                {errors.username && <p className="error">{errors.username}</p>
                }
                <TextField value={values.password} name='password' onChange={handleChange} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                {errors.password && <p className="error">{errors.password}</p>}
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    
    
                    }
                    label="Remember me"
                 />
                <Button onClick={handleFormSubmit} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth
            
                >Sign in</Button>
               
                
            </Paper>
        </Grid>
    )
}

export default LoginForm