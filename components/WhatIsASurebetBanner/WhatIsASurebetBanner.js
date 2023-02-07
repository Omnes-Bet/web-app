import React from "react";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import mobileSurebets from "../../assets/mobile-surebets.png";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
    marginTop: "5px",
    padding: "15px",
  },
  boxDesktop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    background: "rgba(245, 245, 245, 0.1)",
    borderRadius: "16px",
    width: "600px",
    height: "430px",
  },
  boxMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    background: "rgba(245, 245, 245, 0.1)",
    borderRadius: "16px",
    width: "600px"
  },
  textSection: {
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "280px",
    paddingLeft: "20px",
  },
  title: {
    fontFamily: "sans-serif",
    fontStyle: "Medium",
    fontSize: "40px",
    letterSpacing: "2px",
  },
  description: {
    fontFamily: "Montserrat",
    fontStyle: "Regular",
    fontSize: "20px",
    lineHeight: "24px",
    letterSpacing: "0.2px",
  },
  imgDesktop: {
    width: "250px",
  },
  imgMobile: {
    width: "180px",
  },
}));

const WhatIsASurebetBanner = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.main}>
      <div className={isDesktop ? classes.boxDesktop : classes.boxMobile}>
        <div className={classes.textSection}>
          <h3 className={classes.title}>What are surebets?</h3>
          <div className={classes.description}>
            A surebet is a mathematically calculated arbitrage situation where
            the bettor wins whatever the outcome!
          </div>
        </div>
        <div>
          <img
            className={isDesktop ? classes.imgDesktop : classes.imgMobile}
            src={mobileSurebets.src}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsASurebetBanner;
