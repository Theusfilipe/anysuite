"use client";

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#44b53f',
          contrastText: 'rgba(255,255,255,0.87)',
        },
        secondary: {
          main: '#0b00f5',
        },
      }
});

export default theme;