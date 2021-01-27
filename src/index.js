import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Basic from './01_basic/apps';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {console.log(theme)}
    <Basic />
  </ThemeProvider>,
  document.getElementById('root')
);