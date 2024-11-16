'use client';

import React, { useState } from 'react';
import { Box, Button, Container, Typography, TextField, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const Header = styled('div')(({ theme }) => ({
  backgroundColor: '#4CC9FE',
  color: 'white',
  padding: theme.spacing(3), // Increased padding
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added subtle shadow
  width: '100%',
}));

const LogoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(4),
  borderRadius: '15px', // More rounded corners
  boxShadow: '0 5px 15px rgba(0,0,0,0.15)', // Enhanced shadow
  marginTop: theme.spacing(4),
  background: 'linear-gradient(135deg, #ffffff 30%, #f0f4ff 100%)', // Gradient background
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: '8px', // Rounded inputs
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px', // Ensures border-radius for the input
  },
}));

const MemberRegistration = () => {
  const [formData, setFormData] = useState({
    ssNumber: '',
    email: '',
    confirmEmail: '',
    preferredUserId: '',
    confirmUserId: '',
    lastName: '',
    firstName: '',
    middleName: '',
    suffix: '',
    dob: '',
    address: '',
    city: '',
    barangay: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert('Emails do not match!');
      return;
    }
    if (formData.preferredUserId !== formData.confirmUserId) {
      alert('User IDs do not match!');
      return;
    }
    console.log('Form Data:', formData);
  };

  return (
    <Box sx={{ backgroundColor: '#536493', minHeight: '100vh', padding: 4 }}>
      <Header>
        <LogoContainer>
          <img src="https://www.pagibigfundservices.com/virtualpagibig/images/vpblogo.png" alt="pag-ibig Logo" width="400" />
          <Typography variant="h5" sx={{ color: 'inherit', fontWeight: 'bold', marginLeft: 1 }}>
            
          </Typography>
        </LogoContainer>
      </Header>

      <StyledContainer maxWidth="md">
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#605678', mb: 2 }}>
            Virtual Pag-IBIG Account Creation
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="PAG-IBIG MID NO."
            name="PAG-IBIG MID NO."
            variant="outlined"
            value={formData.ssNumber}
            onChange={handleChange}
            required
          />

          <StyledTextField
            fullWidth
            label="Email Address"
            name="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required
          />

          <StyledTextField
            fullWidth
            label="Confirm Email Address"
            name="confirmEmail"
            variant="outlined"
            value={formData.confirmEmail}
            onChange={handleChange}
            type="email"
            required
          />

          <StyledTextField
            fullWidth
            label="UserID"
            name="UserID"
            variant="outlined"
            value={formData.preferredUserId}
            onChange={handleChange}
            required
          />

          <StyledTextField
            fullWidth
            label="Confirm User ID"
            name="confirmUserId"
            variant="outlined"
            value={formData.confirmUserId}
            onChange={handleChange}
            required
          />

          <StyledTextField
            fullWidth
            label="Last Name"
            name="lastName"
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <StyledTextField
            fullWidth
            label="First Name"
            name="firstName"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <StyledTextField
            fullWidth
            label="Middle Name"
            name="middleName"
            variant="outlined"
            value={formData.middleName}
            onChange={handleChange}
          />

          <StyledTextField
            fullWidth
            label="Suffix (optional)"
            name="suffix"
            variant="outlined"
            value={formData.suffix}
            onChange={handleChange}
          />

          <StyledTextField
            fullWidth
            label="Date of Birth"
            name="dob"
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.dob}
            onChange={handleChange}
            required
          />

          <StyledTextField
            fullWidth
            label="Mailing Address (Philippine Address)"
            name="address"
            variant="outlined"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>City / Municipality</InputLabel>
            <Select
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            >
              <MenuItem value="Metro Manila">Metro Manila</MenuItem>
              <MenuItem value="Province">Province</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Barangay</InputLabel>
            <Select
              name="barangay"
              value={formData.barangay}
              onChange={handleChange}
              required
            >
              <MenuItem value="Barangay 1">Barangay 1</MenuItem>
              <MenuItem value="Barangay 2">Barangay 2</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              href="/midtermnext"
              sx={{
                background: 'linear-gradient(45deg, #1E3A8A 30%, #6A1B9A 90%)',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Added shadow for button
                '&:hover': {
                  background: 'linear-gradient(45deg, #6A1B9A 30%, #1E3A8A 90%)',
                },
                width: '100%',
              }}
            >
              Next
            </Button>
          </Box>
        </form>
      </StyledContainer>
    </Box>
  );
};

export default MemberRegistration;
