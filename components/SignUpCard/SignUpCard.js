import React, { useContext, useEffect, useState } from "react";
import {
  CardContent,
  Card,
  Typography,
  TextField,
  Box,
  Button,
  Stack,
  CircularProgress,
  Modal,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AuthContext } from "../../contexts/authContext";

const SignUpCard = () => {
  const { signup, isLoading } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [birthdayError, setBirthdayError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setEmailError(!validateEmail(newEmail));
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setPasswordError(!validatePassword(newPassword));
  };

  const validateBirthday = (birthday) => {
    const userBday = birthday?.getFullYear();
    const today = new Date().getFullYear();
    const age = today - userBday;
    return age >= 18;
  };

  const handleChange = async (newValue) => {
    setBirthday(newValue);
    const isValidBirthday = validateBirthday(newValue);
    if (!isValidBirthday) {
      setBirthdayError(true);
      return;
    } else {
      setBirthdayError(false);
    }
  };

  const handleSubmit = async () => {
    const credentials = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      birthday: birthday,
      password: password,
      promoCode: promoCode,
    };

    await signup(credentials);
  };

  useEffect(() => {
    isLoading ? handleOpen() : handleClose();
  }, [isLoading]);

  return (
    <Card sx={{ maxWidth: 400, margin: "0 auto" }}>
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
          Preencha por favor esses campos
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={6}>
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
                label="Telefone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="number"
              />
              <TextField
                required
                label="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={
                  emailError ? "Por favor, insira um e-mail válido" : ""
                }
              />
              <MobileDatePicker
                required
                label="Data de Nascimento"
                inputFormat="MM/dd/yyyy"
                value={birthday}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={birthdayError}
                    helperText={
                      birthdayError
                        ? "É preciso ter 18 anos ou mais para se cadastrar"
                        : ""
                    }
                  />
                )}
              />
              <TextField
                required
                width={70}
                m="auto"
                id="outlined-password-input"
                label="Senha"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
                helperText={
                  passwordError
                    ? "A senha deve ter pelo menos 8 caracteres de comprimento"
                    : ""
                }
              />
              <TextField
                id="outlined-required"
                label="Código Promocional"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Pressione para Registrar
              </Button>
            </Box>
          </Stack>
        </LocalizationProvider>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
