import {useState} from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../config';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const registerUser = async (userData: any) => {
    try {
      const response = await fetch(`${BASE_URL}register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error(`Registration failed: ${response.statusText}`);
      }
  
    //   const data = await response.json();
    //   console.log('Registration successful:', data);
    alert('You have been registered successfully, now please login!');
      navigate('/login');
    //   return data;
    } catch (error) {
        alert("There was an error registering the user. Please try again.");
      console.error('Error:', error);
    }
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const userData = { username, email, password };
    await registerUser(userData);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, width: '100%' }}>
        {/* <form onSubmit={handleRegister}> */}
          <Typography variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <Box display="flex" flexDirection="column" gap={2} component="form" onSubmit={handleRegister}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="secondary" fullWidth type="submit">
              Register
            </Button>
                <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => navigate('/login')}
              type='button'
            >
              Already registered? Login
            </Button>
          </Box>
        {/* </form> */}
      </Paper>
    </Box>
  );
};

export default Register;