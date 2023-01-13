import React, { useContext, useEffect, useState } from "react";
import Router from "next/router";
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
import { AuthContext } from "../../contexts/authContext";

const SignInCard = () => {
  const { signin, isLoading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    const credentials = {
      email: email,
      password: password,
    };

    await signin(credentials);
  };

  useEffect(() => {
    isLoading ? handleOpen() : handleClose();
  }, [isLoading]);

  return (
    <Card sx={{ maxWidth: 345, margin: "150px auto" }}>
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
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            width={70}
            m="auto"
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => {
              handleSubmit();
            }}
          >
            Press to Log In
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SignInCard;
