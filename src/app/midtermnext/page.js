'use client'
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Paper, Select, MenuItem, FormControl, InputLabel, Checkbox, FormControlLabel, Link, Grid } from '@mui/material';

const RegistrationStepTwo = () => {
  const [formData, setFormData] = useState({
    foreignAddress: '',
    foreignCity: '',
    foreignZip: '',
    foreignCountry: '',
    registrationPreference: '',
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      alert("You must accept the Terms of Service to continue.");
      return;
    }
    console.log('Form Data:', formData);
  };

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh', padding: 4 }}>
      <Container maxWidth="sm" sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2, boxShadow: '0 3px 10px rgba(0,0,0,0.1)' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1E3A8A' }}>Additional Registration Information</Typography>
        </Box>

        <form onSubmit={handleSubmit}>
        <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ 
            mb: 2, 
            color: 'black', 
            fontWeight: 'bold', 
            fontSize: '18px', 
            letterSpacing: '0.5px' 
            }}
        >
          Postal Code
        </Typography>

        <Typography 
    variant="h6" 
    gutterBottom 
        sx={{ 
        mb: 2, 
        color: 'black', 
        fontWeight: 'bold', 
        fontSize: '18px', 
        letterSpacing: '0.5px' 
        }}
        >
            Foreign Mailing Address
        </Typography>

          <TextField
            fullWidth
            label="Address"
            name="foreignAddress"
            variant="outlined"
            value={formData.foreignAddress}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="City"
            name="foreignCity"
            variant="outlined"
            value={formData.foreignCity}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Zip Code"
            name="foreignZip"
            variant="outlined"
            value={formData.foreignZip}
            onChange={handleChange}
            margin="normal"
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Country</InputLabel>
            <Select
              name="foreignCountry"
              value={formData.foreignCountry}
              onChange={handleChange}
            >
              <MenuItem value="United States">United States</MenuItem>
              <MenuItem value="Philippines">Philippines</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              {/* Add more country options as needed */}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Registration Preference</InputLabel>
            <Select
              name="registrationPreference"
              value={formData.registrationPreference}
              onChange={handleChange}
              required
            >
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={formData.acceptTerms}
                onChange={handleChange}
                name="acceptTerms"
                color="primary"
              />
            }
            label={<span>I accept the <Link href="#">Terms of Service</Link></span>}
          />

       

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                sx={{
                  backgroundColor: '#1E3A8A',
                  '&:hover': { backgroundColor: '#6A1B9A' }
                }}
              >
                Submit
              </Button>
            </Grid>

            <Grid item xs={6}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderColor: '#1E3A8A',
                  color: '#1E3A8A',
                  '&:hover': { backgroundColor: '#f0f0f0' }
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default RegistrationStepTwo;
