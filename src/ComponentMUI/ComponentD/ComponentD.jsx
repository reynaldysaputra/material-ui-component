import { ThemeProvider } from '@material-ui/core';
import React, { Fragment } from 'react';
import DataGridComponent from './dataGrid';
import themeD from './themeD';

function ComponentD() {
   return(
      <ThemeProvider theme={themeD}>
         <DataGridComponent/>
      </ThemeProvider>
   )
}

export default ComponentD;