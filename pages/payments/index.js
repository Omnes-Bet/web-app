import React, { useState, useEffect, useContext } from "react";
import PageSeo from "../../components/PageSeo";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { AuthContext } from "../../contexts/authContext";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "auto",
    borderRadius: "15px",
    backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
  },
  paymentSection: {
    display: "flex",
    gap: "15px",
  },
  paymentSectionMobile: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  cardHeader: {
    paddingTop: 3,
  },
}));

const stripePromise = loadStripe(
  "pk_live_51MKap3BNTabfN8IzVrtVYUCaUPmcjtkywMKBngay9fMq4Y4pynDeGzZbpT77wp8inUsR1sO5AhZX9xLhSufEbwaz00hWP8S8We"
);

const subscriptionOptions = [
  {
    title: "Silver",
    price: "$19",
    suffix: " / mo",
    benefit1: "Surebets & Arbs",
    benefit2: "Contact over email and about 3 day to be replied.",
    benefit4: "Sorting by ROI",
  },
  {
    title: "Gold",
    price: "$29",
    suffix: " / mo",
    benefit1: "Surebets & Arbs",
    benefit2: "Contact over email and be replied within 24hrs",
    benefit4: "Sorting by ROI",
  },
  {
    title: "Pro",
    price: "$39",
    suffix: " / mo",
    benefit1: "Surebets & Arbs",
    benefit2: "Contact over email, phone and video calls with our team",
    benefit4: "Sorting by ROI",
  },
];

const Payments = () => {
  const [pageUrl, setPageUrl] = useState();
  const router = useRouter();
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Plan Selected",
    description: "Subscribe and enjoy the data",
    pageUrl: pageUrl,
  };

  const content = subscriptionOptions.filter(
    (i) => i.title == router.query.planSelected
  )[0];

  return (
    <div className={classes.main}>
      <PageSeo seoProps={pageSeoProps} />
      <div style={{ margin: "0 auto", paddingTop: "8rem" }}>
        <Link href={"/payments/all"}>
          <Button variant="outlined" color="primary">
            See other plans
          </Button>
        </Link>
        <div
          className={
            matches ? classes.paymentSection : classes.paymentSectionMobile
          }
        >
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardHeader
                title={content?.title}
                className={classes.cardHeader}
              ></CardHeader>
              <CardContent>
                <Box px={1}>
                  <Typography variant="h3" component="h2" gutterBottom={true}>
                    {content?.price}
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="span"
                    >
                      {content?.suffix}
                    </Typography>
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    component="p"
                  >
                    {content?.benefit1}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    component="p"
                  >
                    {content?.benefit2}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    component="p"
                    paragraph={true}
                  >
                    {content?.benefit4}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Elements stripe={stripePromise}>
            <CheckoutForm
              plandId={router.query.id}
              planName={router.query.planSelected}
            />
          </Elements>
        </div>
      </div>
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          marginTop: "20px",
          fontFamily: "sans-serif",
          color: "white",
          padding: "20px"
        }}
      >
        <p>
          We would like to inform our users that the information we provide is
          for informational purposes only. We do not take responsibility for any
          losses incurred while using our service. Our service is designed to
          provide users with information about potential arbitrage opportunities
          in the sports betting market, but we do not guarantee the accuracy of
          the information provided.
        </p>
        <br />
        <p>
          It is important for users to understand that the information we
          provide may change at any time. Therefore, it is the user's
          responsibility to verify all information before placing any bets. We
          highly recommend that users conduct their own research before making
          any decisions and to consult with a professional if necessary.
        </p>
        <br />
        <p>
          While surebetting can be a profitable strategy, it also carries risks.
          Users must understand that there is always a chance of losing money
          when placing bets, even when using a surebetting strategy.
          Additionally, there are other risks to consider such as betting
          limits, account restrictions, and unforeseen events that may affect
          the outcome of a match.
        </p>
        <br />
        <p>
          It is crucial for users to approach surebetting with caution and to
          only bet within their means. Users should never place bets that they
          cannot afford to lose. Our goal is to provide users with information
          that can help them make informed decisions, but ultimately, it is the
          user's responsibility to manage their own risk and make their own
          decisions.
        </p>
        <br />
        <p>
          In summary, while we strive to provide accurate and up-to-date
          information, we do not take responsibility for any losses incurred
          while using our service. Users must verify all information before
          placing any bets and are responsible for managing their own risk. We
          encourage users to approach surebetting with caution and to only bet
          within their means.
        </p>
      </div>
    </div>
  );
};

export default Payments;
