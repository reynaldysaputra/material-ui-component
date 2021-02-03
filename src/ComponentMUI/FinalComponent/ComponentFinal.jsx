import { ThemeProvider } from '@material-ui/core';
import React, {Fragment} from 'react';
import themeFinal from './themeFinal';
import GridComponent from './grid';
import HiddenComponent from './hidden';
import ListComponent from './list';
import MenuComponent from './menu';

function FinalComponent(){
   return(
      <ThemeProvider theme={themeFinal}>
         <GridComponent/>
         <HiddenComponent/>
         <ListComponent/>
         <MenuComponent/>
      </ThemeProvider>
   )
}

export default FinalComponent;