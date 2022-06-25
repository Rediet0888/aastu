
import {React, useState} from 'react'
import axios from 'axios';
import { Grid, Typography,Paper, TextField,Button } from '@material-ui/core'
import '../AddPrefermentNews.css'

const AddScholarshipNews = () => {
    const schpre={padding :20,height:'80vh',width:400, margin:"20px auto"}



    const [description, setDescription] = useState("");
    const[descriptionErrors, setDescriptionErrors] =useState("");

    const [datetime, setDateTime] = useState('')

    const disableButton = 
 descriptionErrors?.description ||
 !description 
   ? true
   : false

    const handleDescriptionChange = (event) => {
      const {
        target: { value },
      } = event;
      setDescriptionErrors({ description: "" });
      setDescription(value);
    
      if (value === "") {
        setDescriptionErrors({ description: "This field cannot be empty" });
      }
    };


    const addScholarship =() =>{
        const data = {
            announcement_type: "Scholarship",
            detail: description ,
            file: pdfData,
            date: datetime,
            approved:"AASTU Disciplinary" ,
            admin_id: 1
        }
        axios.post('http://localhost:3000/announcement/create', data).then(response => {
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
                <h1>Add Scholarship News</h1>
            </Grid>
           
            <Grid className='newstitle' xs={12}>   
            </Grid>
            <Grid className='detailnews' xs={12}>
                <Grid xs={3}>
                <Typography>Details</Typography>
                </Grid>
                <Grid xs={9}>
                <TextField
                value={description} size="small" error={Boolean(descriptionErrors?.description)}
                helperText={descriptionErrors?.description} onChange={handleDescriptionChange}
         id="outlined-textarea"
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
              size="small"
                id="datetime-local"
                label="Announcement Time"
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
            <Button variant="contained"  disabled={disableButton} onClick={addScholarship} color="primary" >Post</Button>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default AddScholarshipNews;