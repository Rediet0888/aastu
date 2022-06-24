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
  },
  media:{
    maxHeight: 300,
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
          image={require("../../images/A+.jpg")}
          title="Tip1"
          component="img"
        />
        {/* <img src='../../images/plan.jpg'/> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Tips for getting A's
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          1.Attend class Regularly<br />
          2.Take good notes<br />
          3.Ask questions<br />
          4.Revise your notes
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
          image={require("../../images/timeman.jpg")}
          title="Tip2"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Time management skills
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          1.Prioritze<br />
          2.Set goals<br />
          3.Schedule<br />
          4.Organize yourself
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
          image={require("../../images/procast.jpg")}
          title="Tip3"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Are you procastinating?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          here are some solutions...<br />
          1.Take control of your work or study environment<br />
          2.Make a TO-DO list <br />
          3.Give yourself rewards <br />
          4.Use a planner for time management
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
          image={require("../../images/communicate.jpg")}
          title="Tip4"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Communication skills
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          1.Listen more<br />
          2.Think before you speak<br />
          3.Be brief and specific<br />
          4.Make eye contact
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
          image={require("../../images/peer.jpg")}
          title="Tip5"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Is peer pressure giving you a headache?
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          1.Talk to the person who is pressuring<br />
          2.Have friends with similar values and beliefs<br />
          3.Give an excuse<br />
          4.Talk to the person who is pressuring
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
          image={require("../../images/drug.jpg")}
          title="Tip6"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          For getting rid of drug addictions you might try:-
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          1.Yoga<br />
          2.Meditation<br />
          3.Reading<br />
          4.walking
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
          image={require("../../images/hobbies.jpg")}
          title="Tip7"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          For developing hobbies
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          1.Know what you are interested in<br />
          2.Start trying new things
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
          image={require("../../images/health.jpg")}
          title="Tip8"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Healthy lifestyle tips
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          1.Eat a healthy diet<br />
          2.Consume less salt and sugar<br />
          3.Avoid alcohol<br />
          4.Don't smoke

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
          image={require("../../images/career.jpg")}
          title="Tip9"
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Tips for sucessful career
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          1.Establish a strong work ethic<br />
          2.Own up to your mistakes<br />
          3.Ask for help<br />
          4.Stay positive 
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