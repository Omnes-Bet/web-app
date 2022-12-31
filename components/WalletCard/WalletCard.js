import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Card, CardActions, CardContent, Button, Typography} from "@mui/material";
import { Save, Send } from "@mui/icons-material";

const useStyles = makeStyles({
  root: {},
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  convertedBalance: {
    marginBottom: 12
  },
  send: {
    color: "green"
  }
});

const WalletCard = (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Account Overview
        </Typography>
        <Typography variant="h5" component="h2">
          {props.balance + " " + props.currency + props.currencySymbol}
        </Typography>
        <Typography className={classes.convertedBalance} color="textSecondary">
          {props.balance +
            " = " +
            props.convertedBalance +
            " " +
            props.convertedCurrency}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container>
          <Grid item xs={6}>
            {" "}
            <Button
              variant="outlined"
              size="small"
              className={classes.send}
              startIcon={<Send />}
            >
              Send
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.recieve}
              startIcon={<Save />}
            >
              Recieve
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default WalletCard;