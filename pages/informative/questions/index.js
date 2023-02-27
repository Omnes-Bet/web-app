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
  question: {
    color: '#262626',
    fontSize: '1.5rem',
    marginBottom: '10px',
    textAlign: 'left',
  },
  answer: {
    color: '#5e5e5e',
    fontSize: '1rem',
    lineHeight: 2,
    textAlign: 'justify',
    marginBottom: '30px',
    marginLeft: "15px"
  },
});

function FAQ() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Typography variant="h1" className={classes.title}>Frequently Asked Questions</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="h2" className={classes.subtitle}>General</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>What is OmnesBet?</Typography>
              <Typography variant="body1" className={classes.answer}>OmnesBet is an innovative and easy-to-use platform for identifying and taking advantage of surebets in the sports betting market.</Typography>

              <Typography variant="h3" className={classes.question}>How does OmnesBet work?</Typography>
              <Typography variant="body1" className={classes.answer}>Our software scans the odds offered by different bookmakers on a large number of sports events and identifies surebet opportunities in real-time. You can use our platform to search for surebets on specific sports, leagues or events, and to filter the results based on different criteria, such as profit margin, minimum and maximum odds, and bookmaker preferences. Once you have identified a surebet, our software calculates the optimal bet amounts to place on each outcome, taking into account the odds and the commission charged by the bookmakers.</Typography>

              <Typography variant="h3" className={classes.question}>Is OmnesBet software easy to use?</Typography>
              <Typography variant="body1" className={classes.answer}>Yes, our software is designed to be user-friendly and easy to navigate, with clear instructions and helpful guides to ensure that you can make the most of our platform.</Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography variant="h2" className={classes.subtitle}>Payments</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>Is there a subscription fee to use OmnesBet software?</Typography>
              <Typography variant="body1" className={classes.answer}>Yes, there is a monthly subscription fee to use our platform, which gives you full access to all our features and tools.</Typography>
              <Typography variant="h3" className={classes.question}>What payment methods is accepted?</Typography>
          <Typography variant="body1" className={classes.answer}>We accept credit cards. You can find more information about payment options and pricing plans on our payment page.</Typography>
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
        <Typography variant="h2" className={classes.subtitle}>Security</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Typography variant="h3" className={classes.question}>Is my personal information secure with OmnesBet?</Typography>
          <Typography variant="body1" className={classes.answer}>Yes, we take the security of your personal information very seriously. Our platform uses the latest encryption technologies and firewalls to protect your data, and we never share your information with third parties without your consent. We also comply with all applicable data protection laws and regulations to ensure that your privacy rights are fully respected.</Typography>

          <Typography variant="h3" className={classes.question}>What measures is used to prevent fraud?</Typography>
          <Typography variant="body1" className={classes.answer}>We have a range of measures in place to prevent fraud, including credentials verification checks, IP tracking, and transaction monitoring. We also work closely with our payment partners and bookmakers to ensure that all transactions are legitimate and transparent.</Typography>
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header">
        <Typography variant="h2" className={classes.subtitle}>Support</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Typography variant="h3" className={classes.question}>What support is available if I have questions or issues?</Typography>
          <Typography variant="body1" className={classes.answer}>Our dedicated support team is available 24/7 to assist you with any questions or issues you may have. You can contact us by email, and we will do our best to respond as quickly as possible.</Typography>

         </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
</div>

);
}

export default FAQ;