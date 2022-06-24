import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
//   account: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
}));

export default function VerticalNavBar(props) {
    const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    // const news = [
    //     { n: 'red' },
    //     { n: 'rehd' },
    //     { n: 'redj' },]
    let role = window.localStorage.getItem("role_type");

    let NavBarItems = [{ id: 1, name: 'Dashboard', icon: DashboardIcon , path:"/t"},
    { id: 2, name: 'Profile', icon: AccountCircleIcon, path:"/Profile"},
    { id: 3, name: 'Notification', icon: NotificationsOutlinedIcon, path:"/StudentDashboard" },
    { id: 5, name: 'AddScholarshipNews', icon: NoteAddIcon , path:"/AddScholarshipNews"},
    { id: 6, name: 'Rules&regulation', icon: DescriptionIcon , path:"/StudentDashboard"},
    { id: 7,name: 'CreateAccusation', icon: NoteAddIcon , path:"/IncidentRegForm"},
    { id: 8,name: 'AddPrefermentNews', icon: NoteAddIcon , path:"/AddPrefermentNews"},
    { id: 9,name: 'Complain', icon: LiveHelpIcon, path:"/Complain" },

];
    if (role === "Student-Admin") {
       NavBarItems = [{ id: 1, name: 'Dashboard', icon: DashboardIcon , path:"/StudentAdminDashboard"},
       { id: 2, name: 'Profile', icon: AccountCircleIcon, path:"/Profile" },
       { id: 3, name: 'Notification', icon: NotificationsOutlinedIcon, path:"/NotificationOfStudentAdmin" },
        { id: 5, name: 'AddScholarshipNews', icon: NoteAddIcon , path:"/AddScholarshipNews" },
         { id: 6, name: 'Rules&regulation', icon: DescriptionIcon , path:"/StudentDashboard"},]
     } else if (role === "Employee-Admin" ) {
        NavBarItems = [{ id: 1,name: 'Dashboard', icon: DashboardIcon , path:"/EmployeeAdminDashboard"},
       { id: 2,name: 'Profile', icon: AccountCircleIcon ,path:"/Profile" },
       { id: 3,name: 'Notification', icon: NotificationsOutlinedIcon, path:"/NotificationOfEmployeeAdmin" },
       { id: 8,name: 'AddPrefermentNews', icon: NoteAddIcon , path:"/AddPrefermentNews"},
       { id: 6,name: 'Rules&Regulation', icon: DescriptionIcon , path:"/NotificationOfStudentAdmin"},]
     } else if (role === "Student") {
         NavBarItems = [{ id: 1,name: 'Dashboard', icon: DashboardIcon, path:"/t" },
         { id: 2,name: 'Profile', icon: AccountCircleIcon, path:"/Profile" },
         { id: 3,name: 'Notification', icon: NotificationsOutlinedIcon, path:"/NotificationOfStudents" },
         { id: 9,name: 'Complain', icon: LiveHelpIcon, path:"/Complain" },
         { id: 5,name: 'SelfDisciplineTips', icon: EmojiObjectsIcon,path:"/DisciplineTips"},
         { id: 6,name: 'Rules&Regulation', icon: DescriptionIcon, path:"/NotificationOfStudentAdmin" },]
     } else if (role === "Employee" ) {
         NavBarItems = [{id: 1, name: 'Dashboard', icon: DashboardIcon, path:"/EmployeeDashboard" },
        { id: 2,name: 'Profile', icon: AccountCircleIcon , path:"/Profile"},
        { id: 3,name: 'Notification', icon: NotificationsOutlinedIcon , path:"/NotificationOfEmployees"},
        { id: 9,name: 'Complain', icon: LiveHelpIcon , path:"/Complain"},
        { id: 5,name: 'SelfDisciplineTips', icon: EmojiObjectsIcon , path:"/DisciplineTips"},
        { id: 6,name: 'Rules&Regulation', icon: DescriptionIcon , path:"/NotificationOfStudentAdmin"},
        { id: 7,name: 'CreateAccusation', icon: NoteAddIcon , path:"/IncidentRegForm"},]
     }

    console.log(NavBarItems)
    return  (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>

      {auth && (
        <div>
        <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: open,
        })}
      >
        <MenuIcon />
        <AccountCircle />
        <h6>{role}</h6>
        </IconButton>

        </div>
      )}
      {/* //here goes the profile */}
        </Toolbar>
      </AppBar>
            {/* <AppBar position="fixed" className={classes.appBar}>
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
            </AppBar> */}
            {/* <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider /> */}
                <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
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

            <BrowserRouter>

      
  

      
<Routes>
  
  <Route path='/' element={ <LoginForm/>}></Route>
  <Route path='/AdminStudent' element={<AdminStudent/>}></Route>
  <Route path='/AdminStudent/Dashboard' element={<StudentAdminDashboard/> }></Route>
  <Route path='/AdminStudent/Profile' element={<Profile/> }></Route>
  <Route path='/AdminStudent/Notification' element={<NotificationOfStudentAdmin/> }></Route>
  <Route path='/AdminEmployee/ScheduleHearing' element={<ScheduleHearing/> }></Route>
  <Route path='/AdminStudent/AddScholarshipNews' element={<AddScholarshipNews/> }></Route>
  <Route path='/AdminStudent/RulesandRegulation' element={<Profile/> }></Route>
  <Route path='/AdminEmployee' element={<AdminEmployee/>}></Route>
  <Route path='/AdminEmployee/Dashboard' element={<EmployeeAdminDashboard/>}></Route>
  <Route path='/AdminEmployee/Profile' element={<Profile/>}></Route>
  <Route path='/AdminEmployee/Notification' element={<NotificationOfEmployeeAdmin/> }></Route>
  <Route path='/AdminEmployee/ScheduleHearing' element={<ScheduleHearing/> }></Route>
 <Route path='/AdminEmployee/AddPrefermentNews' element={<AddPrefermentNews/>}></Route>
  <Route path='/AdminEmployee/RulesandRegulation' element={<Profile/> }></Route>
  <Route path='/Student' element={<Student/>}></Route>
  <Route path='/Student/Dashboard' element={<StudentDashboard/> }></Route>
  <Route path='/Student/Profile' element={<Profile/> }></Route>
  <Route path='/Student/Notification' element={<NotificationOfStudents/> }></Route>
  <Route path='/Student/Complain' element={<Complain/> }></Route>
  <Route path='/Student/DisciplineTips' element={<DisciplineTips/> }></Route>
  <Route path='/DisciplineTips' element={<DisciplineTips/>}></Route>
  <Route path='/IncidentRegForm' element={<IncidentRegForm/>}></Route>
  <Route path='/ScheduleHearing' element={<ScheduleHearing/>}></Route>
  {/* <Route path='/VerticalNavBar' element={<VerticalNavBar/>}></Route> */}
  <Route path='/Profile' element={<Profile/>}></Route>
  <Route path='/Complain' element={<Complain/>}></Route>
  
  <Route path='/t' element={<Test/>}></Route>
  <Route path='/r' element={<Layout/>}></Route>

  
  <Route path='/StudentAdminDashboard' element={<StudentAdminDashboard/>}></Route>
  <Route path='/StudentDashboard' element={<StudentDashboard/>}></Route>
  <Route path='/EmployeeAdminDashboard' element={<EmployeeAdminDashboard/>}></Route>
  <Route path='/EmployeeDashboard' element={<EmployeeDashboard/>}></Route>
  <Route path='/NotificationOfStudentAdmin' element={<NotificationOfStudentAdmin/>}></Route>
  <Route path='/NotificationOfEmployeeAdmin' element={<NotificationOfEmployeeAdmin/>}></Route>
  <Route path='/NotificationOfStudents' element={<NotificationOfStudents/>}></Route>
  <Route path='/NotificationOfEmployees' element={<NotificationOfEmployees/>}></Route>
  <Route path='/AddPrefermentNews' element={<AddPrefermentNews/>}></Route>
  <Route path='/AddScholarshipNews' element={<AddScholarshipNews/>}></Route>
  <Route path='/RegisterStudent' element={<RegisterStudent/>}></Route>
  <Route path='/RegisterEmployee' element={<RegisterEmployee/>}></Route>
  <Route path='/Employee' element={<Employee/>}></Route>
  <Route path='/Employee/Dashboard' element={<EmployeeDashboard/>}></Route>
  <Route path='/Employee/Profile' element={<Profile/>}></Route>
  <Route path='/Employee/CreateAccusation' element={<IncidentRegForm/>}></Route>
  <Route path='/Employee/Complain' element={<Complain/> }></Route>
  <Route path='/Employee/Notification' element={<NotificationOfEmployees/>}></Route>
  <Route path='/Employee/DisciplineTips' element={<DisciplineTips/>}></Route>
   </Routes>
      
</BrowserRouter>


            </div>
            )}
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
                {/* <p>Hi there</p>
        </div>
    ): <div></div>; */}

