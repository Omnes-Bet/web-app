import React from 'react';
import { makeStyles } from "@mui/styles";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
  container: {
    backgroundColor: '#262626',
    padding: "3rem",
    fontFamily: "sans-serif",
    borderRadius: '1rem',
  },
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  title: {
    color: '#262626',
    fontSize: '3rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  subtitle: {
    color: '#262626',
    fontSize: '2rem',
    fontWeight: "500",
    marginBottom: '1rem',
    textAlign: 'left',
  },
  rule: {
    color: '#262626',
    fontSize: '1.5rem',
    marginBottom: '10px',
    textAlign: 'left',
  },
  description: {
    color: '#5e5e5e',
    fontSize: '1rem',
    lineHeight: 2,
    textAlign: 'justify',
    marginBottom: '30px',
    marginLeft: "15px"
  },
});

function Rules() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Typography variant="h1" className={classes.title}>Rules</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="h2" className={classes.subtitle}>Account Registration</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.rule}>Age Requirement</Typography>
              <Typography variant="body1" className={classes.description}>You must be 18 years or older to create an account.</Typography>

              {/* <Typography variant="h3" className={classes.rule}>Identification Verification</Typography>
              <Typography variant="body1" className={classes.description}>We require all users to verify their identity to prevent fraud and protect the integrity of our platform. You may be asked to provide a copy of your government-issued ID, a recent utility bill, and other information to confirm your identity.</Typography> */}

              <Typography variant="h3" className={classes.rule}>One Account per User</Typography>
              <Typography variant="body1" className={classes.description}>Each user is only allowed to create one account. Creating multiple accounts is strictly prohibited and may result in account suspension or termination.</Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography variant="h2" className={classes.subtitle}>Subscriptions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.rule}>Accepted Payment Methods</Typography>
              <Typography variant="body1" className={classes.description}>We accept credit cards. Please refer to our payment page for more information.</Typography>
            </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography variant="h2" className={classes.subtitle}>User Conduct</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Typography variant="h3" className={classes.rule}>Prohibited Activities</Typography>
          <Typography variant="body1" className={classes.description}>The following activities are strictly prohibited on our platform: 
          <ul className={classes.description}>
            <li>Posting false or misleading information</li>
            <li>Using our platform for any illegal activity</li>
            <li>Harassing or bullying other users</li>
            <li>Creating multiple accounts</li>
            <li>Engaging in any activity that violates our terms of service</li>
          </ul>
          </Typography>

          <Typography variant="h3" className={classes.rule}>Account Suspension or Termination</Typography>
          <Typography variant="body1" className={classes.description}>We reserve the right to suspend or terminate your account at any time if we believe you have violated our terms of service or engaged in any activity that may harm our platform or other users.</Typography>
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
</div>
);
}

export default Rules;
