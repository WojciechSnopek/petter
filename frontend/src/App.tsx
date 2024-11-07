import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, createTheme, Tabs, Tab, ThemeProvider, Box, Button } from '@mui/material';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';
import './App.css';

export const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#333',
      },
      text: {
        primary: '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div className="container">
          <AppBar position="static" color="primary">
            <Box display="flex" alignItems="center" width="100%">
              <Box display="flex" justifyContent="center" flexGrow={1}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="inherit"
                  indicatorColor="secondary"
                  sx={{ "& .MuiTabs-indicator": { height: "4px" } }}
                >
                  <Tab
                    label="Home"
                    component={Link}
                    to="/"
                    sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}
                  />
                  <Tab
                    label="About"
                    component={Link}
                    to="/about"
                    sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}
                  />
                  <Tab
                    label="Contact"
                    component={Link}
                    to="/contact"
                    sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}
                  />
                </Tabs>
              </Box>
              <Box display="flex" marginLeft="auto" marginRight="15px">
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  color="inherit"
                  sx={{ marginRight: 2 }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  color="secondary"
                >
                  Register
                </Button>
              </Box>
            </Box>
          </AppBar>
          <Box padding={3}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </div>
      </Router>
    </ThemeProvider>
  );
};