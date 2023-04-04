import React from "react";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import mobileSurebets from "../../assets/iphone_oddspedia.png";

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
    width: "600px",
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
    width: "230px",
  },
  imgMobile: {
    width: "150px",
  },
}));

const WhatIsASurebetBanner = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.main}>
      <div className={isDesktop ? classes.boxDesktop : classes.boxMobile}>
        <div className={classes.textSection}>
          <h3 className={classes.title}>Surebets</h3>
          <div className={classes.description}>
            Uma Surebet é uma situação de arbitragem calculada matematicamente
            em que o apostador ganha em qualquer que seja o resultado!
          </div>
        </div>
        <div>
          <img
            className={isDesktop ? classes.imgDesktop : classes.imgMobile}
            src={mobileSurebets.src}
            alt="surebet-image"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsASurebetBanner;
