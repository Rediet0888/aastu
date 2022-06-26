import {
  Avatar,
  Button,
  Grid,
  Link,
  Modal,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
// import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

// import ChooseUser from '../ChooseUser';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../LoginForm.css';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Login Failed</h2>
      <p id="simple-modal-description">
        Invalid username and password combination
      </p>
      <button onClick={() => setOpen(false)}>OK</button>
    </div>
  );

  const [email, setEmail] = useState('');
  const [emailErrors, setEmailErrors] = useState({ email: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const [login, setLogin] = useState('');
  const [loginErrors, setLoginErrors] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordErrors, setPasswordErrors] = useState({ password: '' });

  const disableButton =
    emailErrors?.email || !email || passwordErrors?.password || !password
      ? true
      : false;
  const handleEmailChange = (event) => {
    const {
      target: { value },
    } = event;
    setEmailErrors({ email: '' });
    setEmail(value);
    const reg = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    ).test(value);

    if (!reg) {
      setEmailErrors({ email: 'Invalid email' });
    }
    if (value === '') {
      setEmailErrors({ email: 'Email field cannot be empty' });
    }
  };
  const handlePasswordChange = (event) => {
    const {
      target: { value },
    } = event;
    setPasswordErrors({ password: '' });
    setPassword(value);
    const reg = new RegExp(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/
    ).test(value);

    if (!reg) {
      setPasswordErrors({ password: 'Invalid password' });
    }

    if (value === '') {
      setPasswordErrors({ password: 'Password field cannot be empty' });
    }
  };

  const paperStyle = {
    padding: 20,
    height: '60vh',
    width: 280,
    margin: '20px auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };

  const navigate = useNavigate();

  const authUser = () => {
    const baseURL = 'http://localhost:3000/users/login';
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(baseURL, body, {
        headers: {
          'Access-Control-Allow-Headers': '*',
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        if (res.data.message === 'Authentication Successful') {
          window.localStorage.setItem('token', res.data.token);
          window.localStorage.setItem('role_type', res.data.role_type);
          window.localStorage.setItem('userId', res.data.userId);
          window.localStorage.setItem('username', res.data.email);
          navigate('/VerticalNavBar');
          console.log('you are right' + res.data.message);
        } else {
          setLoginErrors(true);
          console.log('Invalid Credentials');
          alert('Invalid Credentials');
          navigate('/');
          console.log('errorrrr' + res.data.message);
        }
      })
      .catch((error) => {
        // alert('Invalid credentials');
        setOpen(true);
      });
  };

  return (
    <Grid spacing={5}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>

      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <img src="/image/logo.jpg" alt=" " width="40px" />
          </Avatar>
          <h2>Sign In</h2>
          <Typography color={loginErrors ? 'red' : 'green'} variant="body2">
            {loginErrors
              ? 'Please enter valid credentials'
              : 'Please sign-in to your account'}
          </Typography>
          {/* <p>{ loginErrors ? "enter valid credentials" : ""}</p> */}
        </Grid>

        <Grid className="user">
          <TextField
            error={Boolean(emailErrors?.email)}
            helperText={emailErrors?.email}
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            name="email"
            label="Email"
            placeholder="Enter email"
            fullWidth
            required
          />
        </Grid>

        <Grid className="pass">
          <TextField
            error={Boolean(passwordErrors?.password)}
            helperText={passwordErrors?.password}
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
        </Grid>

        <Link to="/Student">
          <Button
            type="submit"
            variant="contained"
            style={btnstyle}
            fullWidth
            color="primary"
            disabled={disableButton}
            size="large"
            onClick={authUser}
          >
            Sign in
          </Button>
        </Link>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
