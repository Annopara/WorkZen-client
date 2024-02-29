import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const REACT_APP_API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3000";

const defaultTheme = createTheme();

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleLoginFormChange = (e, property) => {
    setLoginData((prevState) => ({ ...prevState, [property]: e.target.value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      setButtonClicked(true); // Set buttonClicked to true on form submission

      const loginRes = await axios.post(
        `${REACT_APP_API_URL}/events/login`,
        loginData
      );
      const authToken = loginRes.data.token;

      // Check if authToken is valid
      if (!authToken) {
        throw new Error("Authentication token not received");
      }

      localStorage.setItem("authToken", authToken);

      const getProfileRes = await axios.get(
        `${REACT_APP_API_URL}/events/current`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      console.log(getProfileRes.data);
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login failure, e.g., show an error message to the user
    }
  };

  const handleClick = () => {
    // Navigate to the "/dashboard" route
    navigate("/home");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={handleLoginSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
              value={loginData.email}
              onChange={(e) => handleLoginFormChange(e, "email")}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={loginData.password}
              onChange={(e) => handleLoginFormChange(e, "password")}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              onClick={handleClick}
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: buttonClicked ? "#d31ebe" : "#fff", // Change button color based on click state
                color: buttonClicked ? "#fff" : "#000", // Change text color based on click state
                "&:hover": {
                  backgroundColor: "#d31ebe", // Change background color on hover
                  color: "#fff", // Change text color on hover
                },
                "&:active": {
                  backgroundColor: "#b81cb4", // Change background color on click
                  color: "#fff", // Change text color on click
                },
              }}
            >
              Sign In
            </Button>
          </Box>
          {buttonClicked && (
            <Typography variant='body1'>
              User successfully signed in.
            </Typography>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginForm;
