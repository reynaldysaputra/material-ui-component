import { Grid, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { Fragment, useState } from 'react';
import {UseStyleFinal} from './style';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';

function RatingComponent() {
   const styleFinal = UseStyleFinal();
   const [value, setValue] = useState(2);
   const [value2, setValue2] = useState(1.5);

   return(
      <Fragment>
         <Grid container justify='center' className={styleFinal.rootFinal} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>Rating</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1 Controlled</Typography>
               </Grid>
               <Grid item xs={0} justify='center'>
                  <Rating
                     name='rating-controlled'
                     value={value}
                     onChange={(event, newValue) => setValue(newValue)}
                  />
               </Grid>
               {/*  ----- Type 2 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 2 ReadOnly</Typography>
               </Grid>
               <Grid item xs={0} justify='center'>
                  <Rating
                     name='rating-controlled'
                     value={value}
                     readOnly
                  />
               </Grid>
               {/*  ----- Type 3 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 3 Disabled</Typography>
               </Grid>
               <Grid item xs={0} justify='center'>
                  <Rating
                     name='rating-controlled'
                     value={value}
                     disabled
                  />
               </Grid>
               {/*  ----- Type 4 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 4 Costumize</Typography>
               </Grid>
               <Grid item xs={0} justify='center'>
               <Rating
                     name='rating-controlled'
                     value={value2}
                     onChange={(event, newValue) => setValue2(newValue)}
                     precision={0.5}
                     emptyIcon={<StarOutlineIcon />}
                  />
               </Grid>
               {/*  ----- Type 5 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 5 Costumize</Typography>
               </Grid>
               <Grid item xs={0} justify='center'>
               <Rating
                     name="customized-color"
                     value={value2}
                     onChange={(event, newValue) => setValue2(newValue)}
                     precision={0.5}
                     icon={<FavoriteIcon fontSize="inherit" />}
                     style={{color:'red'}}
                  />
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default RatingComponent;