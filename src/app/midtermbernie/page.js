'use client';

import React, { useState } from 'react';
import { Box, Button, Container, Typography, TextField, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

const Header = styled('div')(({ theme }) => ({
  backgroundColor: '#1E3A8A',
  color: 'white',
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
}));

const LogoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
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
    <Box sx={{ backgroundColor: '#F4F6F8', minHeight: '100vh', padding: 4 }}>
    
      <Header>
        <LogoContainer>
        
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Social_Security_System_%28SSS%29.svg/1200px-Social_Security_System_%28SSS%29.svg.png" alt="SSS Logo" width="100" />
          <Typography variant="h5" sx={{ color: 'inherit', fontWeight: 'bold', marginLeft: 1 }}>
            Social Security System
          </Typography>
        </LogoContainer>
      </Header>

      <Container maxWidth="md" sx={{ backgroundColor: 'white', padding: 3, borderRadius: 10, boxShadow: '0 3px 10px rgba(0,0,0,0.1)', marginTop: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#1E3A8A', mb: 2 }}>
            Online Member User ID Registration
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="CRN / SS Number"
            name="ssNumber"
            variant="outlined"
            value={formData.ssNumber}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            type="email"
            required
          />

          <TextField
            fullWidth
            label="Confirm Email Address"
            name="confirmEmail"
            variant="outlined"
            value={formData.confirmEmail}
            onChange={handleChange}
            margin="normal"
            type="email"
            required
          />

          <TextField
            fullWidth
            label="Preferred User ID"
            name="preferredUserId"
            variant="outlined"
            value={formData.preferredUserId}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Confirm Preferred User ID"
            name="confirmUserId"
            variant="outlined"
            value={formData.confirmUserId}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Middle Name"
            name="middleName"
            variant="outlined"
            value={formData.middleName}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Suffix (optional)"
            name="suffix"
            variant="outlined"
            value={formData.suffix}
            onChange={handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Date of Birth"
            name="dob"
            variant="outlined"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.dob}
            onChange={handleChange}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Mailing Address (Philippine Address)"
            name="address"
            variant="outlined"
            value={formData.address}
            onChange={handleChange}
            margin="normal"
            required
          />

          {/* City and Barangay Select */}
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

          {/* Submit Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              href="/midtermnext"
              sx={{
                background: 'linear-gradient(45deg, #1E3A8A 30%, #6A1B9A 90%)',
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
      </Container>
    </Box>
  );
};

export default MemberRegistration;