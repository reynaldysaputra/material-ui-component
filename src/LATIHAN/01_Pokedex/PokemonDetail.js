import { Typography, Link, Button } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';
import { Redirect, useLocation, useHistory } from 'react-router-dom';

function PokemonPageDetail({match}){
   let id = match.params.pokemonID--;
   const [data, setData] = useState(null);
   const history = useHistory();
   
   useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
         .then(res => res.json())
         .then(data => {
            setData(data);
         }).catch(err => {
            history.push('/err');
         })
   }, [])

   return(
      <Fragment>
         {console.log(data)}
         {data != null && (
            <>
               <Typography variant='h2'>{`${Number(++id)}. ${data.name}`}</Typography>
               <img style={{width : '300px', height : '300px'}} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} />
               <Typography variant='h3'>Pokemon Info</Typography>
               <Typography>
                  Species :  
                  <Link href={data.species.url}> {data.species.name}</Link>
               </Typography>
               <Typography>Height : {data.height}</Typography>
               <Typography>Weight : {data.weight}</Typography>
               <Typography>Types : </Typography>
               <ul>
                  {data.types.map(item => (
                     <li key={item.slot}>{item.type.name}</li>
                  ))}
               </ul>
               <Button variant='contained' onClick={() => history.push('/')}>BACK TO POKEDEX</Button>
            </>
         )}
      </Fragment>
   )
}

export default PokemonPageDetail;