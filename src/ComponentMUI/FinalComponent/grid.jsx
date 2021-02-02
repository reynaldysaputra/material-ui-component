import { Grid, Paper, Typography, ButtonBase, Button, GridList, GridListTile } from '@material-ui/core';
import React, { Fragment } from 'react';
import { UseStyleFinal } from './style';

function GridComponent(){
   const styleFinal = UseStyleFinal();

   return(
      <Fragment>
         <Grid container justify='center' className={styleFinal.rootFinal} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>Grid</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid item xs={12} sm={7}>
                  <Paper elevation={2} style={{padding : '20px', boxSizing : 'border-box'}}>
                     <Grid container>
                        <Grid item xs={12} sm={4}>
                           <ButtonBase style={{height : '20vh'}}>
                              <img src='https://placeimg.com/640/480/tech' className={styleFinal.imgGrid}/>
                           </ButtonBase>
                        </Grid>
                        <Grid item container xs={10} sm={6} spacing={3} style={{marginLeft : 10}}>
                           <Grid item xs={12}>
                              <Typography variant='body1' gutterBottom>
                                 Standard license
                              </Typography>
                              <Typography variant='body2' gutterBottom>
                                 Full resolution 1920x1080 • JPEG
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                 ID: 1030114
                              </Typography>
                           </Grid>
                           <Grid item xs={12}>
                              <Button>Remove</Button>
                           </Grid>
                        </Grid>
                        <Grid item xs={2}>
                        <Typography variant="subtitle1" align='right'>$19.00</Typography>
                        </Grid>
                     </Grid>
                  </Paper>
               </Grid>
               {/*  ----- Type 2 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 2 Grid List</Typography>
               </Grid>
               <Grid item xs={12}>
                  <GridList cols={4} cellHeight={50} component='div'>
                     <GridListTile 
                        cols={4}
                        component='div'
                        style={{background : 'blue'}}
                     />
                     <GridListTile 
                        cols={2}
                        rows={2}
                        component='div'
                        style={{background : 'purple'}}
                     />
                     <GridListTile 
                        cols={1}
                        component='div'
                        style={{background : '#adadad'}}
                     />
                     <GridListTile 
                        cols={1}
                        rows={1}
                        component='div'
                        style={{background : '#adadad'}}
                     />
                     <GridListTile 
                        cols={1}
                        component='div'
                        style={{background : '#adadad'}}
                     />                 
                  </GridList>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default GridComponent;