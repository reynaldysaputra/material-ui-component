import {
   createMuiTheme
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import theme from "../theme";

export const themeStyled = createMuiTheme({
   typography: {
      myFont: {
         fontSize: '1.2rem'
      },
      fontFamily: [
         // 'introrustg-base2line', // pengaturan font family ini ada di index.css
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif'
      ].join(','),
   },
   overrides : { // Ini mengganti style dari component asli material-ui
      MuiButton : {
         root : {
            color : blue[800]
         },
         fullWidth : { // ini nama kelas di material-ui
            width : '90% !important'
         }
      }
   },
   props : {
      MuiButton : {
         variant : 'contained',
         color : 'primary',
         disableRipple : true
      }
   }
})

themeStyled.typography.h3 = {
   [themeStyled.breakpoints.up('xs')]: {
      fontSize: '1.2rem',
   },
   [themeStyled.breakpoints.up('md')]: {
      fontSize: '3rem',
      fontFamily : 'introrustg-base2line'
   },
};

themeStyled.typography.h2 = {
   [themeStyled.breakpoints.up('xs')]: {
      fontSize: '1.2rem',
      fontFamily : 'introrustg-base2line'
   },
   [themeStyled.breakpoints.up('md')]: {
      fontSize: '4rem',
      fontFamily : 'Nunito'
   },
};