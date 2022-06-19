import { Paper,
Card,
Typography,
CardActionArea,
CardMedia,
CardContent,
Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import '../DisciplineTips.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  }
});

const DisciplineTips = () => {
  const classes = useStyles();
  
  return (
    <Grid>
 
        <Grid xs={12} className='tips'>
        <Grid xs={4} >
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("../../images/plan.jpg")}
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
          image={require("../../images/plan.jpg")}
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
          image={require("../../images/plan.jpg")}
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
        <Grid xs={12} className='tipstwo'>
        <Grid xs={4} >
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("../../images/plan.jpg")}
          title="Tip4"
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
          image={require("../../images/plan.jpg")}
          title="Tip5"
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
          image={require("../../images/plan.jpg")}
          title="Tip6"
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
        <Grid xs={12} className='tipsthree'>
        <Grid xs={4} >
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("../../images/plan.jpg")}
          title="Tip7"
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
          image={require("../../images/plan.jpg")}
          title="Tip8"
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
          image={require("../../images/plan.jpg")}
          title="Tip9"
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
        <Grid xs={12} className='tipsfour'>
        <Grid xs={4} >
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("../../images/plan.jpg")}
          title="Tip10"
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
          image={require("../../images/plan.jpg")}
          title="Tip11"
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
          image={require("../../images/plan.jpg")}
          title="Tip12"
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
        
    </Grid>
  )
}

export default DisciplineTips