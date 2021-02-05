import { ThemeProvider } from '@material-ui/core';
import React, {Fragment} from 'react';
import themeFinal from './themeFinal';
import GridComponent from './grid';
import HiddenComponent from './hidden';
import ListComponent from './list';
import MenuComponent from './menu';
import PopOverComponent from './popOver';
import RatingComponent from './rating';
import SpeedDealComponent from './speedDeal';
import TimeLineComponent from './timeline';

function FinalComponent(){
   return(
      <ThemeProvider theme={themeFinal}>
         <GridComponent/>
         <HiddenComponent/>
         <ListComponent/>
         <MenuComponent/>
         <PopOverComponent/>
         <RatingComponent/>
         <SpeedDealComponent/>
         <TimeLineComponent/>
      </ThemeProvider>
   )
}

export default FinalComponent;