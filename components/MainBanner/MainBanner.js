import React from "react";
import { Grid } from "@mui/material";
import CardGame from "../CardGame/CardGame";
import stadium from "../../assets/stadium.jpg"

const MainBanner = () => {

  return (
    <Grid item xs={12} md={6}>
      <CardGame
        cardInfos={{
          name: "Surebets & Arbs",
          text: "Bet with the certain you're win!",
          img: stadium.src,
          route: "/bingo",
        }}
      />
    </Grid>
  );
};

export default MainBanner;
