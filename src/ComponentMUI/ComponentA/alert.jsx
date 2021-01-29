import React, { Fragment, useState } from 'react';
import { Button, Collapse, Grid, IconButton, Typography} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import AndroidIcon from '@material-ui/icons/Android';
import {UseStyleA} from './style';

function AlertComponent() {
   const styleA = UseStyleA();
   const [open, setOpen] = useState(true);

   return(
      <Fragment>
         <Grid container justify='center' className={styleA.rootA} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>Alert</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid xs={12} sm={6} md={4} item>
                  <Alert severity="error" className={styleA.spacingA}>This is an error alert — check it out!</Alert>
                  <Alert severity="warning" className={styleA.spacingA}>This is a warning alert — check it out!</Alert>
                  <Alert severity="info" className={styleA.spacingA}>This is an info alert — check it out!</Alert>
                  <Alert severity="success" className={styleA.spacingA}>This is a success alert — check it out!</Alert>
               </Grid>
               {/*  ----- Type 2 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 2</Typography>
               </Grid>
               <Grid xs={12} sm={6} md={4} item>
                  <Alert severity='error' className={styleA.spacingA}>
                     <AlertTitle>Alert Title</AlertTitle>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, a.
                  </Alert>
                  <Alert severity='warning' className={styleA.spacingA}>
                     <AlertTitle>Alert Title</AlertTitle>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, a.
                  </Alert>
                  <Alert severity='info' className={styleA.spacingA}>
                     <AlertTitle>Alert Title</AlertTitle>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, a.
                  </Alert>
                  <Alert severity='success' className={styleA.spacingA}>
                     <AlertTitle>Alert Title</AlertTitle>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, a.
                  </Alert>
               </Grid>
               {/*  ----- Type 3 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 3</Typography>
               </Grid>
               <Grid xs={12} sm={6} md={4} item>
                  <Collapse in={open}>
                     <Alert 
                        severity='success' 
                        onClose={() => setOpen(false)}
                     >This is a success alert — check it out!</Alert>
                  </Collapse>
                  <Button 
                     variant='contained' 
                     className={styleA.spacingA}
                     onClick={() => setOpen(true)}
                  >Check Rewards</Button>
               </Grid>
               {/*  ----- Type 4 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 4</Typography>
               </Grid>
               <Grid xs={12} sm={6} md={4} item>
                  <Collapse in={open}>
                     <Alert 
                        severity='error' 
                        action={
                           <IconButton
                              color='inherit'
                              size='small'
                              onClick={() => {
                              setOpen(false);
                              }}
                           >
                              <AndroidIcon/>
                           </IconButton>
                        }
                     >This is a success alert — check it out!</Alert>
                  </Collapse>
                  <Button 
                     variant='contained' 
                     className={styleA.spacingA}
                     onClick={() => setOpen(true)}
                  >Check Rewards</Button>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default AlertComponent;