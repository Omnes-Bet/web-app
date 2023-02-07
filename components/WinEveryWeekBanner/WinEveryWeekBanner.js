import React from "react";
import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "600px",
    height: "350px",
  },
  titleSection: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontFamily: "system-ui",
    fontSize: "40px",
  },
  optionSectionDesktop: {
    display: "flex",
    justifyContent: "space-around",
    height: "200px",
    gap: "70px",
  },
  optionSectionMobile: {
    display: "flex",
    justifyContent: "space-around",
    height: "200px",
  },
  optionsColumnDesktop: {
    color: "black",
    display: "flex",
    flexDirection: "Column",
    justifyContent: "space-around",
  },
  optionsColumnMobile: {
    color: "black",
    display: "flex",
    flexDirection: "Column",
    justifyContent: "space-around",
    width: "170px"
  },
  option: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionTitle: {
    width: "260px",
    textAlign: "center",
  },
  lineBottom: {
    height: "15px",
    width: "100%",
    backgroundColor: "black",
  },
}));

const WinEveryWeekBanner = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <div className={classes.main}>
        <div className={classes.box}>
          <div className={classes.titleSection}>
            <h2 className={classes.title}>Win Every Week</h2>
          </div>
          <div className={isDesktop ? classes.optionSectionDesktop : classes.optionSectionMobile}>
            <div className={isDesktop ? classes.optionsColumnDesktop : classes.optionsColumnMobile}>
              <div className={classes.option}>
                <AttachMoneyIcon />
                <h3 className={classes.optionTitle}>Profitable Surebets</h3>
              </div>

              <div className={classes.option}>
                <SignalCellularAltIcon />
                <h3 className={classes.optionTitle}>Algorithms work for you</h3>
              </div>
            </div>
            <div className={isDesktop ? classes.optionsColumnDesktop : classes.optionsColumnMobile}>
              <div className={classes.option}>
                <CloudQueueIcon />
                <h3 className={classes.optionTitle}> No need to download</h3>
              </div>

              <div className={classes.option}>
                <AccountTreeIcon />
                <h3 className={classes.optionTitle}>
                  Bet on all the results of a event and still profit
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.lineBottom}></div>
    </div>
  );
};

export default WinEveryWeekBanner;
