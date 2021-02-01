import { ThemeProvider, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import CardComponent from './card';
import ChipComponent from './chip';
import ClickAwayListenerComponent from './clickAwayListener';
import ContainerComponent from './container';
import themeC from './themeC';

function ComponentC() {

   return(
      <ThemeProvider theme={themeC}>
         {console.log(themeC)}
         <CardComponent/>
         <ChipComponent/>
         <ClickAwayListenerComponent/>
         <ContainerComponent/>
      </ThemeProvider>
   )
}

export default ComponentC;