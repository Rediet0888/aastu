import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
//import Rules from "../files/Rules and Regulation for students.pdf"

import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardIcon from '@material-ui/icons/Dashboard';
import DescriptionIcon from '@material-ui/icons/Description';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import { Link } from 'react-router-dom';

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
  account: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    float: 'left',
  },
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
  let role = window.localStorage.getItem('role_type');

  let NavBarItems = [
    { id: 1, name: 'Dashboard', icon: DashboardIcon, path: '/t' },
    { id: 2, name: 'Profile', icon: AccountCircleIcon, path: '/Profile' },
    {
      id: 3,
      name: 'Notification',
      icon: NotificationsOutlinedIcon,
      path: '/StudentDashboard',
    },
    {
      id: 4,
      name: 'ScheduleHearing',
      icon: AccessTimeIcon,
      path: '/ScheduleHearing',
    },
    {
      id: 5,
      name: 'AddScholarshipNews',
      icon: NoteAddIcon,
      path: '/AddScholarshipNews',
    },
    {
      id: 6,
      name: 'Rules&Regulation',
      icon: DescriptionIcon,
      path: '/RulesAndRegulation',
    },
    {
      id: 7,
      name: 'CreateAccusation',
      icon: NoteAddIcon,
      path: '/IncidentRegForm',
    },
    {
      id: 8,
      name: 'AddPrefermentNews',
      icon: NoteAddIcon,
      path: '/AddPrefermentNews',
    },
    { id: 9, name: 'Complain', icon: LiveHelpIcon, path: '/Complain' },
    { id: 10, name: 'Students', icon: LiveHelpIcon, path: '/Student' },
    { id: 11, name: 'Employees', icon: LiveHelpIcon, path: '/Employee' },
  ];
  if (role === 'Student-Admin') {
    NavBarItems = [
      {
        id: 1,
        name: 'Dashboard',
        icon: DashboardIcon,
        path: '/StudentAdminDashboard',
      },
      { id: 2, name: 'Profile', icon: AccountCircleIcon, path: '/Profile' },
      {
        id: 3,
        name: 'Notification',
        icon: NotificationsOutlinedIcon,
        path: '/NotificationOfStudentAdmin',
      },
      {
        id: 4,
        name: 'ScheduleHearing',
        icon: AccessTimeIcon,
        path: '/ScheduleHearing',
      },
      {
        id: 5,
        name: 'AddScholarshipNews',
        icon: NoteAddIcon,
        path: '/AddScholarshipNews',
      },
      {
        id: 6,
        name: 'Rules&regulation',
        icon: DescriptionIcon,
        path: '/RulesAndRegulation',
      },
      { id: 10, name: 'Students', icon: LiveHelpIcon, path: '/Student' },
    ];
  } else if (role === 'Employee-Admin') {
    NavBarItems = [
      {
        id: 1,
        name: 'Dashboard',
        icon: DashboardIcon,
        path: '/EmployeeAdminDashboard',
      },
      { id: 2, name: 'Profile', icon: AccountCircleIcon, path: '/Profile' },
      {
        id: 3,
        name: 'Notification',
        icon: NotificationsOutlinedIcon,
        path: '/NotificationOfEmployeeAdmin',
      },
      {
        id: 4,
        name: 'ScheduleHearing',
        icon: AccessTimeIcon,
        path: '/ScheduleHearing',
      },
      {
        id: 8,
        name: 'AddPrefermentNews',
        icon: NoteAddIcon,
        path: '/AddPrefermentNews',
      },
      {
        id: 6,
        name: 'Rules&Regulation',
        icon: DescriptionIcon,
        path: '/RulesAndRegulation',
      },
      { id: 11, name: 'Employees', icon: LiveHelpIcon, path: '/Employee' },
    ];
  } else if (role === 'Student') {
    NavBarItems = [
      { id: 1, name: 'Dashboard', icon: DashboardIcon, path: '/t' },
      { id: 2, name: 'Profile', icon: AccountCircleIcon, path: '/Profile' },
      {
        id: 3,
        name: 'Notification',
        icon: NotificationsOutlinedIcon,
        path: '/NotificationOfStudents',
      },
      { id: 9, name: 'Complain', icon: LiveHelpIcon, path: '/Complain' },
      {
        id: 5,
        name: 'SelfDisciplineTips',
        icon: EmojiObjectsIcon,
        path: '/DisciplineTips',
      },
      {
        id: 6,
        name: 'Rules&Regulation',
        icon: DescriptionIcon,
        path: '/RulesAndRegulation',
      },
    ];
  } else if (role === 'Employee') {
    NavBarItems = [
      {
        id: 1,
        name: 'Dashboard',
        icon: DashboardIcon,
        path: '/EmployeeDashboard',
      },
      { id: 2, name: 'Profile', icon: AccountCircleIcon, path: '/Profile' },
      {
        id: 3,
        name: 'Notification',
        icon: NotificationsOutlinedIcon,
        path: '/NotificationOfEmployees',
      },
      { id: 9, name: 'Complain', icon: LiveHelpIcon, path: '/Complain' },
      {
        id: 5,
        name: 'SelfDisciplineTips',
        icon: EmojiObjectsIcon,
        path: '/DisciplineTips',
      },
      {
        id: 6,
        name: 'Rules&Regulation',
        icon: DescriptionIcon,
        path: '/RulesAndRegulation',
      },
      {
        id: 7,
        name: 'CreateAccusation',
        icon: NoteAddIcon,
        path: '/IncidentRegForm',
      },
    ];
  }

  console.log(NavBarItems);
  return (
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
              </IconButton>

              <div className="classes.account">
                <AccountCircle />
                <h3>{role}</h3>
              </div>
            </div>
          )}
          {/* //here goes the profile */}
        </Toolbar>
      </AppBar>
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
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {NavBarItems.map((menu) => (
            <Link className={classes.noDecoration} to={menu.path} key={menu.id}>
              <ListItem button>
                <ListItemIcon>{[<menu.icon />]}</ListItemIcon>
                <ListItemText primary={menu.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
