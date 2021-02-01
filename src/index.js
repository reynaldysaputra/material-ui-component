import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Basic from './01_basic/apps';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Papers from './Youtube/01_Paper/apps';
import DarkModes from './Youtube/02_darkMode/apps';
import Grid01 from './Youtube/03_grid/01_basic';
import ComponentA from './ComponentMUI/ComponentA/componentA';
import ComponentC from './ComponentMUI/ComponentC/ComponentC';
import HookUseAutoComplete from './HookMUI/useAutoComplete/app';
import ComponentD from './ComponentMUI/ComponentD/ComponentD';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* {console.log(theme)} */}
    <ComponentD />
  </ThemeProvider>,
  document.getElementById('root')
);