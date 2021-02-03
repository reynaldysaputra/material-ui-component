import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PokemonPage from './Pokemon';
import PokemonPageDetail from './PokemonDetail';
import { ThemeProvider } from '@material-ui/core';
import themePokedex from './themePokedex';

function AppsPokedex() {
   return(
      <ThemeProvider theme={themePokedex}>
         {console.log(themePokedex)}
         <BrowserRouter>
            <Route path='/' exact component={PokemonPage} />
            <Route path='/:pokemonID' component={PokemonPageDetail} />
         </BrowserRouter>
      </ThemeProvider>
   )
}

export default AppsPokedex;