import { ThemeProvider } from '@material-ui/core';
import React, {Fragment} from 'react';
import themeFinal from './themeFinal';
import GridComponent from './grid';
import HiddenComponent from './hidden';

function FinalComponent(){
   return(
      <ThemeProvider theme={themeFinal}>
         <GridComponent/>
         <HiddenComponent/>
      </ThemeProvider>
   )
}

export default FinalComponent;