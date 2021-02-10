import {createMuiTheme} from '@material-ui/core';

export const themeLanding = createMuiTheme({
   palette : {
      primary : {
         main : '#93FA68'
      }
   },
   props : {
      MuiAppBar : {
         color : 'transparent',
         elevation : 0
      }
   },
   typography : {
      fontFamily: [
         'Nunito',
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif'
      ].join(',')
   }
})