import React, { useContext, useEffect, useState } from "react";
import {
  CardContent,
  Card,
  Typography,
  TextField,
  Box,
  Button,
  Stack,
} from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AuthContext } from "../../contexts/authContext";


const SignUpCard = () => {
  const { signup } = useContext(AuthContext)

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (newValue) => {
    setBirthday(newValue);
  };

  const handleSubmit = async () => {

    const credentials = {
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      birthday: birthday,
      password: password
    };

    await signup(credentials);
  };


  return (
    <Card sx={{ maxWidth: 400, margin: "150px auto" }}>
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
              <Button 
                variant="contained"
                onClick={() => {handleSubmit()}}
                >
                Press to Register
              </Button>
            </Box>
          </Stack>
          </LocalizationProvider>
      </CardContent>
    </Card>
  );
};

export default SignUpCard;
