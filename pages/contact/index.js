import React, { useContext, useState, useEffect } from "react";
import PageSeo from "../../components/PageSeo";
import ContactForm from "../../components/ContactForm/Contactform";


import {
  CardContent,
  Card,
  Typography,
  TextField,
  Box,
  Button,
  CircularProgress,
  Modal,
} from "@mui/material";

const Contact = () => {
  const [pageUrl, setPageUrl] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Contact Us",
    description:
      "Reach out to our team with your needs. We are looking forward to it.",
    pageUrl: pageUrl,
  };

  const handleSubmit = async () => {
    const emailData = {
      name: name,
      email: email,
      message: message,
    };

    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(emailData)
    })
  };

  return (
    <>
      <PageSeo seoProps={pageSeoProps} />
      <Card sx={{ maxWidth: 345, margin: "150px auto" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="h2">
          Enter your credentials
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField 
            required
            fullWidth 
            label="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="fullWidth" 
          />
          <Button
            variant="contained"
            onClick={() => {
              handleSubmit();
            }}
          >
            Send Email
          </Button>
        </Box>
      </CardContent>
    </Card>
    </>
  );
};

export default Contact;
