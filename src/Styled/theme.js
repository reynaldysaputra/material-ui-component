import {
   createMuiTheme
} from "@material-ui/core";

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