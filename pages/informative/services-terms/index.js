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

function ServiceTerms() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Typography variant="h1" className={classes.title}>
          Service Terms
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2" className={classes.subtitle}>
              Subscription
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>
                How do I cancel my subscription?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                You can cancel your subscription anytime by logging into your
                account and going to the User page. From there, you can
                choose to cancel your subscription.
              </Typography>

              <Typography variant="h3" className={classes.question}>
                Is there a refund policy?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                We do not offer refunds for subscription fees paid.
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h2" className={classes.subtitle}>
              Intellectual Property
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>
                Who owns the intellectual property rights to the software?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                We own all the intellectual property rights to the software,
                including but not limited to, patents, copyrights, trademarks,
                and trade secrets. You may not reproduce, distribute, modify, or
                create derivative works of our software without our prior
                written consent.
              </Typography>
              <Typography variant="h3" className={classes.question}>
                What is the license for using the software?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                By subscribing to our software, we grant you a non-exclusive,
                non-transferable license to use the software for your own
                personal or business use, in accordance with these Service
                Terms.
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
              Termination
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>
                What are the grounds for terminating your subscription?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                We reserve the right to terminate your subscription at any time
                and for any reason, including but not limited to, breach of
                these Service Terms, fraudulent activity, or violation of
                applicable laws or regulations.
              </Typography>

              <Typography variant="h3" className={classes.question}>
                What happens if your subscription is terminated?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                If your subscription is terminated, you will no longer have
                access to our software and all rights granted to you under these
                Service Terms will immediately cease.
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default ServiceTerms;
