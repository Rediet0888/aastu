import { Paper,
Card,
Typography,
CardActionArea,
CardMedia,
CardContent,
Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  }
});

const DisciplineTips = () => {
  const classes = useStyles();
  const disstyle={padding :20,height:'100vh',width:600, margin:"20px auto"}
  return (
    <Grid>
      <Paper elevation={30} style={disstyle}>
        <Grid>
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/plan.jpg"
          title="Tip1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Discipline
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut neque consectetur, rhoncus nulla bibendum, laoreet neque.
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
        </Grid>
        </Paper>
    </Grid>
  )
}

export default DisciplineTips