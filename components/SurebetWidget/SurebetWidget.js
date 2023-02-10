import React, { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    width: "100%",
    backgroundColor: "white",
    height: "250px",
    borderRadius: "20px",
    overflow: "hidden",
    margin: "30px"
  },
  oddsBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "40px",
  },
  eventInfoWrapper: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "sans-serif",
    fontWeight: "300",
  },
  infoTexts: {
    fontFamily: "sans-serif",
    fontWeight: "300",
  },
  oddsSection: {
    display: "flex",
    justifyContent: "space-between",
    height: "120px",
    textAlign: "center",
  },
  oddsInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "5px",
    backgroundColor: "rgb(220,220,220, .7)",
    width: "200px",
    borderRadius: "16px",
  },
  percentageProfit: {
    display: "flex",
    width: "120px",
    flexDirection: "column",
    justifyContent: "center",
    backgroundImage: "linear-gradient(to bottom right, #0D324D, #060C23)",
    color: "white",
    textAlign: "center",
    gap: "20px",
    fontFamily: "sans-serif",
    fontSize: "large"
  },
}));

const SurebetWidget = ({ obj }) => {
  const classes = useStyles();
  const [oddHome, setOddHome] = useState("");
  const [oddDraw, setOddDraw] = useState("");
  const [oddAway, setOddAway] = useState("");

  const handleChangeOddHome = (event) => {
    setOddHome(event.target.value);
  };

  const handleChangeOddDraw = (event) => {
    setOddDraw(event.target.value);
  };

  const handleChangeOddAway = (event) => {
    setOddAway(event.target.value);
  };

  return (
    <div className={classes.main}>
      <div className={classes.oddsBox}>
        <div className={classes.eventInfoWrapper}>
          <h4 className={classes.infoTexts}>{obj.category_name} - {obj.league_name}</h4>
          <h4 className={classes.infoTexts}>{obj.md}</h4>
        </div>
        <div className={classes.oddsSection}>
          <div className={classes.oddsInfo}>
            <h3 className={classes.infoTexts}>{obj.ht}</h3>
            <h3 className={classes.infoTexts}>{oddHome}</h3>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Odds Home</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={oddHome}
                label="Odds Home"
                onChange={handleChangeOddHome}
              >
                {obj.odds
                  .filter((i) => i.type == "Casa")[0]
                  ?.values.map((i) => {
                    return <MenuItem value={i.odd}>{i.bookie_name}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </div>
          {obj.odds.filter((i) => i.type == "x").length > 0 && (
            <div className={classes.oddsInfo}>
              <h3 className={classes.infoTexts}>Draw</h3>
              <h3 className={classes.infoTexts}>{oddDraw}</h3>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Odds Draw</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={oddDraw}
                  label="Odds Draw"
                  onChange={handleChangeOddDraw}
                >
                  {obj.odds
                    .filter((i) => i.type == "x")[0]
                    ?.values.map((i) => {
                      return <MenuItem value={i.odd}>{i.bookie_name}</MenuItem>;
                    })}
                </Select>
              </FormControl>
            </div>
          )}
          <div className={classes.oddsInfo}>
            <h3 className={classes.infoTexts}>{obj.at}</h3>
            <h3 className={classes.infoTexts}>{oddAway}</h3>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Odds Away</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={oddAway}
                label="Odds Away"
                onChange={handleChangeOddAway}
              >
                {obj.odds
                  .filter((i) => i.type == "Fora")[0]
                  ?.values.map((i) => {
                    return <MenuItem value={i.odd}>{i.bookie_name}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className={classes.percentageProfit}>
        <h3>{parseFloat(obj.payout - 100).toFixed(2)}%</h3>
        <h4>Profit</h4>
      </div>
    </div>
  );
};

export default SurebetWidget;
