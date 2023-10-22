import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function CustomNavbar() {

    const navigator = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="blue"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit" onClick={()=>{navigator('/')}}>Home</Button>
          <Button color="inherit" onClick={()=>{navigator('/login')}}>Login</Button>
          {/* <Button color="inherit" onClick={()=>{navigator('/doctor')}}>Dashboard</Button> */}
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
