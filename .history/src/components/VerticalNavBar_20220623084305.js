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
import Report from './Report';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import ReportTable from './ReportTable';
import { Link } from 'react-router-dom'
import DescriptionIcon from '@material-ui/icons/Description';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
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
    noDecoration: {
        textDecoration: 'none'
    }
}));

export default function VerticalNavBar(props) {
    const classes = useStyles();
    const news = [
        { n: 'red' },
        { n: 'rehd' },
        { n: 'redj' },]

    let NavBarItems = [{ id: 1, name: 'Dashboard', icon: DashboardIcon , path:"/StudentDashboard"},
    { id: 2, name: 'Profile', icon: AccountCircleIcon, path:"/Profile"},
    { id: 3, name: 'Notification', icon: NotificationsOutlinedIcon, path:"/StudentDashboard" },
    { id: 4, name: 'ScheduleHearing', icon: AccessTimeIcon , path:"/ScheduleHearing"},
    { id: 5, name: 'AddScholarshipNews', icon: NoteAddIcon , path:"/AddScholarshipNews"},
    { id: 6, name: 'Rules&regulation', icon: DescriptionIcon , path:"/StudentDashboard"},];
    //let role = window.localStorage.getItem("role_type");
    let role = "Student"
    if (role === "StudentAdmin") {
       NavBarItems = [{ id: 1, name: 'Dashboard', icon: DashboardIcon , path:"/StudentAdminDashboard"},
       { id: 2, name: 'Profile', icon: AccountCircleIcon, path:"/Profile" },
       { id: 3, name: 'Notification', icon: NotificationsOutlinedIcon, path:"/NotificationOfStudentAdmin" },
        { id: 4, name: 'ScheduleHearing', icon: AccessTimeIcon, path:"/ScheduleHearing" },
        { id: 5, name: 'AddScholarshipNews', icon: NoteAddIcon , path:"/AddScholarshipNews" },
         { id: 6, name: 'Rules&regulation', icon: DescriptionIcon , path:"/StudentDashboard"},]
     } else if (role === "EmployeeAdmin" ) {
        NavBarItems = [{ name: 'Dashboard', icon: DashboardIcon , path:"/EmployeeAdminDashboard"},
       { name: 'Profile', icon: AccountCircleIcon ,path:"/Profile" },
       { name: 'Notification', icon: NotificationsOutlinedIcon, path:"/NotificationOfEmployeeAdmin" },
       { name: 'ScheduleHearing', icon: AccessTimeIcon , path:"/ScheduleHearing"},
       { name: 'AddPrefermentNews', icon: NoteAddIcon , path:"/AddPrefermentNews"},
       { name: 'Rules&Regulation', icon: DescriptionIcon , path:"/NotificationOfStudentAdmin"},]
     } else if (role === "Student") {
         NavBarItems = [{ name: 'Dashboard', icon: DashboardIcon, path:"/StudentDashboard" },
         { name: 'Profile', icon: AccountCircleIcon, path:"/Profile" },
         { name: 'Notification', icon: NotificationsOutlinedIcon, path:"/NotificationOfStudents" },
         { name: 'Complain', icon: LiveHelpIcon, path:"/Complain" },
         { name: 'SelfDisciplineTips', icon: EmojiObjectsIcon,path:"/DisciplineTips"},
         { name: 'Rules&Regulation', icon: DescriptionIcon, path:"/NotificationOfStudentAdmin" },]
     } else if (role === "Employee" ) {
         NavBarItems = [{ name: 'Dashboard', icon: DashboardIcon, path:"/EmployeeDashboard" },
        { name: 'Profile', icon: AccountCircleIcon , path:"/Profile"},
        { name: 'Notification', icon: NotificationsOutlinedIcon , path:"/NotificationOfEmployees"},
        { name: 'CreateAccusation', icon: NoteAddIcon , path:"/IncidentRegForm"},
        { name: 'Complain', icon: LiveHelpIcon , path:"/Complain"},
        { name: 'SelfDisciplineTips', icon: EmojiObjectsIcon , path:"/DisciplineTips"},
        { name: 'Rules&Regulation', icon: DescriptionIcon , path:"/NotificationOfStudentAdmin"},]
     }

    console.log(NavBarItems)
    return  window.location.pathname !== '/' ? (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar sx={{ backgroundColor: 'red' }}>
                    <Grid container xs={12} alignItems='flex-end'>
                        <Grid xs={10}>
                            <Typography variant="h6" noWrap>
                                {role}
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
                    {NavBarItems.map((menu) => (
                        <div key={menu.id}>
                             <Link className={classes.noDecoration} to={menu.path} >
                            <ListItem button key={menu.name}>
                                <ListItemIcon>{[<menu.icon />]}</ListItemIcon>
                                <ListItemText primary={menu.name} />
                            </ListItem>
                        </Link>
                        </div>
                    ))}
                </List>

            </Drawer>
            {/*<main className={classes.content}>
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
                </main>*/}
        </div>
    ): <div></div>;
}
