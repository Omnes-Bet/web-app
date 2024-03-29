import React, { useState, useEffect } from "react";
import PageSeo from "../../components/PageSeo";
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
import { CheckCircleOutline } from "@mui/icons-material";
import Router from "next/router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ChildModal({ handleCloseParent, handleOpen }) {
  const [open, setOpen] = React.useState(false);

  const handleOpenModal = () => {
    setOpen(handleOpen);
  };

  useEffect(() => {
    handleOpenModal();
  }, [handleOpen]);

  return (
    <React.Fragment>
      <Modal
        hideBackdrop
        open={open}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 250,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CheckCircleOutline color="success" />
          <Typography color="green">Success!</Typography>
          <Typography>Email Enviado</Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#1c50abcc" }}
            onClick={() => {
              handleCloseParent();
              Router.push("/");
            }}
          >
            Fechar
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

const Contact = () => {
  const [pageUrl, setPageUrl] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openChild, setOpenChild] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenChildModal = () => setOpenChild(true);

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Entre em Contato",
    description:
      "Entre em contato com nossa equipe com suas necessidades. Estamos ansiosos por isso.",
    pageUrl: pageUrl,
  };

  const handleSubmit = async () => {
    const emailData = {
      name: name,
      email: email,
      message: message,
    };

    setIsLoading(true);

    await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(emailData),
    });

    setName("");
    setEmail("");
    setMessage("");
    setIsLoading(false);
    handleOpenChildModal();
  };

  useEffect(() => {
    isLoading ? handleOpen() : handleClose();
  }, [isLoading]);

  return (
    <div
      style={{
        paddingTop: "150px",
        height: "600px",
        backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
        borderRadius: "20px",
      }}
    >
      <PageSeo seoProps={pageSeoProps} />
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
      <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="h2">
            Entre em Contato
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
              label="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              fullWidth
              label="Mensagem"
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
              Enviar Email
            </Button>
          </Box>
          <ChildModal handleCloseParent={handleClose} handleOpen={openChild} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
