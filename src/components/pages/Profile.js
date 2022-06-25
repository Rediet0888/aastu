import {
  Avatar,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Profile.css';
import Validation from '../Validation';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Profile = () => {
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token === undefined || token === null) {
      window.location.replace('/login');
    }
  }, []);

  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    setErrors(Validation(values));
    event.preventDefault();
  };

  const handleLogout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('role_type');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('username');
    window.location.replace('/');
  };

  const [errors, setErrors] = useState({});

  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 700,
    margin: '20px auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };

  const [first_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [accusations, setAccusations] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios.get(`http://localhost:3000/users/${userId}`).then((response) => {
      setName(response.data.post.first_name);
      setEmail(response.data.post.email);
      setPhone(response.data.post.phone);
    });

    axios.get(`http://localhost:3000/accusations`).then((response) => {
      const accusations = response.data.post?.filter(
        (accusation) => accusation.accused === userId
      );
      setAccusations(accusations);
    });
  }, []);

  const classes = useStyles();

  return (
    <Grid style={{ marginTop: 200 }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
        </Grid>
        <Grid align="center">
          <Typography>{email}</Typography>
        </Grid>
        <Grid align="center">
          <Typography>{first_name}</Typography>
        </Grid>

        <Grid className="div11">
          <Divider variant="middle" />
        </Grid>
        <Grid align="center">
          <h4>Accusations</h4>
        </Grid>

        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Accusation</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accusations.map((accusation) => (
                <TableRow key={accusation.id}>
                  <TableCell component="th" scope="row">
                    {accusation.accusation_title}
                  </TableCell>
                  <TableCell align="right">
                    {' '}
                    {accusation.accusation_type}
                  </TableCell>
                  <TableCell align="right"> {accusation.createdAt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid className="div12">
          <Divider variant="middle" />
        </Grid>
        <Grid xs={12} className="logout">
          <Grid xs={12}>
            <Button
              onClick={handleLogout}
              type="button"
              color="primary"
              variant="contained"
              style={btnstyle}
            >
              Logout
            </Button>{' '}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Profile;
