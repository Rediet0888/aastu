import React from 'react'
import {Grid,Paper,Typography,TextField,Button,Divider} from '@material-ui/core'
import DatenTime from '../DatenTime'
import '../ScheduleHearing.css'

const ScheduleHearing = () => {
    const schhear={padding :20,height:'100vh',width:500, margin:"20px auto"}
    
  return (

    <Grid>
        <Paper elevation={20} style={schhear}>
            <Grid>
                <h1>Schedule Hearing</h1>
            </Grid>
            <Grid className='accuseid' xs={12}>
                <Grid xs={6}>
                <Typography>
                    Accusation Id
                </Typography>
                <TextField id="outlined-basic" label="ID" variant="outlined" /> 
            </Grid>
            <Grid xs={6}>
                <Typography>
                    Accusation Name
                </Typography>
                <TextField id="outlined-basic" label="Name" variant="outlined" /> 
            </Grid>
            </Grid>
            <Grid className='div5'>
       <Divider variant="middle" />
       </Grid>
            <Grid xs={12} className='studname'>
                <Grid xs={6}>
                <Typography>
                    Accused Student Name
                </Typography>
                <TextField id="outlined-basic" label="StudentName" variant="outlined" /> 
            </Grid>
            <Grid xs={6} className='datetimesch'>
                <DatenTime/>
                 
            </Grid></Grid>
            <Grid className='div4'>
       <Divider variant="middle" />
       </Grid>
            <Grid>
                <Typography>
                   Judges
                </Typography>
                <Grid className='judge12' xs={12}>
                    <Grid xs={6}>
                <TextField id="outlined-basic" label="Judge1" variant="outlined" /> 
                </Grid>
                <Grid xs={6}>
                <TextField id="outlined-basic" label="Judge2" variant="outlined" />
                </Grid>
                </Grid>
                <Grid className='judge34' xs={12}>
                <Grid xs={6}>
                <TextField id="outlined-basic" label="Judge3" variant="outlined" /></Grid>
                <Grid xs={6}>
                <TextField id="outlined-basic" label="Judge4" variant="outlined" />
                </Grid>
                </Grid>
                <Grid className='judge5'>
                <TextField id="outlined-basic" label="Judge5" variant="outlined" /></Grid>
            </Grid>
            <Grid className='div6'>
       <Divider variant="middle" />
       </Grid>
            <Grid className='schedulebutton'>
            <Button variant="contained" color='primary'>Schedule</Button>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default ScheduleHearing