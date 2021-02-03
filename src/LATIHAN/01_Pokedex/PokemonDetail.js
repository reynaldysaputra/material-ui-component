import { Typography, Link } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import mockData from './mockData';

function PokemonPageDetail({match}){
   const id = match.params.pokemonID;
   const {name, sprites, species, height, weight, types} = mockData[id];
   const image = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

   return(
      <Fragment>
         <Typography variant='h2'>{`${id}. ${name}`}</Typography>
         <img style={{width : '300px', height : '300px'}} src={image} />
         <Typography variant='h3'>Pokemon Info</Typography>
         <Typography>
            Species :  
            <Link href={species.url}> {species.name}</Link>
         </Typography>
         <Typography>Height : {height}</Typography>
         <Typography>Weight : {weight}</Typography>
         <Typography>Types : </Typography>
         <ul>
            {types.map(item => (
               <li key={item.slot}>{item.type.name}</li>
            ))}
         </ul>
      </Fragment>
   )
}

export default PokemonPageDetail;