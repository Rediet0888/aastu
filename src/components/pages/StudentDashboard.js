import { makeStyles } from '@material-ui/core/styles';

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

const StudentDashboard = () => {
  const classes = useStyles();
  const news = [{ n: 'red' }, { n: 'rehd' }, { n: 'redj' }];
  return (
    <div>
      <main className={classes.content}>
        <h3>Hello Student</h3>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
};

export default StudentDashboard;
