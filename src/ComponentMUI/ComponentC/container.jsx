import { Container, Grid, Typography, Paper } from '@material-ui/core';
import React, { Fragment } from 'react';
import { UseStyleC } from './style';
import CssBaseline from '@material-ui/core/CssBaseline';

function ContainerComponent(){
   const styleC = UseStyleC();

   return(
      <Fragment>
         <Grid container justify='center' className={styleC.rootA} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>Container</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid item xs={12}>
                  <CssBaseline />
                  <Container maxWidth='md'>
                     <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                  </Container>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default ContainerComponent;