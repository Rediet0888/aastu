
import {React, useState} from 'react'
import axios from 'axios';
import { Grid, Typography,Paper, TextField,Button } from '@material-ui/core'
import '../AddPrefermentNews.css'

const AddPrefermentNews = () => {
    const schpre={padding :20,height:'80vh',width:400, margin:"20px auto"}



    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [link, setLink] = useState("");

    const addPreferment =() =>{
        const data = {
            title: title,
            description: description,
            link: link
        }
        axios.post('http://localhost:5000/api/preferment/', data).then(response => {
            console.log(response.data);
        }
        ).catch(error => {});
    }

  return (
    <Grid>
        <Paper elevation={10} style={schpre}>
            <Grid>
                <h1>Adding Preferment News</h1>
            </Grid>
           
            <Grid className='newstitle' xs={12}>
                <Grid xs={2}>
                <Typography>Title</Typography>
                </Grid>
                <Grid xs={10}>
                <TextField value={title} onChange={e => {setTitle(e.target.value)}} id="outlined-basic" label="News Title" variant="outlined" /> 
                </Grid>
            </Grid>
            <Grid className='detailnews' xs={12}>
                <Grid xs={2}>
                <Typography>Details</Typography>
                </Grid>
                <Grid xs={10}>
                <TextField
                value={description} onChange={e => {setDescription(e.target.value)}}
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
                <TextField id='outlined-basic' value={link} onChange={e => {setLink(e.target.value)}} label="Link" variant='outlined'/></Grid>
            </Grid>
            <Grid className='postbutton'>
            <Button variant="contained" onClick={addPreferment} color="primary" >Post</Button>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default AddPrefermentNews;