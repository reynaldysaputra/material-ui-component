import React, { Fragment } from 'react';
import {Grid, Typography, Hidden, Paper} from '@material-ui/core';
import {UseStyleFinal} from './style';

function HiiddenComponent(){
   const styleFinal = UseStyleFinal();

   return(
      <Fragment>
         <Grid container justify='center' className={styleFinal.rootFinal} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>Hidden</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid item xs={12}>
                  <div className={styleFinal.containerHiddenStudy}>
                     <Hidden smUp>
                        <Paper className={styleFinal.boxPaperHidden} elevation={2}>SM UP</Paper>
                     </Hidden>
                     <Hidden mdUp>
                        <Paper className={styleFinal.boxPaperHidden} elevation={2}>MD UP</Paper>
                     </Hidden>
                     <Hidden lgUp>
                        <Paper className={styleFinal.boxPaperHidden} elevation={2}>LG UP</Paper>
                     </Hidden>
                     <Hidden xlUp>
                        <Paper className={styleFinal.boxPaperHidden} elevation={2}>XL UP</Paper>
                     </Hidden>
                  </div>
               </Grid>
               {/*  ----- Type 2 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 2 with only</Typography>
               </Grid>
               <Grid item xs={12}>
                  <div className={styleFinal.containerHiddenStudy}>
                     <Hidden only={['sm','xl']}>
                        <Paper className={styleFinal.boxPaperHidden} elevation={2}>Hei saya terlihat di SM dan XL</Paper>
                     </Hidden>
                     <Hidden only={['sm','lg']}>
                        <Paper className={styleFinal.boxPaperHidden} elevation={2}>Hei saya terlihat di SM dan LG</Paper>
                     </Hidden>
                  </div>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default HiiddenComponent;