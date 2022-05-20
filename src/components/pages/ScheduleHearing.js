import React from 'react'
import {Grid,Paper,Typography,TextField,Button} from '@material-ui/core';

const ScheduleHearing = () => {
    const schhear={padding :20,height:'100vh',width:500, margin:"20px auto"}
  return (

    <Grid>
        <Paper elevation={20} style={schhear}>
            <Grid>
                <h1>Schedule Hearing</h1>
            </Grid>
            <Grid>
                <Typography>
                    Accusation Id
                </Typography>
                <TextField id="standard-basic" label="ID" variant="standard" /> 
            </Grid>
            <Grid>
                <Typography>
                    Accusation Name
                </Typography>
                <TextField id="standard-basic" label="Name" variant="standard" /> 
            </Grid>
            <Grid>
                <Typography>
                    Accused Student Name
                </Typography>
                <TextField id="standard-basic" label="StudentName" variant="standard" /> 
            </Grid>
            <Grid>
                <Typography>
                   Date of Hearing
                </Typography>
                <TextField id="standard-basic" label="Date" variant="standard" /> 
            </Grid>
            <Grid>
                <Typography>
                   Time of Hearing
                </Typography>
                <TextField id="standard-basic" label="Time" variant="standard" />
                 
            </Grid>
            <Grid>
                <Typography>
                   Judges
                </Typography>
                <TextField id="standard-basic" label="Judge1" variant="standard" /> 
                <TextField id="standard-basic" label="Judge2" variant="standard" />
                <TextField id="standard-basic" label="Judge3" variant="standard" />
                <TextField id="standard-basic" label="Judge4" variant="standard" />
                <TextField id="standard-basic" label="Judge5" variant="standard" />
            </Grid>
            <Grid>
            <Button variant="contained">Schedule</Button>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default ScheduleHearing