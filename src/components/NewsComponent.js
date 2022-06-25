import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export default function NewsComponent() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/announcement`).then((response) => {
      setNews(
        response.data.post.filter((a) => a.announcement_type === 'Scholarship')
      );
    });
  }, []);

  const classes = useStyles();

  return news.map((n) => (
    <Card className={classes.root} style={{ marginBottom: 10 }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {n.announcement_type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {n.detail}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  ));
}
