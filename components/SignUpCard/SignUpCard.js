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
  Modal
} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AuthContext } from "../../contexts/authContext";


const SignUpCard = () => {
  const { signup, isLoading } = useContext(AuthContext)

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (newValue) => {
    setBirthday(newValue);
  };

  const handleSubmit = async () => {

    const credentials = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      birthday: birthday,
      password: password,
      promoCode: promoCode
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
          Please fill out these fields
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
                required id="outlined-required" 
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <TextField 
                required id="outlined-required" 
                label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MobileDatePicker
                label="Date of Birth"
                inputFormat="MM/dd/yyyy"
                value={birthday}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
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
              <TextField 
                id="outlined-required" 
                label="Bonus Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <Button 
                variant="contained"
                onClick={() => {handleSubmit()}}
                >
                Press to Sign Up
              </Button>
            </Box>
          </Stack>
          </LocalizationProvider>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
