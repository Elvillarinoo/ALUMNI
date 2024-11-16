import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField, Typography, Grid, Divider, Box, Container } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon, Apple as AppleIcon, Microsoft as MicrosoftIcon } from '@mui/icons-material'; // Use appropriate icons for other services

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Box display="flex" minHeight="100vh">
      {/* Left Side (Image) */}
      <Box
        flex={1}
        sx={{
          backgroundImage: 'url(/path/to/cactus-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box textAlign="center" color="white">
          <Typography variant="h3" fontWeight="bold">Adobe</Typography>
          <Typography>Sign in or create an account</Typography>
        </Box>
      </Box>

      {/* Right Side (Form) */}
      <Box flex={1} display="flex" alignItems="center" justifyContent="center" p={4} bgcolor="white">
        <Container maxWidth="xs">
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" fontWeight="bold">Create an account</Typography>
            <Typography color="textSecondary">Step 1 of 2</Typography>
          </Box>

          {/* Authentication Buttons */}
          <Grid container spacing={2} mb={4}>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}>
                Google
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth startIcon={<FacebookIcon />}>
                Facebook
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth startIcon={<AppleIcon />}>
                Apple
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth startIcon={<MicrosoftIcon />}>
                Microsoft
              </Button>
            </Grid>
          </Grid>

          <Box display="flex" alignItems="center" mb={4}>
            <Divider sx={{ flexGrow: 1 }} />
            <Typography color="textSecondary" mx={2}>Or</Typography>
            <Divider sx={{ flexGrow: 1 }} />
          </Box>

          {/* Email and Password Form */}
          <form noValidate>
            <TextField
              fullWidth
              label="Email address"
              type="email"
              variant="outlined"
              margin="normal"
              required
            />

            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText="Create a password that contains at least 8 characters, upper/lower case letters, and a number or symbol."
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Continue
            </Button>
          </form>
        </Container>
      </Box>
    </Box>
  );
}
