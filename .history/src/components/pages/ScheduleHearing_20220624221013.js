import React from 'react'
import {Grid,Paper,Typography,TextField,Button,Divider, makeStyles, duration} from '@material-ui/core'
import DatenTime from '../DatenTime'
import '../ScheduleHearing.css'
import { useState, useStyles} from 'react'
import axios from 'axios'

// const useStyles=makeStyles({
// container:{
//   backgroundColor: gray,
// }
// });

const ScheduleHearing = () => {




 const [hearingtype, setHearingType] = useState('')
 const [hearingtypeErrors, setHearingTypeErrors] = useState({ hearingtype: "" });

 const [datetime, setDateTime] = useState('')

 const [startingtime, setStartingTime] = useState('')
 
 const [durationtime, setDurationTime] = useState('')
 const [durationtimeErrors, setDurationTimeErrors] = useState({ durationtime: "" });

 const [description, setDescription] = useState('')
 const [descriptionErrors, setDescriptionErrors] = useState({ description: "" });
 
 const [casename, setCaseName] = useState('')
 const [casenameErrors, setCaseNameErrors] = useState({ description: "" });
 

 const [accusantid, setAccusantId] = useState('')
 
 const disableButton = 
 hearingtypeErrors?.hearingtype ||
 !hearingtype ||
 durationtimeErrors?.durationtime||
 !duration ||
 descriptionErrors?.description ||
 !description ||
 casenameErrors?.casename ||
 !casename 
   ? true
   : false

 const handleHearingTypeChange = (event) => {
  const {
    target: { value },
  } = event;
  setHearingTypeErrors({ hearingtype: "" });
  setHearingType(value);

  if (value === "") {
    setHearingTypeErrors({ hearingtype: "This field cannot be empty" });
  }
};

const handleDurationTimeChange = (event) => {
  const {
    target: { value },
  } = event;
  setDurationTimeErrors({ durationtime: "" });
  setDurationTime(value);

  if (value === "") {
    setDurationTimeErrors({ durationtime: "This field cannot be empty" });
  }
};

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

const handleCaseNameChange = (event) => {
  const {
    target: { value },
  } = event;
  setCaseNameErrors({ casename: "" });
  setCaseName(value);

  if (value === "") {
    setCaseNameErrors({ casename: "This field cannot be empty" });
  }
};




  
    const schhear={padding :20,height:'80vh',width:700, margin:"20px auto"}


    const addSchedule = () => {
      let user = window.localStorage.getItem("userId", res.data.userId)
  
      const data = {

          hearing_type: hearingtype,
          date: datetime,
          starting: startingtime ,
          duration: durationtime,
          description: description,
          file: pdfData,
          admin_id: user,
          // accusant_id: accusantid
          }
          axios.post('http://localhost:3000/schedule/create', data).then(res => {
            console.log(res.data)
          })
    }
    // const classes  = useStyles();

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
        <Paper elevation={20} style={schhear}>
            <Grid>
                <h1>Schedule Hearing</h1>
            </Grid>
            <Grid className='accuseid' xs={12}>
                <Grid xs={6}>
                <Typography>
                    Hearing Type
                </Typography>
                <TextField id="standard-basic"  variant="outlined" size="small"  error={Boolean(hearingtypeErrors?.hearingtype)}
            helperText={hearingtypeErrors?.hearingtype} onChange={handleHearingTypeChange}
                    value={hearingtype} 
                 />            </Grid>
            {/* <Grid xs={6}>
                <Typography>
                    Description
                </Typography>
                <TextField id="outlined-basic" label="Name" error={Boolean(accusationNameErrors?.accusationname)}  helperText={accusationNameErrors?.accusationname} variant="outlined" value={accusationname} onChange={handleAccusationNameChange} /> 
            </Grid>
            </Grid>
       <Divider variant="middle" />
       </Grid>
            <Grid xs={12} className='studname'>
                <Grid xs={6}>
                <Typography>
                   Admin ID
                </Typography>
                <TextField id="outlined-basic" label="StudentName" error={Boolean(accusedStudentErrors?.accusedstudent)}  helperText={accusedStudentErrors?.accusedstudent} variant="outlined" value={accusedstudent} onChange={handleAccusedStudentChange}/> 
            </Grid> */}
                        
            <Grid xs={6} >
           <form noValidate>
           <Typography>
                  Accusation Time
                </Typography>
              <TextField
              variant="outlined" size="small"
                id="datetime-local"
               
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => {
                  setStartingTime(e.target.value)
                }}
                value={startingtime} 
              />
            </form>
                 
            </Grid></Grid>
           
            <Grid xs={12} className='duratime'>
            <Grid xs={6}>
                <Typography>
                  Duration 
                </Typography>
                <TextField id="standard-basic"  variant="outlined" size="small" error={Boolean(durationtimeErrors?.durationtime)}
            helperText={durationtimeErrors?.durationtime} onChange={handleDurationTimeChange}
                
                    value={durationtime} 
                 />           
            </Grid>
            <Grid xs={6}>
                <Typography>
                  Description
                </Typography>
                <TextField id="standard-basic" variant="outlined" size="small" error={Boolean(descriptionErrors?.description)}
            helperText={descriptionErrors?.description} onChange={handleDescriptionChange}
                    value={description} 
                 />            </Grid>
            </Grid>
        
            <Grid className='datetimesch' xs={12}>
            <Grid xs={6} >
           <form noValidate>
           <Typography>
                  Accusation Time
                </Typography>

              <TextField
              variant="outlined"
              size="small"  id="datetime-local"
               
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                // className={classes.textField}
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
        
            <Grid xs={6}>
              <Typography>
                Case Name
              </Typography>
                    <TextField id="outlined-basic"  variant="outlined" size="small" error={Boolean(casenameErrors?.casename)}
            helperText={casenameErrors?.casename} onChange={handleCaseNameChange} value={casename}/>
            </Grid></Grid>
      
                <Grid className='judge12' xs={12}>
                
            <form>
        <input type="file" onChange={onChange} value = {pdfData} accept="application/pdf"/>
      </form> </Grid>
      
                     
                    {/* onChange={e => {
        setAccusantId(e.target.value)
      }}
    value={accusantid}   */   }       
                
            <Grid className='div6'>
       <Divider variant="middle" />
       </Grid>
            <Grid className='schedulebutton'>
            <Button variant="contained" color='primary'
                  disabled={disableButton}
                  size='large'
                  type='submit'
                  onClick={addSchedule}>Schedule</Button>
                  
              
            </Grid>
        </Paper>
    </Grid>
  )
}

export default ScheduleHearing