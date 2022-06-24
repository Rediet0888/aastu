import React from 'react'
import {Grid,Paper,Typography,TextField,Button,Divider} from '@material-ui/core'
import DatenTime from '../DatenTime'
import '../ScheduleHearing.css'
import { useState, useStyles} from 'react'
import axios from 'axios'

const ScheduleHearing = () => {



// const [hearingtype, setHearingType] = useState('')
// const [hearing, setAccusationIdErrors] = useState({ accusationid: '' })

// const [accusationname, setAccusationName] = useState('')
// const [accusationNameErrors, setAccusationNameErrors] = useState({ accusationname: '' })

// const [accusedstudent, setAccusedStudent] = useState('')
// const [accusedStudentErrors, setAccusedStudentErrors] = useState({ accusedstudent: '' })

// const [judgeone, setJudgeOne] = useState('')
// const [judgeOneErrors, setJudgeOneErrors] = useState({ judgeone: '' })

// const [judgetwo, setJudgeTwo] = useState('')
// const [judgeTwoErrors, setJudgeTwoErrors] = useState({ judgetwo: '' })

// const [judgethree, setJudgeThree] = useState('')
// const [judgeThreeErrors, setJudgeThreeErrors] = useState({ judgethree: '' })

// const [judgefour, setJudgeFour] = useState('')
// const [judgeFourErrors, setJudgeFourErrors] = useState({ judgefour: '' })

// const [judgefive, setJudgeFive] = useState('')
// const [judgeFiveErrors, setJudgeFiveErrors] = useState({ judgefive: '' })

// const disableButton = 
//     accusationNameErrors?.accusationname ||
//     !accusationname ||
//     judgeOneErrors?.judgeone ||
//     !judgeone ||
//     judgeTwoErrors?.judgetwo ||
//     !judgetwo ||
//     judgeThreeErrors?.judgethree ||
//     !judgethree ||
//     judgeFourErrors?.judgefour ||
//     !judgefour ||
//     judgeFiveErrors?.judgefive ||
//     !judgefive ||
//     accusedStudentErrors?.accusedstudent ||
//     !accusedstudent ||
//     accusationIdErrors?.accusationid ||
//     !accusationid 
//       ? true
//       : false

// const handleAccusationIdChange = (event) => {
//     const {
//       target: { value }
//     } = event
//     setAccusationIdErrors({ accusationid: '' })
//     setAccusationId(value)
//     const reg = new RegExp(/^[1-9]\d{0}/).test(value)

//     if (!reg) {
//       setAccusationIdErrors({ accusationid: 'Invalid ID' })
//     }
//     if (value === '') {
//       setAccusationIdErrors({ accusationid: 'ID field cannot be empty' })
//     }
//   };

//   const handleAccusationNameChange = (event) => {
//     const {
//       target: { value }
//     } = event
//     setAccusationNameErrors({ accusationname: '' })
//     setAccusationName(value)
//     const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

//     if (!reg) {
//       setAccusationNameErrors({ accusationname: 'Invalid name' })
//     }
//     if (value === '') {
//       setAccusationNameErrors({ accusationname: 'name field cannot be empty' })
//     }
//   };

//   const handleAccusedStudentChange = (event) => {
//     const {
//       target: { value }
//     } = event
//     setAccusedStudentErrors({ accusedstudent: '' })
//     setAccusedStudent(value)
//     const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

//     if (!reg) {
//       setAccusedStudentErrors({ accusedstudent: 'Invalid name' })
//     }
//     if (value === '') {
//       setAccusedStudentErrors({ accusedstudent: 'name field cannot be empty' })
//     }
//   };

 
// const handleJudgeOneChange = (event) => {
//     const {
//       target: { value }
//     } = event
//     setJudgeOneErrors({ judgeone: '' })
//     setJudgeOne(value)
//     const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

//     if (!reg) {
//       setJudgeOneErrors({judgeone : 'Invalid name' })
//     }
//     if (value === '') {
//       setJudgeOneErrors({judgeone: 'Name field cannot be empty' })
//     }
//   };
//   const handleJudgeTwoChange = (event) => {
//     const {
//       target: { value }
//     } = event
//     setJudgeTwoErrors({ judgetwo: '' })
//     setJudgeTwo(value)
//     const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

//     if (!reg) {
//       setJudgeTwoErrors({ judgetwo: 'Invalid name' })
//     }
//     if (value === '') {
//       setJudgeTwoErrors({ judgetwo: 'Name field cannot be empty' })
//     }
//   };

//   const handleJudgeThreeChange = (event) => {
//     const {
//       target: { value }
//     } = event
//     setJudgeThreeErrors({ email: '' })
//     setJudgeThree(value)
//     const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

//     if (!reg) {
//       setJudgeThreeErrors({ judgethree: 'Invalid name' })
//     }
//     if (value === '') {
//       setJudgeThreeErrors({ judgethree: 'Name field cannot be empty' })
//     }
//   };

//   const handleJudgeFourChange = (event) => {
//     const {
//       target: { value }
//     } = event
//     setJudgeFourErrors({ judgefour: '' })
//     setJudgeFour(value)
//     const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

//     if (!reg) {
//       setJudgeFourErrors({ judgefour: 'Invalid name' })
//     }
//     if (value === '') {
//       setJudgeFourErrors({ judgefour: 'Name field cannot be empty' })
//     }
//   };

//   const handleJudgeFiveChange = (event) => {
//     const {
//       target: { value }
//     } = event
//     setJudgeFiveErrors({ judgefive: '' })
//     setJudgeFive(value)
//     const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

//     if (!reg) {
//       setJudgeFiveErrors({ judgefive: 'Invalid name' })
//     }
//     if (value === '') {
//       setJudgeFiveErrors({ judgefive: 'Name field cannot be empty' })
//     }
//   };

 const [hearingtype, setHearingType] = useState('')

 const [datetime, setDateTime] = useState('')

 const [startingtime, setStartingTime] = useState('')
 
 const [durationtime, setDurationTime] = useState('')

 const [description, setDescription] = useState('')

 

 const [accusantid, setAccusantId] = useState('')







  
    const schhear={padding :20,height:'100vh',width:500, margin:"20px auto"}


    const handleSubmit = () => {
      //window.localStorage.setItem("userId", res.data.userId)
  
      const data = {

          hearing_type: hearingtype,
          date: datetime,
          starting: startingtime ,
          duration: durationtime,
          description: description,
          file: pdfData,
          // admin_id: userId,
          // accusant_id: accusantid
          }
          axios.post('http://localhost:3000/schedules/create', data).then(res => {
            console.log(res.data)
          })
    }
    const classes = useStyles();

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
                <TextField id="standard-basic" label="Hearing Type" variant="outlined"
                     onChange={e => {
                      setHearingType(e.target.value)
                    }}
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
                        <Grid className='div5'>
            <Grid xs={6} className='datetimesch'>
           <form className={classes.container} noValidate>
              <TextField
              variant="outlined"
                id="datetime-local"
                label="Accusation Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e => {
                  setStartingTime(e.target.value)
                }}
                value={startingtime} 
              />
            </form>
                 
            </Grid>
            <Grid xs={6}>
                <Typography>
                  Duration Time 
                </Typography>
                <TextField id="standard-basic" label="Hearing Type" variant="outlined"
                     onChange={e => {
                      setDurationTime(e.target.value)
                    }}
                    value={durationtime} 
                 />            </Grid>
            </Grid>
            <Grid xs={6}>
                <Typography>
                  Description
                </Typography>
                <TextField id="standard-basic" label="Hearing Type" variant="outlined"
                     onChange={e => {
                      setDescription(e.target.value)
                    }}
                    value={description} 
                 />            </Grid>
            </Grid>
            <Grid xs={6} className='datetimesch'>
           <form className={classes.container} noValidate>
              <TextField
              variant="outlined"
                id="datetime-local"
                label="Accusation Time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
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
            <Grid className='div4'>
       <Divider variant="middle" />
       </Grid>
       
            <Grid>
            <form>
        <input type="file" onChange={onChange} value = {pdfData} accept="application/pdf"/>
      </form>
      </Grid>
                <Grid className='judge12' xs={12}>
                    <Grid xs={6}>
                    <TextField id="outlined-basic" label="Case Name" variant="outlined"  onChange={e => {
        setAccusantId(e.target.value)
      }}
      value={accusantid}  />                </Grid>
                </Grid>
            <Grid className='div6'>
       <Divider variant="middle" />
       </Grid>
            <Grid className='schedulebutton'>
            <Button variant="contained" color='primary'
                  //disabled={disableButton}
                  size='large'
                  type='submit'
                  
                  onClick={handleSubmit}>Schedule</Button>
                  
              
            </Grid>
        </Paper>
    </Grid>
  )
}

export default ScheduleHearing