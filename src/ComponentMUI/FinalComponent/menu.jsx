import React, { Fragment } from 'react';
import {Grid, Typography, useScrollTrigger, Slide, AppBar, Toolbar, Button, Menu, MenuItem} from '@material-ui/core';
import {UseStyleFinal} from './style';

function MenuComponent(){
   const styleFinal = UseStyleFinal();
   const trigger = useScrollTrigger();
   const [anchor, setAnchor] = React.useState(null);

   return (
      <Fragment>
         <Slide in={!trigger} appear={true} direction="down">  
            <AppBar>
               <Toolbar>
                  <Typography variant="h6">Scroll to Hide App Bar</Typography>
               </Toolbar>
            </AppBar>
         </Slide>

         <Grid container justify='center' className={styleFinal.rootFinal} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>Menu</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid item xs={12} sm={2}>
                  <Button variant='contained' onClick={(event) => setAnchor(event.currentTarget)}>OPEN MENU</Button>
                  <Menu
                     anchorEl={anchor}
                     open={Boolean(anchor)}
                     onClose={() => setAnchor(null)}
                  >
                     <MenuItem onClick={() => setAnchor(null)} selected>Profile</MenuItem>
                     <MenuItem onClick={() => setAnchor(null)}>MyAccount</MenuItem>
                     <MenuItem onClick={() => setAnchor(null)}>Logout</MenuItem>
                  </Menu>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default MenuComponent;