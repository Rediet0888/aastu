import { Grid, Typography,Paper, TextField,Button } from '@material-ui/core'
import React from 'react'
import NewsSelect from '../NewsSelect'

const AddSchPreNews = () => {
    const schpre={padding :20,height:'80vh',width:400, margin:"20px auto"}
  return (
    <Grid>
        <Paper elevation={10} style={schpre}>
            <Grid>
                <h1>Adding News</h1>
            </Grid>
            <Grid>
               <Typography>News</Typography>
               <NewsSelect/>
            </Grid>
            <Grid>
                <Typography>Title</Typography>
                <TextField id="standard-basic" label="News Title" variant="standard" /> 
            </Grid>
            <Grid>
                <Typography>Details</Typography>
                <TextField
         id="filled-textarea"
          label="Description of the news"
          placeholder="Placeholder"
           multiline
         variant="filled"
      />
            </Grid>
            <Grid>
                <Typography>Links</Typography>
                <TextField id='filled-basic' label="Link" variant='filled'/>
            </Grid>
            <Grid>
            <Button variant="contained">Post</Button>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default AddSchPreNews;