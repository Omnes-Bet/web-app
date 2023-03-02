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
// import Router from "next/router";
import Link from "next/link";
import { AuthContext } from "../../contexts/authContext";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "6rem",
    height: "500px",
    borderRadius: "15px",
    backgroundImage: 'linear-gradient(to right, #060C23 , black, #060C23)'
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
  "pk_test_51MKap3BNTabfN8IzF0rfqaA0XyRnjYndESH3tjQtjjhcoFNmO12WAnSKr730ZosVnsP4imvqKkw4Y6fiqWTyeyai00gPyFHQ5Z"
);

const subscriptionOptions = [
  {
    title: "Silver",
    price: "$99",
    suffix: " / mo",
    benefit1: "Surebets",
    benefit2: "Prematch comparison service",
    benefit3: "Middles",
    benefit4: "Sorting by ROI",
  },
  {
    title: "Gold",
    price: "$149",
    suffix: " / mo",
    benefit1: "Surebets",
    benefit2: "Prematch comparison service",
    benefit3: "Middles",
    benefit4: "Sorting by ROI",
  },
  {
    title: "Pro",
    price: "$199",
    suffix: " / mo",
    benefit1: "Surebets",
    benefit2: "Prematch comparison service",
    benefit3: "Middles",
    benefit4: "Sorting by ROI",
  },
];

const Payments = () => {
  const [pageUrl, setPageUrl] = useState();
  const router = useRouter();
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const { user } = useContext(AuthContext);

  if(!user){
    Router.push("/");
  }

  useEffect(() => {
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
      <div>
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
                  >
                    {content?.benefit3}
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
    </div>
  );
};

export default Payments;
