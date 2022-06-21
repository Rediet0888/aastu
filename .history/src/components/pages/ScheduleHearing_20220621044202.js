import React from 'react'
import {Grid,Paper,Typography,TextField,Button,Divider} from '@material-ui/core'
import DatenTime from '../DatenTime'
import '../ScheduleHearing.css'
import { useState} from 'react'
import axios from 'axios'

const ScheduleHearing = () => {

const [accusationid, setAccusationId] = useState('')
const [accusationIdErrors, setAccusationIdErrors] = useState({ accusationid: '' })

const [accusationname, setAccusationName] = useState('')
const [accusationNameErrors, setAccusationNameErrors] = useState({ accusationname: '' })

const [accusedstudent, setAccusedStudent] = useState('')
const [accusedStudentErrors, setAccusedStudentErrors] = useState({ accusedstudent: '' })

const [judgeone, setJudgeOne] = useState('')
const [judgeOneErrors, setJudgeOneErrors] = useState({ judgeone: '' })

const [judgetwo, setJudgeTwo] = useState('')
const [judgeTwoErrors, setJudgeTwoErrors] = useState({ judgetwo: '' })

const [judgethree, setJudgeThree] = useState('')
const [judgeThreeErrors, setJudgeThreeErrors] = useState({ judgethree: '' })

const [judgefour, setJudgeFour] = useState('')
const [judgeFourErrors, setJudgeFourErrors] = useState({ judgefour: '' })

const [judgefive, setJudgeFive] = useState('')
const [judgeFiveErrors, setJudgeFiveErrors] = useState({ judgefive: '' })

const disableButton = 
    accusationNameErrors?.accusationname ||
    !accusationname ||
    judgeOneErrors?.judgeone ||
    !judgeone ||
    judgeTwoErrors?.judgetwo ||
    !judgetwo ||
    judgeThreeErrors?.judgethree ||
    !judgethree ||
    judgeFourErrors?.judgefour ||
    !judgefour ||
    judgeFiveErrors?.judgefive ||
    !judgefive ||
    accusedStudentErrors?.accusedstudent ||
    !accusedstudent ||
    accusationIdErrors?.accusationid ||
    !accusationid 
      ? true
      : false

const handleAccusationIdChange = (event) => {
    const {
      target: { value }
    } = event
    setAccusationIdErrors({ accusationid: '' })
    setAccusationId(value)
    const reg = new RegExp(/^[1-9]\d{5}/).test(value)

    if (!reg) {
      setAccusationIdErrors({ accusationid: 'Invalid ID' })
    }
    if (value === '') {
      setAccusationIdErrors({ accusationid: 'ID field cannot be empty' })
    }
  };

  const handleAccusationNameChange = (event) => {
    const {
      target: { value }
    } = event
    setAccusationNameErrors({ accusationname: '' })
    setAccusationName(value)
    const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

    if (!reg) {
      setAccusationNameErrors({ accusationname: 'Invalid name' })
    }
    if (value === '') {
      setAccusationNameErrors({ accusationname: 'name field cannot be empty' })
    }
  };

  const handleAccusedStudentChange = (event) => {
    const {
      target: { value }
    } = event
    setAccusedStudentErrors({ accusedstudent: '' })
    setAccusedStudent(value)
    const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

    if (!reg) {
      setAccusedStudentErrors({ accusedstudent: 'Invalid name' })
    }
    if (value === '') {
      setAccusedStudentErrors({ accusedstudent: 'name field cannot be empty' })
    }
  };

 
const handleJudgeOneChange = (event) => {
    const {
      target: { value }
    } = event
    setJudgeOneErrors({ judgeone: '' })
    setJudgeOne(value)
    const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

    if (!reg) {
      setJudgeOneErrors({judgeone : 'Invalid name' })
    }
    if (value === '') {
      setJudgeOneErrors({judgeone: 'Name field cannot be empty' })
    }
  };
  const handleJudgeTwoChange = (event) => {
    const {
      target: { value }
    } = event
    setJudgeTwoErrors({ judgetwo: '' })
    setJudgeTwo(value)
    const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

    if (!reg) {
      setJudgeTwoErrors({ judgetwo: 'Invalid name' })
    }
    if (value === '') {
      setJudgeTwoErrors({ judgetwo: 'Name field cannot be empty' })
    }
  };

  const handleJudgeThreeChange = (event) => {
    const {
      target: { value }
    } = event
    setJudgeThreeErrors({ email: '' })
    setJudgeThree(value)
    const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

    if (!reg) {
      setJudgeThreeErrors({ judgethree: 'Invalid name' })
    }
    if (value === '') {
      setJudgeThreeErrors({ judgethree: 'Name field cannot be empty' })
    }
  };

  const handleJudgeFourChange = (event) => {
    const {
      target: { value }
    } = event
    setJudgeFourErrors({ judgefour: '' })
    setJudgeFour(value)
    const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

    if (!reg) {
      setJudgeFourErrors({ judgefour: 'Invalid name' })
    }
    if (value === '') {
      setJudgeFourErrors({ judgefour: 'Name field cannot be empty' })
    }
  };

  const handleJudgeFiveChange = (event) => {
    const {
      target: { value }
    } = event
    setJudgeFiveErrors({ judgefive: '' })
    setJudgeFive(value)
    const reg = new RegExp(/^[a-zA-Z\s\.]{3,30}$/).test(value)

    if (!reg) {
      setJudgeFiveErrors({ judgefive: 'Invalid name' })
    }
    if (value === '') {
      setJudgeFiveErrors({ judgefive: 'Name field cannot be empty' })
    }
  };

  
    const schhear={padding :20,height:'100vh',width:500, margin:"20px auto"}


    const handleSubmit = () => {
        const data = {
            accusationid: accusationid,
            accusationname: accusationname,
            accusedstudent: accusedstudent,
            judgeone: judgeone, 
          }
          axios.post('http://localhost:5000/accusation/add', data).then(res => {
            console.log(res.data)
          })
    }
    
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
                <TextField id="outlined-basic" label="ID"error={Boolean(accusationIdErrors?.accusationid)}  helperText={accusationIdErrors?.accusationid} variant="outlined" value={accusationid} onChange={handleAccusationIdChange} /> 
            </Grid>
            <Grid xs={6}>
                <Typography>
                    Accusation Name
                </Typography>
                <TextField id="outlined-basic" label="Name" error={Boolean(accusationNameErrors?.accusationname)}  helperText={accusationNameErrors?.accusationname} variant="outlined" value={accusationname} onChange={handleAccusationNameChange} /> 
            </Grid>
            </Grid>
            <Grid className='div5'>
       <Divider variant="middle" />
       </Grid>
            <Grid xs={12} className='studname'>
                <Grid xs={6}>
                <Typography>
                    Accused Student 
                </Typography>
                <TextField id="outlined-basic" label="StudentName" error={Boolean(accusedStudentErrors?.accusedstudent)}  helperText={accusedStudentErrors?.accusedstudent} variant="outlined" value={accusedstudent} onChange={handleAccusedStudentChange}/> 
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
                <TextField id="outlined-basic" label="JudgeOne" error={Boolean(judgeOneErrors?.judgeone)}  helperText={judgeOneErrors?.judgeone} variant="outlined" value={judgeone} onChange={handleJudgeOneChange} /> 
                </Grid>
                <Grid xs={6}>
                <TextField id="outlined-basic" label="JudgeTwo" error={Boolean(judgeTwoErrors?.judgetwo)}  helperText={judgeTwoErrors?.judgetwo} variant="outlined" value={judgetwo} onChange={handleJudgeTwoChange} />
                </Grid>
                </Grid>
                <Grid className='judge34' xs={12}>
                <Grid xs={6}>
                <TextField id="outlined-basic" label="JudgeThree" error={Boolean(judgeThreeErrors?.judgethree)}  helperText={judgeThreeErrors?.judgethree} variant="outlined" value={judgethree} onChange={handleJudgeThreeChange} /></Grid>
                <Grid xs={6}>
                <TextField id="outlined-basic" label="JudgeFour" error={Boolean(judgeFourErrors?.judgefour)}  helperText={judgeFourErrors?.judgefour} variant="outlined" value={judgefour} onChange={handleJudgeFourChange} />
                </Grid>
                </Grid>
                <Grid className='judge5'>
                <TextField id="outlined-basic" label="JudgeFive" error={Boolean(judgeFiveErrors?.judgefour)}  helperText={judgeFiveErrors?.judgefive} variant="outlined" value={judgefive} onChange={handleJudgeFiveChange} /></Grid>
            </Grid>
            <Grid className='div6'>
       <Divider variant="middle" />
       </Grid>
            <Grid className='schedulebutton'>
            <Button variant="contained" color='primary'
                  disabled={disableButton}
                  size='large'
                  type='submit'
                  onClick={handleSubmit}>Schedule</Button>
                  
              
            </Grid>
        </Paper>
    </Grid>
  )
}

export default ScheduleHearing