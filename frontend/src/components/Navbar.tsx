import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import FlagIcon from '@mui/icons-material/Flag';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#5ec5c2', padding: '0.3rem' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'sans-serif' }}>
          O Melhor <span style={{ fontWeight: 'normal' }}>Combustível</span>
        </Typography>

        {/* Links */}
        <Box sx={{ display: 'flex', gap: '1.5rem' }}>
          <IconButton sx={{ color: '#f1f6f6' }}>
            <SchoolIcon sx={{ marginRight: '0.5rem' }} />
            <Typography variant="body1">Como funciona</Typography>
          </IconButton>

          <IconButton sx={{ color: '#f1f6f6' }}>
            <FlagIcon sx={{ marginRight: '0.5rem' }} />
            <Typography variant="body1">Nossa Missão</Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
