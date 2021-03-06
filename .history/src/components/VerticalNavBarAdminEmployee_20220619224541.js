import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import ForumIcon from '@material-ui/icons/Forum';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Report from './Report'
import ReportTable from './ReportTable'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DescriptionIcon from '@material-ui/icons/Description';
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

export default function VerticalNavBarAdminEmployee() {
    const classes = useStyles();
  const news = [
      { n: 'red' },
      { n: 'rehd' },
      { n: 'redj' },
  ]
    

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar sx={{ backgroundColor: 'red' }}>
                    <Grid container xs={12} alignItems='flex-end'>
                        <Grid xs={10}>
                            <Typography variant="h6" noWrap>
                                EmployeeAdmin
                            </Typography>
                        </Grid>
                        <Grid xs={2}>
                            <TextField id="standard-search" label="Search field" type="search" />
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {[ { name: 'Dashboard', icon: DashboardIcon },
                    { name: 'Profile', icon: AccountCircleIcon },
                    { name: 'Notification', icon: NotificationsOutlinedIcon },
                    { name: 'Add PreferementNews', icon: NoteAddIcon },
                    { name: 'Rules and regulation', icon: DescriptionIcon },].map((menu) => (
                        <Link to={menu.name} > 
                        <ListItem button key={menu.name}>
                            <ListItemIcon>{[<menu.icon />]}</ListItemIcon>
                            <ListItemText primary={menu.name} />
                        </ListItem>
                        </Link>
                    ))}
                </List>

            </Drawer>
            <main className={classes.content}>
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
                <ReportTable />
            </Paper>
        </Grid>


    </Grid>
</main>
        </div>
    );
}
