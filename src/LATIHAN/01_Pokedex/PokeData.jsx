import React from 'react';
import {Grid, Card, CardContent, CardMedia, Typography, CardActionArea}  from '@material-ui/core';
import mockData from './mockData';
import { NavLink } from 'react-router-dom';

function PokedexBox(props) {
   return(
         <Card>
            <CardActionArea component={NavLink} to={`/${props.index+1}`}>
               <CardMedia
                  image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index+1}.png`}
                  title={props.data.name}
                  className={props.mediaStyle}
               />
               <CardContent>
                  <Typography align='center' variant='body1'>
                     {`${props.index+1}. ${props.data.name}`}
                  </Typography>
               </CardContent>
            </CardActionArea>
         </Card>
   )
}

export default PokedexBox;