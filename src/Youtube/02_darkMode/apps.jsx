import { makeStyles, Paper, Typography, DialogContentText, Switch, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { dark } from '@material-ui/core/styles/createPalette';
import React, { Fragment, useState } from 'react';
import theme from '../../theme';

const UseStyle = makeStyles((theme) => ({
   paperContainer : {
      width:'40%',
      padding : '30px',
      margin:'auto',
      marginTop : '30px'
   },
   typographyText : {
      fontSize : '3em',
   }
}))

const DarkMode = createMuiTheme({
   palette: {
     type: "dark",
     primary: {
      main: green[200],
    },
   }
});

function DarkModes() {
   const styles = UseStyle();
   const [darkMode, setDarkMode] = useState(false);

   console.log(DarkMode);

   return(
      <ThemeProvider theme={darkMode ? DarkMode : theme}>
         <Paper elevation={5} className={styles.paperContainer}>
            <Typography 
               variant='h1' 
               align='center' 
               className={styles.typographyText}
               color='primary'
            >Switch between themes
            </Typography>
            <DialogContentText align='center'>
               Tap on the switch to see some magic happen!
            </DialogContentText>
            <Switch color='primary' checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
         </Paper>
      </ThemeProvider>
   )
}

export default DarkModes;