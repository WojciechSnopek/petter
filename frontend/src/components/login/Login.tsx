import React from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const Login = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: '100%' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" display="flex" flexDirection="column" gap={2}>
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Password" type="password" variant="outlined" fullWidth />
          <Button variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;