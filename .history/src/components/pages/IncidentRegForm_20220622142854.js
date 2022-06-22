import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useState, useEffect} from 'react'


import Divider from '@material-ui/core/Divider'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Typography,TextField,Button } from '@material-ui/core'
import CaseTypeSelect from '../CaseTypeSelect'
import CaseNameSelect from '../CaseNameSelect'
import DatenTime from '../DatenTime'
import '../IncidentRegForm.css'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {  useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
  },
  appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: 'gray',
  },
  drawer: {
      width: drawerWidth,
      flexShrink: 0,
  },
  drawerPaper: {
      width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  /*Toolbar:{backgroundColor:"gray" },*/
  content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
  },
}));




const IncidentRegForm = () => {

  const baseURL = 'http://localhost:3000/accusations/create'

 const [accusation, setAccusation] = useState({})

  const [accuser, setAccuser] = useState({})

  const [accused, setAccused] = useState({})

  const [casedetail, setCaseDetail] = useState({})

  const [witness1, setWitness1] = useState({})

  const [witness2, setWitness2] = useState({})

  const [witness3, setWitness3] = useState({})

  const [casename, setCaseName] = useState({})

  const [casetype, setCaseType] = useState({})



  const IncidentRegistration = () =>{
    const body = {
      accusation_title: casename,
      accusation_type: casetype ,
      accusation_detail:casedetail ,
      // accusation_file:,
      accusor: accuser,
      accused: accused,//accused can be students or employees and it is a foreign  key from student and employee names
      witness1: witness1,
      witness2: witness2 ,
      witness3: witness3,
      // verifiedBy: 

    }
    console.log("accusation", body, )
    axios.post(baseURL, body,{
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Content-Type": "application/json",
        "Authorization": "Bearer ${token}",    }    })
    .then(res => {
      setAccusation(res.data);
      if(setAccusation(res.data)){
        navigate('components/pages/admindashboard')
      }
      else{
        setRegistrationError(true)
        console.log("unable to register the accusation")
      }
    });
  }
   
  
  }

  const ppst={padding :20,height:'150vh',width:750, margin:"20px auto"}
  // const witness = [
  //   { n: 'red' },
  //   { n: 'rehd' },
  //   { n: 'redj' },]
    const classes = useStyles();

  return(
     <Grid >
      <Paper elevation={20} style={ppst}>
        <Grid align='center'>
      <h1> Incidents Registration Form</h1>

            </Grid>
            <Grid xs={12} className="accuse">
            <Grid xs={6}>
           <h4>
             Accuser
        </h4>
        {/* <TextField id="outlined-basic" label="Accusor Id" variant="outlined" /><br /><br /> */}
         <TextField id="outlined-basic" label="Accuser Name" variant="outlined" onChange={e => {
        setAccuser(e.target.value)
      }}
      value={accuser}  />
         </Grid>
         <Grid xs={6}>
           <h4>
            Accused
          </h4>
         {/* <TextField id="outlined-basic" label="Id" variant="outlined" /><br /><br /> */}
       <TextField id="outlined-basic" label="Name" variant="outlined"  onChange={e => {
        setAccused(e.target.value)
      }}
      value={accused}  />
       </Grid></Grid>
    <Grid className='div'>
       <Divider variant="middle" />
       </Grid>
          <h4>
            Accussation Details
            </h4>
          <Grid xs={12} className="nametype">
            <Grid xs={6}>
            {/* <CaseTypeSelect/> */}
        <FormControl component="fieldset">
          <FormLabel component="legend">Case Type</FormLabel>
            <RadioGroup onChange={e => {
                      setCaseType(e.target.value)
                    }}
                    value={casetype} defaultValue="low-penality" aria-label="low-penality" name="customized-radios">
          <FormControlLabel value="low-penality" control={<StyledRadio />} label="low-penality" />
        <FormControlLabel value="medium-penality" control={<StyledRadio />} label="medium-penality" />
        <FormControlLabel value="high-penality" control={<StyledRadio />} label="high-penality" />
      </RadioGroup>
        </FormControl>
            </Grid>
            <Grid xs={6}>
            {/* <CaseNameSelect/> */}
            <FormControl component="fieldset">
          <FormLabel component="legend">Case Name</FormLabel>
            <RadioGroup onChange={e => {
                      setCaseName(e.target.value)
                    }}
                    value={casename} defaultValue="Untidiness" aria-label="low-penality" name="customized-radios">
          <FormControlLabel value="Drug abuse" control={<StyledRadio />} label="low-penality" />
        <FormControlLabel value="Using forbidden equipments" control={<StyledRadio />} label="medium-penality" />
        <FormControlLabel value="Untidiness" control={<StyledRadio />} label="high-penality" />
        <FormControlLabel value="Abusing the rights of others" control={<StyledRadio />} label="high-penality" />
        <FormControlLabel value="Disobeying procters and other staff members" control={<StyledRadio />} label="high-penality" />
        <FormControlLabel value="Coming late to work" control={<StyledRadio />} label="high-penality" />
        <FormControlLabel value="Disrespecting coworkers" control={<StyledRadio />} label="high-penality" />

      </RadioGroup>
        </FormControl>
            </Grid>
     </Grid>
     <Grid xs={12} className="details">
            <Grid xs={6}>
              <Typography>Case Details</Typography>
          <TextField
         id="outlined-textarea"
          label="Description of Case"
          placeholder="Placeholder"
           multiline
         variant="outlined"
         onChange={e => {
          setCaseDetail(e.target.value)
        }}
        value={casedetail}  
      />
      </Grid>
      <Grid xs={6}>
       <DatenTime/>
       </Grid>
       </Grid>
       <Grid className='div1'>
       <Divider variant="middle" />
       </Grid>
         {/* <Typography>Witness</Typography>
         
         <Divider variant="middle" /> */}
    
           <Grid  xs={12} container spacing={3}>
           {/* {witness.map((i) => { */}
                        {/* return ( */}
                            <Grid item xs={4}>
                              <Typography>Witness-1</Typography>
             <TextField id="standard-basic" label="Name" variant="standard"
              onChange={e => {
          setWitness1(e.target.value)
        }}
        value={witness1}  
        /><br />
         </Grid>
             {/* <TextField id="standard-basic" label="Email" variant="standard" /><br />
             <TextField id="standard-basic" label="Verification" variant="standard" /> */}
                                           <Grid item xs={4}>
                              <Typography>Witness-2</Typography>
             <TextField id="standard-basic" label="Name" variant="standard"
                     onChange={e => {
                      setWitness2(e.target.value)
                    }}
                    value={witness2} 
                 /><br />
                 </Grid>
                 <Grid item xs={4}>
                              <Typography>Witness-3</Typography>
             <TextField id="standard-basic" label="Name" variant="standard"
                     onChange={e => {
                      setWitness3(e.target.value)
                    }}
                    value={witness3} 
                 /><br />
                 </Grid>
                           
             
           </Grid>
           <Grid className='div2'>
       <Divider variant="middle" />
       </Grid>
           
           <Grid className='button'>
           <Button variant="contained" color="primary" type = 'submit' onClick = {IncidentRegistration}>
        Send Accusation
      </Button>
           </Grid>
         
       </Paper>
     </Grid>
  )


export default IncidentRegForm;

 