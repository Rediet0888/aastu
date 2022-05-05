import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Report() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1>Recent Reports</h1>
      <Typography component="p" variant="h4">
        5 students
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
        view balance
        </Link>
      </div>
    </React.Fragment>
  );
}