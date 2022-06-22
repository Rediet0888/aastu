import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Paper,Grid} from '@material-ui/core'
import Report from '../Report';
import ReportTableStudent from '../ReportTableStudent';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: 'gray',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    /*Toolbar:{backgroundColor:"gray" },*/
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const StudentAdminDashboard = () => {
    const classes = useStyles();
    const news = [
        { n: 'red' },
        { n: 'rehd' },
        { n: 'redj' },]
  return (
    <div><main className={classes.content}>
    <div className={classes.toolbar} />
    <Grid xs={12} container spacing={3}>

        {news.map((i) => {
            return (
                <Grid item xs={4}>
                    <Report />
                </Grid>

            );
        }

        )}
        <Grid item xs={12} >
            <Paper className={classes.paper}>
                <ReportTableStudent />
            </Paper>
        </Grid>


    </Grid>
</main>
</div>
  )
}

export default StudentAdminDashboard