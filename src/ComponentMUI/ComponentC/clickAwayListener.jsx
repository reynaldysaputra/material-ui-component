import { Grid, Typography, ClickAwayListener, Paper } from '@material-ui/core';
import React, { Fragment } from 'react';
import { UseStyleC } from './style';

function ClickAwayListenerComponent() {
   const styleC = UseStyleC();
   const [open, setOpen]  = React.useState(false);

   const handleClickAway = () => {
      setOpen(false);
   }

   const handleOpen = () => {
      setOpen(!open);
   }

   return(
      <Fragment>
         <Grid container justify='center' className={styleC.rootA} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>ClickEventListener</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid item>
                  <ClickAwayListener onClickAway={handleClickAway}>
                     <div>
                        <button onClick={handleOpen}>Show Data</button>
                        {open && (
                           <Paper elevation={2} style={{padding : '10px'}}>  
                              <h3>Hello Reynaldy :)</h3>
                           </Paper>
                        )}
                     </div>
                  </ClickAwayListener>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default ClickAwayListenerComponent;