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
import { MobileDatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import AdapterJalaali from '@date-io/jalaali';
import useAuth from "../../hooks/useAuth";
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

  // useEffect(() => {
  //   const payload = handleSubmit();

  //   if (payload?.email.length > 0) {
  //     registerUser(payload)
  //     .then(() => {
  //       Router.push("/");
  //     })
  //     .catch(() => { 
  //       setName('');
  //       setPhoneNumber('');
  //       setEmail('');
  //       setBirthday('');
  //       setPassword('');
  //       setChange(false);
  //      });
  //   }
  // }, [change]);


  return (
    <Card sx={{ maxWidth: 400, margin: "150px auto" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="h2">
          Please fill out these fields
        </Typography>

        <LocalizationProvider dateAdapter={AdapterJalaali}>
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
                label="Date mobile"
                inputFormat="MM/DD/YYYY"
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
                width={70}
                m="auto"
                id="outlined-password-input"
                label="Confirm Password"
                type="password"
                autoComplete="current-password"
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
