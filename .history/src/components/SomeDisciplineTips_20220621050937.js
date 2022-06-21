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
    { id: 1, title: "Discipline Tips", description: "Discipline Tips" },
    { id: 2, title: "Discipline Tips", description: "Discipline Tips" },
  ];
  return (
    <Grid xs={12} className="tips">
      {disciplineTipsData.map((tips) => {
        <Grid key={tips.id} >
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
