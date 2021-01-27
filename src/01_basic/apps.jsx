import React, {Fragment, useState} from 'react';
import { makeStyles, Typography, useTheme } from '@material-ui/core';

const StylesOffice = makeStyles(theme => ({
   oneStyle : {
      width:'100px',
      height:'100px',
      background : (props) => theme.palette.primary.main
   },
   twoStyle : (props) => {
      return {
         color : props ? theme.palette.secondary.main : 'red',
         [theme.breakpoints.up('sm')] : {
            background : 'blue'
         }
      }
   }
}))

function Basic() {
   const [state, seState] = useState(false);
   const themes = useTheme();
   const myStyle = StylesOffice(state);

   return(
      <Fragment>
         <h1 className={myStyle.twoStyle}>hello</h1>
         <div className={myStyle.oneStyle} warnaku='primary'></div>
         <button onClick={() => seState(!state)}>click</button>
         <Typography variant='h3' color='secondary'>My typography</Typography>
      </Fragment>
   )
}

export default Basic;