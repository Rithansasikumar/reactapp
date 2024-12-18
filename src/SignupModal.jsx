// SignupModal.js
import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const SignupModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Form Submitted:', formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="signup-modal-title">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="signup-modal-title" variant="h6" component="h2" mb={2}>
          Signup
        </Typography>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Box>
    </Modal>
  );
};

export default SignupModal;
