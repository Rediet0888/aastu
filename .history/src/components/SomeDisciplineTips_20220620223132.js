import React from 'react'
import { Paper,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid } from '@material-ui/core'
  import { makeStyles } from '@material-ui/core/styles';
  
  import './DisciplineTips.css'
  
  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    }
  });
  
  



const SomeDisciplineTips = () => {
  const classes = useStyles();

  return (
    <Grid xs={12} className='tips'>
    <Grid xs={4} >
    <Card className={classes.root}>
    <CardActionArea>
    <CardMedia
      className={classes.media}
      image={require("../images/plan.jpg")}
      title="Tip1"
      component="img"
    />
    {/* <img src='../../images/plan.jpg'/> */}
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
    <Grid xs={4} >
    <Card className={classes.root}>
    <CardActionArea>
    <CardMedia
      className={classes.media}
      image={require("../images/plan.jpg")}
      title="Tip2"
      component="img"
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
    <Grid xs={4} >
    <Card className={classes.root}>
    <CardActionArea>
    <CardMedia
      className={classes.media}
      image={require("../images/plan.jpg")}
      title="Tip3"
      component="img"
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
    </Grid>
  )
}

export default SomeDisciplineTips;