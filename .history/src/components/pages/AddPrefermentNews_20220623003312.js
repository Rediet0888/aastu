
import {React, useState} from 'react'
import axios from 'axios';
import { Grid, Typography,Paper, TextField,Button } from '@material-ui/core'
import '../AddPrefermentNews.css'

const AddPrefermentNews = () => {
    const schpre={padding :20,height:'80vh',width:400, margin:"20px auto"}



    const [description, setDescription] = useState("");

    const [datetime, setDateTime] = useState('')


    const addPreferment =() =>{
        const data = {
            announcement_type: "Preferement",
            detail: description ,
            file: pdfData,
            date: datetime,
            approved:"AASTU Disciplinary" ,
            admin_id: 1
        }
        axios.post('http://localhost:3000/api/preferment/', data).then(response => {
            console.log(response.data);
        }
        ).catch(error => {});
    }
    const [pdfData, setPdfData] = useState('')
    const onChange = e => {
      const files = e.target.files;
      const file = files[0];
      getBase64(file);
    };
    
    const onLoad = fileString => {
      setPdfData(fileString);
      console.log('kkkk', fileString);
    };
    
    const getBase64 = file => {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        onLoad(reader.result);
      };
    };
  return (
    <Grid>
        <Paper elevation={10} style={schpre}>
            <Grid>
                <h1>Add Preferment News</h1>
            </Grid>
           
            <Grid className='newstitle' xs={12}>   
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
                <form>
        <input type="file" onChange={onChange} value = {pdfData} accept="application/pdf"/>
      </form>                </Grid>
      </Grid>
      <Grid>
      <form  noValidate>
              <TextField
              variant="outlined"
                id="datetime-local"
                label="Accusation Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                //className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => {
                  setDateTime(e.target.value)
                }}
                value={datetime} 
              />
            </form>
      </Grid>

            <Grid className='postbutton'>
            <Button variant="contained" onClick={addPreferment} color="primary" >Post</Button>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default AddPrefermentNews;