import { Grid, Typography } from '@material-ui/core';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import React from 'react';
import { Fragment, useState } from 'react';
import {UseStyleFinal} from './style';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';

function SpeedDealComponent(){
   const styleFinal = UseStyleFinal();
   const [open, setOpen] = useState(false);
   const actions = [
      { icon: <FileCopyIcon />, name: 'Copy' },
      { icon: <SaveIcon />, name: 'Save' },
      { icon: <PrintIcon />, name: 'Print' },
      { icon: <ShareIcon />, name: 'Share' },
      { icon: <FavoriteIcon />, name: 'Like' },
   ];

   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return(
      <Fragment>
         <Grid container justify='center' className={styleFinal.rootFinal} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>SpeedDeal</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid item xs={12} justify='center'>
                  <SpeedDial
                     ariaLabel="SpeedDial example"
                     icon={<SpeedDialIcon/>}
                     onClose={handleClose}
                     onOpen={handleOpen}
                     open={open}
                     direction='up'
                  >
                     {actions.map(item => (
                        <SpeedDialAction
                           ariaLabel="SpeedDial example"
                           key={item.name}
                           icon={item.icon}
                           tooltipTitle={item.name}
                           onClick={handleClose}
                        />
                     ))}
                  </SpeedDial>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default SpeedDealComponent;