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

function WhoWeAre() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Typography variant="h1" className={classes.title}>
          Who We Are
        </Typography>
        <Typography variant="body1" className={classes.answer} sx={{ color: "white !important" }}>
          We are a team of sports betting experts with a passion for developing
          innovative and user-friendly software solutions to help sports bettors
          around the world to maximize their profits and minimize their risks.
          Our surebet software is the result of years of experience in the
          sports betting industry, combined with advanced algorithms and
          cutting-edge technology.
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2" className={classes.subtitle}>
              Our Mission
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="body1" className={classes.answer}>
                Our mission is to provide sports bettors with a reliable and
                easy-to-use platform to identify and take advantage of surebet
                opportunities in the sports betting market. We aim to help our
                users to make consistent and risk-free profits from sports
                betting, without the need for extensive knowledge or experience
                in the betting industry. We believe that our surebet software
                can revolutionize the way people approach sports betting and can
                become an essential tool for anyone who wants to increase their
                winnings and build a profitable betting strategy.
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h2" className={classes.subtitle}>
              Our Values
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="body1" className={classes.answer}>
                At our surebet software, we value integrity, transparency, and
                customer satisfaction above all. We believe that honesty and
                openness are essential to building trust with our users, and we
                are committed to providing accurate and reliable information and
                support at all times. We also prioritize the needs and interests
                of our users, and we are constantly working to improve our
                software and services to meet their evolving needs and
                expectations. We strive to create a user-friendly and intuitive
                platform that can be easily used by anyone, regardless of their
                level of experience in sports betting. Our team is dedicated to
                providing exceptional customer service and support, and we are
                always available to answer any questions or concerns that our
                users may have. Overall, our values reflect our commitment to
                excellence, innovation, and customer satisfaction, and we are
                proud to uphold these values in everything we do.{" "}
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
export default WhoWeAre;
