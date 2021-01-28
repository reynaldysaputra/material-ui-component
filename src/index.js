import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Basic from './01_basic/apps';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Papers from './Youtube/01_Paper/apps';
import DarkModes from './Youtube/02_darkMode/apps';
import Grid01 from './Youtube/03_grid/01_basic';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {console.log(theme)}
    <Grid01 />
  </ThemeProvider>,
  document.getElementById('root')
);