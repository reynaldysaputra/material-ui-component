import React, { Fragment } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { UseStyleGrid } from './styleGrid';

function Grid01() {
   const Style = UseStyleGrid();

   return(
      <Fragment>
         <Grid container spacing={2} className={Style.containerGrid}>
            <Grid item xs={12}>
               <Paper elevation={2} className={Style.paper1}>XS12</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
               <Paper elevation={2} className={Style.paper1}>XS12 SM6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
               <Paper elevation={2} className={Style.paper1}>XS12 SM6</Paper>
            </Grid>
            <Grid item xs={12} sm={10} md={12} container spacing={1}>
               <Grid item xs={12} sm={6} md={4}>
                  <Paper elevation={2} className={Style.paper2} style={{height:'100px'}}>XS12 SM6 MD4</Paper>
               </Grid>
               <Grid item xs={12} sm={6} md={8}>
                  <Paper elevation={2} className={Style.paper2}>XS12 SM4 MD8</Paper>
               </Grid>
            </Grid>
            <Grid item xs={12} sm={2} md={8}>
               <Paper elevation={2} className={Style.paper1}>XS12 SM2</Paper>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default Grid01;