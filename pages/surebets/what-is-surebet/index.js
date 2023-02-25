import React, { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import surebetsImg from "../../../assets/surebets.png";
import arbitrageImg from "../../../assets/arbitrage.webp";
import PageSeo from "../../../components/PageSeo";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: "6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 40,
    marginTop: 40,
    backgroundColor: "#212121",
    color: "#fff",
    borderRadius: 20,
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.4)",
    "@media (max-width: 600px)": {
      padding: 20,
      marginTop: 20,
    },
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 80,
    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop: 40,
      marginBottom: 40,
    },
  },
  sectionTitle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 3,
    marginBottom: 20,
    "@media (max-width: 600px)": {
      fontSize: "2rem",
      marginBottom: 10,
    },
  },
  sectionContent: {
    textAlign: "justify",
    maxWidth: 800,
    lineHeight: 1.5,
    marginRight: 80,
    "@media (max-width: 600px)": {
      marginRight: 0,
      marginBottom: 20,
    },
  },
  sectionImage: {
    height: "auto",
    borderRadius: 10,
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
    "@media (max-width: 600px)": {
      marginLeft: 0,
      maxWidth: 300,
    },
  },
  highlight: {
    color: "#ffc107",
  },
}));

const WhatIsSurebet = () => {
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | What is Surebets && Arbitrage",
    description:
      "Get a deep understanding of what is a surebet & arbitrage in sports betting.",
    pageUrl: pageUrl,
  };

  const classes = useStyles();


  return (
    <Container maxWidth="lg" className={classes.container}>
      <PageSeo seoProps={pageSeoProps} />
      <Box className={classes.section}>
        <Box className={classes.sectionContent}>
          <Typography variant="h4" className={classes.sectionTitle}>
            What are Surebets?
          </Typography>
          <Typography variant="body1">
            Surebets, also known as arbitrage bets, are a type of bet where the
            bettor can make a profit regardless of the outcome of the game. This
            is achieved by taking advantage of differences in odds offered by
            different bookmakers.
          </Typography>
          <Typography variant="body1">
            In a surebet, the bettor places a bet on all possible outcomes of a
            game with different bookmakers, so that the total odds are greater
            than 1. This ensures a profit no matter the outcome of the game. The
            profit is usually small, but can be significant when large amounts
            of money are bet.
          </Typography>
          <Typography variant="body1">
            Surebets are popular among professional bettors, who are always
            looking for opportunities to make a profit. However, they require
            careful analysis and monitoring of odds, and can be difficult to
            find and execute.
          </Typography>
        </Box>
        <Box className={classes.sectionImage}>
          <img src={surebetsImg.src} alt="surebets" />
        </Box>
      </Box>
      <Box className={classes.section} sx={{ gap: "40px" }}>
        <Box className={classes.sectionImage}>
          <img src={arbitrageImg.src} alt="arbitrage" />
        </Box>
        <Box className={classes.sectionContent}>
          <Typography variant="h4" className={classes.sectionTitle}>
            What is Arbitrage?
          </Typography>
          <Typography variant="body1">
            Arbitrage is a trading strategy that involves buying and selling the
            same asset on different markets in order to take advantage of price
            differences and make a profit. In the world of sports betting,
            arbitrage refers to the same concept, but instead of trading assets,
            the bettor is placing bets on different outcomes of the same game.
          </Typography>
          <Typography variant="body1">
            Like surebets, arbitrage bets can be used to guarantee a profit
            regardless of the outcome of the game. This is done by taking
            advantage of differences in odds offered by different bookmakers.
            The bettor places bets on all possible outcomes of the game with
            different bookmakers, so that the total odds are greater than 1. In
            this way, the bettor can make a profit no matter the outcome of the
            game.
          </Typography>
          <Typography variant="body1">
            However, as with surebets, arbitrage bets require careful analysis
            and monitoring of odds, and can be difficult to find and execute.
            The profit from arbitrage bets is usually small, but can be
            significant when large amounts of money are bet.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default WhatIsSurebet;
