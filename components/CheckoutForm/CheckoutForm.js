import { Box } from "@mui/system";
import { Button, TextField, Modal, CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import useSubscription from "../../hooks/useSubscription";

function CheckoutForm({ plandId, planName }) {
  const { user } = useContext(AuthContext);
  const { createSubscription, isLoading } = useSubscription();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    isLoading ? handleOpen() : handleClose();
  }, [isLoading]);

  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: "white",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "20px",
        "::placeholder": {
          color: "white",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleNewSubscription = async () => {
    try {
      const paymentMethod = await stripe?.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement),
        billing_details: {
          name,
          email,
        },
      });

      const result = await createSubscription({
        paymentMethod: paymentMethod?.paymentMethod?.id,
        name,
        email,
        priceId: plandId,
        userId: user?.id,
        planName,
      });

      const confirmPayment = await stripe?.confirmCardPayment(
        result.data.clientSecret
      );

      if (confirmPayment?.error) {
        alert(confirmPayment.error.message);
      } else {
        alert("Sucesso! Aproveite o melhor serviço de Surebet.");
        window.location.href = "https://omnesbet.com";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ width: "300px" }}>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          paddingTop: "6rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "300px",
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CircularProgress />
      </Modal>
      <TextField
        sx={{ marginBottom: "15px" }}
        color="primary"
        focused
        fullWidth
        required
        label="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        InputProps={{
          style: { color: "white" },
        }}
      />
      <br />
      <TextField
        sx={{ marginBottom: "15px" }}
        color="primary"
        focused
        fullWidth
        required
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          style: { color: "white" },
        }}
      />
      <CardElement options={cardStyle} />
      <Button
        sx={{ marginTop: "15px" }}
        variant="contained"
        color="primary"
        onClick={handleNewSubscription}
        disabled={!stripe}
      >
        Assinar
      </Button>
    </Box>
  );
}

export default CheckoutForm;
