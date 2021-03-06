import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import NewsComponent from "./NewsComponent";
import Grid from "@material-ui/core/Grid";
import ForumIcon from "@material-ui/icons/Forum";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import Paper from "@material-ui/core/Paper";
import SomeDisciplineTips from "./SomeDisciplineTips";
import { Link } from "react-router-dom";
import DescriptionIcon from "@material-ui/icons/Description";
import DashboardIcon from "@material-ui/icons/Dashboard";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: "gray",
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

export default function VerticalNavBarStudent() {
  const classes = useStyles();
  const news = [
    { id: 1, title: "red", description: "red" },
    { id: 2, title: "red", description: "red" },
    { id: 3,title: "red", description: "red" },
    { id: 4,title: "red", description: "red" },
    { id: 5,title: "red", description: "red" },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar sx={{ backgroundColor: "red" }}>
          <Grid container xs={12} alignItems="flex-end">
            <Grid item xs={10}>
              <Typography variant="h6" noWrap>
                Student
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="standard-search"
                label="Search field"
                type="search"
              />
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
          {[
            { name: "Dashboard", icon: DashboardIcon },
            { name: "Profile", icon: AccountCircleIcon },
            { name: "Notification", icon: NotificationsOutlinedIcon },
            { name: "DisciplineTips", icon: EmojiObjectsIcon },
            { name: "Rules&Regulation", icon: DescriptionIcon },
          ].map((menu) => (
            <Link to={menu.name} underline="none">
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
          {news.map((singleNews) => {
            return (
              <Grid key={singleNews} item xs={4}>
                <NewsComponent  news={singleNews} />
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <SomeDisciplineTips />
            </Paper>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
