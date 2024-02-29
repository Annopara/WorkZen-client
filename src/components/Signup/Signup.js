import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom"; // Import NavLink for redirection
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const { REACT_APP_API_URL } = process.env;

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSignUpFormChange = (e, property) => {
    setSignUpData((prevState) => ({
      ...prevState,
      [property]: e.target.value,
    }));
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to signup endpoint
      const signUpRes = await axios.post(
        REACT_APP_API_URL + "/events/users/register",
        signUpData
      );
      console.log(signUpRes.data); // Response from server
      // Redirect to login page after successful registration
      // Replace this with NavLink to redirect
      window.location.href = "/login";
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle failure, e.g., show an error message
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component='main' maxWidth='xs'>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box
            component='form'
            onSubmit={handleSignUpSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              id='username'
              label='Name'
              variant='outlined'
              value={signUpData.username}
              onChange={(e) => handleSignUpFormChange(e, "username")}
              fullWidth
              required
            />
            <TextField
              id='email'
              label='Email Address'
              variant='outlined'
              value={signUpData.email}
              onChange={(e) => handleSignUpFormChange(e, "email")}
              fullWidth
              required
            />
            <TextField
              id='password'
              label='Password'
              type='password'
              variant='outlined'
              value={signUpData.password}
              onChange={(e) => handleSignUpFormChange(e, "password")}
              fullWidth
              required
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUpForm;
