import { AppBar, Toolbar, Grid, CircularProgress } from '@material-ui/core';
import React, { Fragment, useState, useEffect } from 'react';
import PokedexBox from './PokeData';
import {UseStyleFinal} from './style';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

function PokemonPage(){
   const styleFinal = UseStyleFinal();
   const [data, setData] = useState(null);
   const [filter, setFilter] = useState('');

   useEffect(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
         .then(res => res.json())
         .then(data => {
            setData(data);
         })
   }, [])

   const filteredData = (e) => {
      setFilter(e.target.value);
   }

   return(
      <Fragment>
         <AppBar position='relative'>
            <Toolbar>
               <div className={styleFinal.containerSearch}>
                  <SearchIcon/>
                  <InputBase 
                     placeholder='Search Pokemon' 
                     className={styleFinal.searchInput} 
                     defaultValue={filter}
                     onChange={filteredData}  
                  />
               </div>
            </Toolbar>
         </AppBar>

         {/* ---- Pokedex Box ---- */}
         {data != null ? (
            <Grid container justify='center' style={{padding:'55px', boxSizing:'border-box'}}>
               {console.log(data)}
               {data.results.map((item,index) => (
                  data.results[index].name.includes(filter) && 
                  <Grid item xs={12} sm={4} key={index}>
                     <PokedexBox mediaStyle={styleFinal.cardMediaPokedex} data={item} index={index}/>
                  </Grid>                  
               ))}
            </Grid>
         ) : <CircularProgress />}
      </Fragment>
   )
}

export default PokemonPage;