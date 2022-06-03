import { Grid, Typography,Paper, TextField,Button } from '@material-ui/core'
import React from 'react'
import NewsSelect from '../NewsSelect'
import '../AddSchPreNews.css'

const AddSchPreNews = () => {
    const schpre={padding :20,height:'80vh',width:400, margin:"20px auto"}
  return (
    <Grid>
        <Paper elevation={10} style={schpre}>
            <Grid>
                <h1>Adding News</h1>
            </Grid>
            <Grid className='news' xs={12} >
                <Grid  xs={2}>
               <Typography>News</Typography></Grid>
               <Grid xs={10}>
               <NewsSelect/>
               </Grid> 
            </Grid>
            <Grid className='newstitle' xs={12}>
                <Grid xs={2}>
                <Typography>Title</Typography>
                </Grid>
                <Grid xs={10}>
                <TextField id="outlined-basic" label="News Title" variant="outlined" /> 
                </Grid>
            </Grid>
            <Grid className='detailnews' xs={12}>
                <Grid xs={2}>
                <Typography>Details</Typography>
                </Grid>
                <Grid xs={10}>
                <TextField
         id="outlined-textarea"
          label="Description of the news"
          placeholder="Placeholder"
           multiline
         variant="outlined"
      />
      </Grid>
            </Grid>
            <Grid className='newslink' xs={12}>
                <Grid xs={2}>
                <Typography>Links</Typography></Grid>
                <Grid xs={10}>
                <TextField id='outlined-basic' label="Link" variant='outlined'/></Grid>
            </Grid>
            <Grid className='postbutton'>
            <Button variant="contained" color="primary" >Post</Button>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default AddSchPreNews;