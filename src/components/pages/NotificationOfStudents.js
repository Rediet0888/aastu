import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const paperStyle = {
  padding: 20,
  height: '40vh',
  width: 700,
  margin: '20px auto',
};

const NotificationOfStudents = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/notification')
      .then((response) => response.data)
      .then((data) => {
        setNotifications(data.post);
      });
  }, []);

  const notifyStyle = {
    padding: 20,
    height: '30vh',
    width: 200,
    margin: '20px auto',
  };

  const classes = useStyles();
  return (
    <Grid style={{ marginTop: 200 }}>
      <Paper elevation={10} style={paperStyle}>
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
              {notifications.map((notification) => (
                <TableRow key={notification.id}>
                  <TableCell component="th" scope="row">
                    {notification.notification_title}
                  </TableCell>
                  <TableCell align="right">
                    {' '}
                    {notification.notification_type}
                  </TableCell>
                  <TableCell align="right"> {notification.content}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );

  //   return notifications.map((notification) => (
  //     <div style={{ marginTop: 100 }} key={notification.id}>
  //       <Paper elevation={10} style={notifyStyle}>
  //         <Grid>{notification.notification_title}</Grid>
  //         <Grid>
  //           <Typography>{notification.notification_type}</Typography>
  //         </Grid>
  //         <Grid>
  //           <Typography>{notification.content}</Typography>
  //         </Grid>
  //       </Paper>
  //     </div>
  //   ));
};

export default NotificationOfStudents;
