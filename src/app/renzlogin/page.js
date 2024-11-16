'use client'

import { Container, Box, Typography, TextField, Button, Checkbox, FormControlLabel, Link, Paper } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",  // Full height
        width: "100vw",   // Full width
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: 'url("https://images.unsplash.com/photo-1535379453347-1fb383a34bb9")', // Clean and modern background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{ padding: 4, backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: 2 }}
        >
          {/* Logo Placeholder (optional) */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            {/* <Image src="/app/logo.png" alt="Logo" width={120} height={28} priority /> */}
          </Box>

          {/* Heading */}
          <Typography component="h2" variant="h4" align="center" gutterBottom>
            Login
          </Typography>

          {/* Form */}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {/* Email Input */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            {/* Password Input */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            {/* Remember Me & Forgot Password */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link href="#" variant="body2">
                Forgot your password?
              </Link>
            </Box>

            {/* Sign In Button */}
            <Button
              type="submit"
              href="dashboard"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
          </Box>

          {/* Sign Up Link */}
          <Typography variant="body2" align="center">
            Don’t have an account?{" "}
            <Link href="#" variant="body2">
              Sign up
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
