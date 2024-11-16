'use client'

import Image from "next/image";
import { Container, Box, Typography, TextField, Button, Checkbox, FormControlLabel, Link, Paper } from "@mui/material";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",  // Ensure the container takes full height
        width: "100vw",   // Ensure full width
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: 'url("/images/nitro.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat", // Ensure the image doesn't repeat

      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={3}
          sx={{ padding: 4, backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: 2 }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            {/* <Image src="/app/vpgame.jpg" alt="Vpgame logo" width={120} height={28} priority /> */}
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
    </div>
  );
}
