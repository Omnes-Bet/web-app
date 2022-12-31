import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

function CheckoutForm({ plandId, planName }) {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();

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
        "http://localhost:3002/v1/create-subscription",
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid gap-4 m-auto">
      <input placeholder="Name" type="text" value={name} />
      <input
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        placeholder="Email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <CardElement />
      <button onClick={createSubscription} disabled={!stripe}>
        Subscribe
      </button>
    </div>
  );
}

export default CheckoutForm;
