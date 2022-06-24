import {React, useEffect} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link,Divider } from '@material-ui/core'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from 'react';
import Validation from '../Validation';
import '../Profile.css'
import axios from 'axios';


const Profile=()=>{

    
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
 
       

    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [records, setRecords] = useState([{}]);

    useEffect(() => {
        axios.get('http://localhost:3000/user').then(response => {
            setName(response.data.name);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            setRecords(response.data.records);
        })
    })
    
   
    
    return(
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>{name}</h2>
                    <Typography>{email}</Typography>
                </Grid>
                {/*<Grid className='recordname'>
                  <Grid xs={3}>
                <Typography>Name</Typography></Grid>
                <Grid xs={9}>
                <Typography>Rediet Solomon Legesse</Typography></Grid>
    </Grid>*/}
                
                <Grid className='div11'>
                  <Divider variant="middle" />
                     </Grid>
                <Grid align='center'><h4>Records</h4></Grid>
               {records.map((record) =>  <Grid xs={12} className='recordna'>
                 <Grid className='record1' xs={6}> 
                 <h4>Name</h4> 
                 <Typography>{record.name}</Typography>
                 </Grid>
                 <Grid className='record2' xs={3}>
                   <h4>Type</h4> 
                <Typography>{record.type}</Typography>
                 </Grid>
                 <Grid className='record3' xs={3}> 
                 <h4>Duration</h4>
                 <Typography>{record.duration}</Typography>
                 </Grid>
                </Grid>
                )}
                <Grid className='div12'>
                  <Divider variant="middle" />
                     </Grid>
           <Grid xs={12} className='logout' >        
    <Grid  xs={6} >
                 
      <Button onClick={handleFormSubmit} type='submit' color='primary' variant="contained" style={btnstyle} >Change Password</Button></Grid>
      <Grid xs={6}>
                       
      <Button onClick={handleFormSubmit} type='submit' color='primary' variant="contained" style={btnstyle} >Logout</Button> </Grid>
      </Grid> 
           </Paper> 
        </Grid>
    )
}

export default Profile
