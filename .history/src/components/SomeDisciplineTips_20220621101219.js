import React from "react";
import {
  Paper,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./DisciplineTips.css";
import DisciplineTips from "./pages/DisciplineTips";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "20px",
  },
});

const SomeDisciplineTips = () => {
  const classes = useStyles();
  const disciplineTipsData = [
    { id: 1, title: "Tips for sucessful career", description: "1.Establish a strong work ethic 2.Own up to your mistakes 3.Ask for help 4.Stay positive " },
    { id: 2, title: "Are you procastinating? here are some solutions...", description: "1.Take control of your work or study environment  2.Make a TO-DO list 3.Give yourself rewards 4.Use a planner for time management" },
    { id: 3, title: "For getting rid of drug addictions you might try:-.", description: "1.Yoga 2.Meditation 3.Reading 4.walking " }


  ];
  return (
    <Grid xs={12} container className="tips">
      {disciplineTipsData.map((tips) => {
      return  <Grid key={tips.id} xs={6} item>
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
                  {tips.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {tips.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>;
      })}
    </Grid>
  );
};

export default SomeDisciplineTips;
