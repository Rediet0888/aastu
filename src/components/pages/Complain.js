
import {React, useState} from 'react'
import { Grid, Typography,Paper, TextField,Button } from '@material-ui/core'
import '../Complain.css'
import axios from 'axios'

const Complain = () => {

    const baseURL = 'http://localhost:3000/complain/create'

    const [complai, setComplain] = useState('')

    const [complaintitle, setComplainTitle] = useState('')
    const[complaintitleErrors, setComplainTitleErrors] = useState('')


    const [complaindescription, setComplainDescription] = useState('')
    const[complaindescriptionErrors, setComplainDescriptionErrors] = useState('')

    const handleComplainDescriptionChange = (event) => {
      const {
        target: { value },
      } = event;
      setComplainDescriptionErrors({ complaindescription: "" });
      setComplainDescription(value);
    
      if (value === "") {
        setComplainDescriptionErrors({ complaindescription: "This field cannot be empty" });
      }
    };

    const handleComplainTitleChange = (event) => {
      const {
        target: { value },
      } = event;
      setComplainTitleErrors({ complaintitle: "" });
      setComplainTitle(value);
    
      if (value === "") {
        setComplainTitleErrors({ complaintitle: "This field cannot be empty" });
      }
    };

    const complaint = () =>{
        const body = {
         
          
            complain_title: complaintitle,
            description: complaindescription,
            admin_id: 1,
            user_id: 2
    
        }
        console.log("complaint", body, )
        axios.post(baseURL, body,{
          headers: {
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "application/json",
            "Authorization": "Bearer ${token}",    }    })
        .then(res => {
          setComplain(res.data);
          if(setComplain(res.data)){
           // navigate('components/pages/admindashboard')
          }
          else{
            setComplain(true)
            console.log("unable to register the complain")
          }
        });
      
       
      
      }

    const complain={padding :40,height:'80vh',width:400, margin:"20px auto"}
  return (
    <Grid>
        <Paper elevation={10} style={complain}>
            <Grid align='center'>
                <h1>Complaint Form</h1>
            </Grid>
            {/* <Grid className='userid' xs={12}>
                <Grid xs={2}>
                <Typography>User Id</Typography></Grid>
                <Grid xs={10}>
                <TextField id='outlined-basic' label="Userid" variant='outlined' fullWidth/></Grid>
            </Grid> */}
           
            <Grid className='complaintitle' xs={12}>
                <Grid xs={2}>
                <Typography>Title</Typography>
                </Grid>
                <Grid xs={10}>
                <TextField id="outlined-basic" size="small" variant="outlined"  error={Boolean(complaintitleErrors?.complaintitle)}
         helperText={complaintitleErrors?.complaintitle} onChange={handleComplainTitleChange}  fullWidth 
      value={complaintitle}  />
                </Grid>
            </Grid>
            <Grid className='detailcomplain' xs={12}>
                <Grid xs={4}>
                <Typography>Description</Typography>
                </Grid>
                <Grid xs={8}>
                <TextField
         id="outlined-textarea"
           multiline
         variant="outlined" size="small" error={Boolean(complaindescriptionErrors?.complaindescription)}
         helperText={complaindescriptionErrors?.complaindescription} onChange={handleComplainDescriptionChange}
         fullWidth 
          value={complaindescription}  
      />
      </Grid>
            </Grid>
           
            <Grid className='btncomplain'>
            <Button variant="contained" color="primary" type = 'submit' onClick = {complaint}>Send Complaint</Button>
            </Grid>
        </Paper>
    </Grid>
  )
}

export default Complain;