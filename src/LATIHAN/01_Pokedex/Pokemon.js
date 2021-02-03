import { AppBar, Toolbar, Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import PokedexBox from './PokeData';
import {UseStyleFinal} from './style';
import mockData from './mockData';

function PokemonPage(){
   const styleFinal = UseStyleFinal();

   return(
      <Fragment>
         <AppBar position='relative'>
            <Toolbar>

            </Toolbar>
         </AppBar>

         {/* ---- Pokedex Box ---- */}
         <Grid container spacing={2} justify='center' style={{padding:'55px', boxSizing:'border-box'}}>
            {Object.keys(mockData).map(item => (
               <Grid item xs={12} sm={3} key={item}>
                  <PokedexBox mediaStyle={styleFinal.cardMediaPokedex} idPokemon={item}/>
               </Grid>
            ))}
         </Grid>
      </Fragment>
   )
}

export default PokemonPage;