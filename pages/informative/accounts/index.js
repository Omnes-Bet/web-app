import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles({
  container: {
    backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
    padding: "3rem",
    paddingTop: "6rem",
    fontFamily: "sans-serif",
    borderRadius: "1rem",
  },
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  title: {
    color: "white",
    fontSize: "3rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  subtitle: {
    color: "#262626",
    fontSize: "2rem",
    fontWeight: "500",
    marginBottom: "1rem",
    textAlign: "left",
  },
  question: {
    color: "#262626",
    fontSize: "1.5rem",
    marginBottom: "10px",
    textAlign: "left",
  },
  answer: {
    color: "#5e5e5e",
    fontSize: "1rem",
    lineHeight: 2,
    textAlign: "justify",
    marginBottom: "30px",
    marginLeft: "15px",
  },
});

function AccountsPayouts() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Typography variant="h1" className={classes.title}>
          Accounts & Payouts
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2" className={classes.subtitle}>
              Account Setup
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>
                How do I create an account?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                You can create an account by visiting our website and clicking
                on the "Sign Up" button. Follow the prompts to enter your
                information and create your account.
              </Typography>
              <Typography variant="h3" className={classes.question}>
                Can I have multiple accounts?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Each user is allowed one account. If you need multiple accounts
                for your business, please contact our customer support team.
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography variant="h2" className={classes.subtitle}>
              Account Security
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>
                How do I protect my account from unauthorized access?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                You can protect your account by using a strong password. We also recommend that you
                do not share your account login credentials with anyone and be
                cautious of phishing attempts.
              </Typography>
              <Typography variant="h3" className={classes.question}>
                What should I do if I suspect unauthorized access to my account?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                If you suspect unauthorized access to your account, please
                contact our customer support team immediately.
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
export default AccountsPayouts;
