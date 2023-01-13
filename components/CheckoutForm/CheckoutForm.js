import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

function CheckoutForm({ plandId, planName }) {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "20px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const createSubscription = async () => {
    try {
      const paymentMethod = await stripe?.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement),
        billing_details: {
          name,
          email,
        },
      });

      const response = await fetch(
        "https://omnes-api.herokuapp.com/v1/create-subscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMethod: paymentMethod?.paymentMethod?.id,
            name,
            email,
            priceId: plandId,
            userId: user?.id,
            planName
          }),
        }
      ).then((res) => res.json());

      const confirmPayment = await stripe?.confirmCardPayment(
        response.clientSecret
      );

      if (confirmPayment?.error) {
        alert(confirmPayment.error.message);
      } else {
        alert("Success! Check your email for the invoice.");
        window.location.href = "https://omnesbet.com";

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ width: "300px" }}>
      <TextField 
        fullWidth
        required 
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <TextField 
        sx={{ marginBottom: "15px" }}
        fullWidth
        required 
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CardElement options={cardStyle} />
      <Button sx={{ marginTop: "15px" }} variant="contained" color="success" onClick={createSubscription} disabled={!stripe}>
        Subscribe
      </Button>
      </Box>
  );
}

export default CheckoutForm;
