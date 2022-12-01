import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <img src={props.imageUrl} alt="image"/>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.headline}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.primaryText}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.description}
        </Typography>
        <Typography variant="body2" component="p">
          {props.companyName}
          <br />
          {props.companyUrl}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{props.CTA}</Button>
      </CardActions>
    </Card>
  );
}
