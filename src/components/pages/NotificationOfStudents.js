import { Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';

const NotificationOfStudents = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const baseURL = 'http://localhost:3000/notification';
    axios
      .get(baseURL)
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
  return notifications.map((notification) => (
    <div style={{ marginTop: 100 }} key={notification.id}>
      <Paper elevation={10} style={notifyStyle}>
        <Grid>{notification.notification_title}</Grid>
        <Grid>
          <Typography>{notification.notification_type}</Typography>
        </Grid>
        <Grid>
          <Typography>{notification.content}</Typography>
        </Grid>
      </Paper>
    </div>
  ));
};

export default NotificationOfStudents;
