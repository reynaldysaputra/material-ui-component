import React from 'react';
import {Grid, Card, CardContent, CardMedia, Typography, CardActionArea}  from '@material-ui/core';
import mockData from './mockData';
import { NavLink } from 'react-router-dom';

function PokedexBox(props) {
   const {id, name, sprites} = mockData[props.idPokemon];

   return(
         <Card>
            <CardActionArea component={NavLink} to={`/${id}`}>
               <CardMedia
                  image={sprites.front_default}
                  title="Paella dish"
                  className={props.mediaStyle}
               />
               <CardContent>
                  <Typography align='center' variant='body1'>
                     {`${id}. ${name}`}
                  </Typography>
               </CardContent>
            </CardActionArea>
         </Card>
   )
}

export default PokedexBox;