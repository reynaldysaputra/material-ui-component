import React, { Fragment, useState } from 'react';
import {Button, Grid, Typography, Popover} from '@material-ui/core';
import {UseStyleFinal} from './style';

function PopOverComponent(){
   const styleFinal = UseStyleFinal();
   const [anchor, setAnchor] = useState(null);

   const handleOpen = (e) => {
      setAnchor(e.currentTarget);
   }

   const handleClose = (e) => {
      setAnchor(null);
   }

   return(
      <Fragment>
         <Grid container justify='center' className={styleFinal.rootFinal} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>PopOver</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1 Basic</Typography>
               </Grid>
               <Grid item xs={0} justify='center'>
                  <Button variant='contained' color='secondary' onClick={handleOpen}>OPEN POPOVER</Button>
                  <Popover
                     open={Boolean(anchor)}
                     anchorEl={anchor}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                     }}
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                     }}
                     onClose={handleClose}
                  >
                     <Typography>The content of the Popover.</Typography>
                  </Popover>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default PopOverComponent;