import { Card, CardContent, Grid, Typography, CardActions, Button, CardHeader, Avatar, CardMedia, IconButton, CardActionArea } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import React, { Fragment } from 'react';
import {UseStyleC} from './style';

function CardComponent() {
   const styleC = UseStyleC();

   return(
      <Fragment>
         <Grid container justify='center' className={styleC.rootA} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>Card</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid>
                  <Card className={styleC.card}>
                     <CardContent>
                        <Typography color='textSecondary' gutterBottom>Word of the Day</Typography>
                        <Typography variant='h4' component='h3'>Hello Word</Typography>
                        <Typography color='textSecondary' gutterBottom>adjective</Typography>
                        <Typography component='p' variant='body2'>
                           well meaning and kindly. <br/> '"a benevolent smile"'
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button variant='contained' color='primary'>Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>
               {/*  ----- Type 2 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 2</Typography>
               </Grid>
               <Grid>
                  <Card className={styleC.card} variant='outlined'>
                     <CardContent>
                        <Typography color='textSecondary' gutterBottom>Word of the Day</Typography>
                        <Typography variant='h4' component='h3'>Hello Word</Typography>
                        <Typography color='textSecondary' gutterBottom>adjective</Typography>
                        <Typography component='p' variant='body2'>
                           well meaning and kindly. <br/> '"a benevolent smile"'
                        </Typography>
                     </CardContent>
                     <CardActions>
                        <Button variant='contained' color='primary' disableElevation>Learn More</Button>
                     </CardActions>
                  </Card>
               </Grid>
               {/*  ----- Type 3 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 3</Typography>
               </Grid>
               <Grid>
                  <Card className={styleC.card2} variant='outlined'>
                     <CardHeader
                        title='Marlina Joe'
                        subheader='September 14, 2016'
                        avatar={
                           <Avatar className={styleC.avatar} alt='Aldo' src='https://placeimg.com/640/480/people'>
                              A
                           </Avatar>
                        }
                        action={
                           <IconButton aria-label="settings">
                              <MoreVertIcon />
                           </IconButton>
                        }
                     />
                     <CardMedia
                        image='https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg'
                        title='https://placeimg.com/640/480/animals'
                        className={styleC.cardMedia2}
                     />
                     <CardContent>
                        <Typography color='textSecondary' gutterBottom>This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.</Typography>
                     </CardContent>
                     <CardActions>
                        <IconButton aria-label="add to favorites">
                           <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                           <ShareIcon />
                        </IconButton>
                        <IconButton aria-label="share" style={{marginLeft : 'auto'}}>
                           <ShareIcon />
                        </IconButton>
                     </CardActions>
                  </Card>
               </Grid>
               {/*  ----- Type 4 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 4</Typography>
               </Grid>
               <Grid>
                  <Card className={styleC.card2}>
                     <CardActionArea>
                        <CardMedia
                           className={styleC.cardMedia2}
                           image="https://placeimg.com/300/200/animals"
                           title="Contemplative Reptile"
                        />
                        <CardContent>
                           <Typography gutterBottom variant="h5" component="h2">
                              Lizard
                           </Typography>
                           <Typography variant="body2" color="textSecondary" component="p">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                           </Typography>
                        </CardContent>
                     </CardActionArea>
                     <CardActions>
                        <Button size="small" color="primary">
                           Share
                        </Button>
                        <Button size="small" color="primary">
                           Learn More
                        </Button>
                     </CardActions>
                  </Card>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default CardComponent;