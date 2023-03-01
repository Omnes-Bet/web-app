import React from 'react';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    backgroundImage: 'linear-gradient(to right, #060C23 , black, #060C23)',
    borderRadius: '1rem',
    boxShadow: '0 0 1rem rgba(255, 255, 255, 0.1)',
    paddingTop: "6rem"
  },
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "2rem"
  },
  title: {
    color: '#fff',
    fontSize: '3rem',
    marginBottom: '2rem',
    textAlign: 'center',
    fontFamily: "sans-serif",
  },
  text: {
    color: '#fff',
    fontFamily: "sans-serif",
    fontSize: '1rem',
    lineHeight: 2.5,
    marginBottom: '2rem',
    textAlign: 'justify',
  },
});

function HowItWorks() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <h1 className={classes.title}>How It Works</h1>
      <p className={classes.text}>
        Welcome to our surebet software website, where we provide you with an innovative and easy-to-use platform for identifying and taking advantage of surebets in the sports betting market. In this page, we'll explain how our software works and how you can use it to make profit from sports betting.
      </p>
      <p className={classes.text}>
        First of all, let's define what is a surebet. A surebet, also known as an arbitrage bet, is a situation in which different bookmakers offer odds on a sports event that guarantee a profit for the bettor, regardless of the outcome of the event. By placing bets on all possible outcomes with different bookmakers, the bettor can ensure a profit, no matter who wins the game.
      </p>
      <p className={classes.text}>
        Our software scans the odds offered by different bookmakers on a large number of sports events and identifies surebet opportunities in real-time. You can use our platform to search for surebets on specific sports, leagues or events, and to filter the results based on different criteria, such as profit margin, minimum and maximum odds, and bookmaker preferences.
      </p>
      <p className={classes.text}>
        Once you have identified a surebet, our software calculates the optimal bet amounts to place on each outcome, taking into account the odds and the commission charged by the bookmakers. You can use our integrated betting calculator to see how much to bet and how much profit you can expect to make from the surebet.
      </p>
      <p className={classes.text}>
        Using our surebet software can help you to make consistent and risk-free profits from sports betting, without the need for extensive knowledge or experience in the betting industry. Our software is user-friendly, reliable and constantly updated to ensure the highest accuracy and performance.
      </p>
      <p className={classes.text}>
        In conclusion, if you want to take advantage of the surebet opportunities in the sports betting market and increase your winnings, our surebet software is the perfect tool for you. With our innovative platform, you can easily find, calculate and place bets on surebets, and make a profit with minimal effort and risk.
      </p>
      </div>
    </div>
  );
}

export default HowItWorks;
