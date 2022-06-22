import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Divider from '@material-ui/core/Divider'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { Typography,TextField,Button } from '@material-ui/core'
import CaseTypeSelect from '../CaseTypeSelect'
import CaseNameSelect from '../CaseNameSelect'
import DatenTime from '../DatenTime'
import '../IncidentRegForm.css'

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

  const ppst={padding :20,height:'150vh',width:750, margin:"20px auto"}
  const witness = [
    { n: 'red' },
    { n: 'rehd' },
    { n: 'redj' },]
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
         <TextField id="outlined-basic" label="Accusor Name" variant="outlined" />
         </Grid>
         <Grid xs={6}>
           <h4>
            Accused
          </h4>
         {/* <TextField id="outlined-basic" label="Id" variant="outlined" /><br /><br /> */}
       <TextField id="outlined-basic" label="Name" variant="outlined" />
       </Grid></Grid>
    <Grid className='div'>
       <Divider variant="middle" />
       </Grid>
          <h4>
            Accussation Details
            </h4>
          <Grid xs={12} className="nametype">
            <Grid xs={6}>
            <CaseTypeSelect/>
            </Grid>
            <Grid xs={6}>
            <CaseNameSelect/>
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
           {witness.map((i) => {
                        return (
                            <Grid item xs={4}>
                              <Typography>Witness</Typography>
             <TextField id="standard-basic" label="Name" variant="standard" /><br />
             {/* <TextField id="standard-basic" label="Email" variant="standard" /><br />
             <TextField id="standard-basic" label="Verification" variant="standard" /> */}
                                
                            </Grid>

                        );
                    }

                    )}
             
           </Grid>
           <Grid className='div2'>
       <Divider variant="middle" />
       </Grid>
           
           <Grid className='button'>
           <Button variant="contained" color="primary">
        Send Accusation
      </Button>
           </Grid>
         
       </Paper>
     </Grid>
  )
}

export default IncidentRegForm;

 