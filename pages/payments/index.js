import React from "react";
import { makeStyles } from "@mui/styles";
import styles from "../../styles/Home.module.css";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
import { useRouter } from "next/router";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
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
  const router = useRouter();
  const classes = useStyles();

  const content = subscriptionOptions.filter(
    (i) => i.title == router.query.planSelected
  )[0];

  return (
    <div className={styles.main}>
      <div>
        <Link href={"/payments/all"}>
          <Button variant="outlined" color="primary">
            See other plans
          </Button>
        </Link>
        <div style={{ display: "flex" }}>
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
            <CheckoutForm plandId={router.query.id} planName={router.query.planSelected} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payments;
