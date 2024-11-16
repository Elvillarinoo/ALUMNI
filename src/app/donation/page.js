"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

function DonationForm() {
  const [donationAmount, setDonationAmount] = useState("5.00");
  const [isMonthly, setIsMonthly] = useState(false);

  const handleAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleMonthlyChange = (event) => {
    setIsMonthly(event.target.checked);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#121212", // Dark background for the entire page
        p: 2,
      }}
    >
      <Box
        component="form"
        sx={{
          maxWidth: 400,
          width: "100%",
          p: 3,
          bgcolor: "#F3F3E0", // Light background for the form
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          helperText="(optional)"
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Graduation Year"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <FormControl component="fieldset" fullWidth margin="normal">
          <FormLabel component="legend" sx={{ color: "primary.main" }}>
            Donation Amount
          </FormLabel>
          <RadioGroup row value={donationAmount} onChange={handleAmountChange}>
            <FormControlLabel
              value="5.00"
              control={<Radio />}
              label="₱5.00"
              sx={{ color: "text.primary" }}
            />
            <FormControlLabel
              value="10.00"
              control={<Radio />}
              label="₱10.00"
              sx={{ color: "text.primary" }}
            />
            <FormControlLabel
              value="15.00"
              control={<Radio />}
              label="₱15.00"
              sx={{ color: "text.primary" }}
            />
            <FormControlLabel
              value="20.00"
              control={<Radio />}
              label="₱20.00"
              sx={{ color: "text.primary" }}
            />
            <FormControlLabel
              value="25.00"
              control={<Radio />}
              label="₱25.00"
              sx={{ color: "text.primary" }}
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
              sx={{ color: "text.primary" }}
            />
          </RadioGroup>
          {donationAmount === "other" && (
            <TextField
              label="Enter Amount"
              variant="outlined"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <InputAdornment position="start">₱</InputAdornment>,
              }}
            />
          )}
        </FormControl>

        <FormControlLabel
          control={<Checkbox checked={isMonthly} onChange={handleMonthlyChange} />}
          label="Make this a monthly donation (optional)"
          sx={{ color: "text.primary" }}
        />

        <Typography variant="h6" sx={{ mt: 2, color: "primary.main" }}>
          Credit Card
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <TextField
            label="Card Number"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span role="img" aria-label="credit card">💳</span>
                </InputAdornment>
              ),
            }}
          />
          <TextField label="MM / YY" variant="outlined" sx={{ flexBasis: "100px" }} />
          <TextField label="CVC" variant="outlined" sx={{ flexBasis: "100px" }} />
        </Box>

        <Button
          variant="contained"
          color="success"
          fullWidth
          size="large"
          sx={{
            mt: 2,
            bgcolor: "success.main",
            color: "#fff",
            ":hover": {
              bgcolor: "success.dark",
            },
          }}
        >
          Donate ₱{donationAmount === "other" ? "Custom" : donationAmount}
        </Button>
      </Box>
    </Box>
  );
}

export default DonationForm;
