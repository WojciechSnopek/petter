import React from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { BASE_URL } from '../../config';
import { useNavigate } from 'react-router-dom';

//TODO: Add user context :-(
//TODO: How not to run docker run every single time when I restart the server?

const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const JWTToken = localStorage.getItem('token');

    const loginUser = async (userData: any) => {
        console.log({userData})
        try {
            const response = await fetch(`${BASE_URL}api/token/`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
              });

              if (response.ok) {
                const data = await response.json();
                // Assuming the token is under 'access' in the response
                localStorage.setItem('JWTToken', data.access);
                console.log('Token stored in localStorage:', data.access);
                alert('You have been logged in successfully!');
                navigate('/');
              } else {
                console.error('Failed to login:', response.status);
              }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const userData = { username, password };
        await loginUser(userData);
    }

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
        <Box component="form" display="flex" flexDirection="column" gap={2} onSubmit={handleLogin}>
          <TextField label="Username" variant="outlined" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
          <TextField label="Password" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" color="primary" fullWidth type='submit'>
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;