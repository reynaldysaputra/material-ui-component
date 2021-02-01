import React, { Fragment, useState } from 'react';
import { UseStyleC } from './style';
import {Grid, Typography, Chip, Avatar, TextField} from '@material-ui/core';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import DoneIcon from '@material-ui/icons/Done';
import {Autocomplete, createFilterOptions} from '@material-ui/lab';

function ChipComponent(){
   const styleC = UseStyleC();
   const [chipData, setChipData] = React.useState([
      { key: 0, label: 'Angular' },
      { key: 1, label: 'jQuery' },
      { key: 2, label: 'Polymer' },
      { key: 3, label: 'React' },
      { key: 4, label: 'Vue.js' },
   ]);
   const [data, setData] = React.useState([]);

   const handleClick = (e) => {
      console.log(e.target);
   }

   const handleDelete = (e) => {
      console.log(e.target);
   }

   const handleDeleteArrayData = (keys) => {
      setData(data => data.filter(item => item.key !== keys));
   }

   return(
      <Fragment>
         <Grid container justify='center' className={styleC.rootA} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>Chip</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1 Basic</Typography>
               </Grid>
               <Grid item className={styleC.containerChip1}>
                  <Chip label='Chip Basic' />
                  <Chip label='Chip Basic' disabled />
                  <Chip 
                     label='Jhonson' 
                     avatar={<Avatar alt='Jhonson' src='https://placeimg.com/300/200/people' />}
                     onClick={handleClick}
                     onDelete={handleDelete}
                  />
                  <Chip 
                     label='Jhonson' 
                     avatar={<Avatar alt='Jhonson' src='https://placeimg.com/300/200/people' />}
                     deleteIcon={<CancelRoundedIcon/>}
                     onClick={handleClick}
                     onDelete={handleDelete}                     
                  />
                  <Chip
                     avatar={<Avatar alt='Jhonson' src='https://placeimg.com/300/200/people' />}
                     label="Primary clickable"
                     clickable                     
                     color="primary"
                     onDelete={handleDelete}
                     deleteIcon={<DoneIcon />}
                  />
               </Grid>
               {/*  ----- Type 2 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 2 Chip Array</Typography>
               </Grid>
               <Grid item>
                  <Autocomplete
                     options={chipData}
                     onChange={(option, params) => {
                        console.log(params);
                        if(params != null) setData(data => [...data, {key : params.key, label : params.label}])
                     }}
                     getOptionLabel={(params) => params.label}
                     style={{ width: 300, marginBottom : '20px' }}
                     renderInput={(params) => {
                        return <TextField {...params} label='Seatch Languange' variant='outlined' />
                     }}
                     
                  />
                  {data.length > 0 && data.map(item => (
                     <Chip
                        key={item.key}
                        label={item.label}
                        onDelete={() => handleDeleteArrayData(item.key)}
                        deleteIcon={<CancelRoundedIcon/>}
                     />
                  ))}
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   )
}

export default ChipComponent;