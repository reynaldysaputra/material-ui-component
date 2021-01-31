import { Grid, Typography, TextField, Chip } from '@material-ui/core';
import React, { Fragment } from 'react';
import {Autocomplete, createFilterOptions} from '@material-ui/lab';
import {UseStyleA} from './style';

const filter = createFilterOptions();

function AutoCompleteComponent() {
   const styleA = UseStyleA();
   const [inputValue, setInputValue] = React.useState('');
   const [inputValue2, setInputValue2] = React.useState('');
   const [value, setValue] = React.useState(top100Films[0]);
   const [searchData, setSearchData] = React.useState('');

   return(
      <>
         <Grid container justify='center' className={styleA.rootA} spacing={5}>
            <Grid xs={12} item style={{textAlign:'center'}}>
               <Typography variant='h3'>AutoComplete</Typography>
            </Grid>
            <Grid xs={12} item container justify='center' spacing={1}>
               {/*  ----- Type 1 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 1</Typography>
               </Grid>
               <Grid>
                  <Autocomplete
                     id="combo-box-demo"
                     options={top100Films}
                     getOptionLabel={(option) => option.judul}
                     style={{ width: 300 }}
                     debug
                     renderInput={(params) => {
                        return <TextField {...params} label="Combo box" variant="outlined" />
                     }}
                  />
               </Grid>
               {/*  ----- Type 2 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 2</Typography>
               </Grid>
               <Grid>
                  <Autocomplete
                     id="Country"
                     options={top100Films}
                     getOptionLabel={(option) => option.judul}
                     style={{ width: 300 }}
                     renderOption={(option) => (
                        <React.Fragment>
                          <span>{option.judul} - {option.year}</span>
                        </React.Fragment>
                      )}
                     renderInput={(params) => {
                        return <TextField {...params} label="Country" variant="outlined" />
                     }}
                  />
               </Grid>
               {/*  ----- Type 3 ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 3</Typography>
               </Grid>
               <Grid>
                  <Autocomplete
                     id="Country"
                     options={top100Films}
                     getOptionLabel={(option) => option.judul}
                     style={{ width: 300 }}
                     inputValue={inputValue}
                     onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                     }}
                     value={value}
                     onChange={(event, newValue) => {
                        setValue(newValue);
                     }}
                     renderOption={(option) => (
                        <React.Fragment>
                          <span>{option.judul} - {option.year}</span>
                        </React.Fragment>
                      )}
                     renderInput={(params) => {
                        return <TextField {...params} label="Country" variant="outlined" />
                     }}
                  />
               </Grid>
               <Typography variant='h4'>inputValue - {inputValue}</Typography>
               <Typography variant='h4'>Value - {value !== null && value.judul}</Typography>
                {/*  ----- Type 4 Search No option ----- */}
                <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 4</Typography>
               </Grid>
               <Grid>
                  <Autocomplete
                     id="Country"
                     options={top100Films}
                     getOptionLabel={(option) => option.judul}
                     style={{ width: 300 }}
                     inputValue={inputValue2}
                     onInputChange={(event, newInputValue) => {
                        setInputValue2(newInputValue);
                     }}
                     renderOption={(option) => (
                        <React.Fragment>
                          <span>{option.judul} - {option.year}</span>
                        </React.Fragment>
                      )}
                     renderInput={(params) => {
                        return <TextField {...params} label="Country" variant="outlined" />
                     }}
                  />
               </Grid>
               {/*  ----- Type 5 Search same google ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 4</Typography>
               </Grid>
               <Grid>
                  <Autocomplete
                     value={value}
                     onChange={(event, newValue) => { // 4
                        // ini untuk enter
                        if (typeof newValue === 'string') {
                         setValue({
                           judul: newValue,
                         });
                       } else if (newValue && newValue.inputValue) {
                         // Create a new value from the user input, tapi tidak enter
                         setValue({
                           judul: newValue.inputValue,
                         });
                       } else {
                        //  tidak enter
                         setValue(newValue);
                       }
                     }}
                     filterOptions={(options, params) => {    // 1
                        const filtered = filter(options, params);
                        
                        // Suggest the creation of a new value
                        if (params.inputValue !== '') {
                           filtered.push({
                              inputValue: params.inputValue,
                              judul : `Add "${params.inputValue}"`,
                           });
                       }
               
                       return filtered;
                     }}
                     id="free-solo-with-text-demo"
                     options={top100Films}
                     getOptionLabel={(option) => {  // 2
                        // Value selected with enter, right from the input
                        if (typeof option === 'string') {
                           return option;
                        }
                       // Add "xxx" option created dynamically
                       if (option.inputValue) {
                         return option.inputValue;  // ini buat merender data input dari value
                        }
                       // Regular option
                       return option.judul;  // jika ada datanya, ini buat merender data yang sudah ada
                     }}
                     renderOption={(option) => { // 3
                        return option.judul; // ini buat nampilin data 'ADD value' yang ada di input 
                     }}
                     freeSolo
                     style={{ width: 300 }}
                     renderInput={(params) => {
                        return <TextField {...params} label='Search Name' variant='outlined'/>
                     }}
                  />
               </Grid>
               {/*  ----- Type 5 Search same google ----- */}
               <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography variant='h6'>Type 5</Typography>
               </Grid>
               <Grid>
                  <Autocomplete
                     style={{width:300}}
                     options={berita}
                     multiple
                     disableCloseOnSelect
                     getOptionLabel={(option) => {
                        return `${option.id + ' ' +option.newsHot}`
                     }}
                     renderOption={(option) => (
                        <React.Fragment>
                          <span>{option.id} - {option.newsHot}</span>
                        </React.Fragment>
                      )}
                     renderInput={(params) => {
                        return( 
                        <div ref={params.InputProps.ref}>
                           {console.log(params)}
                           <input type='text'  {...params.inputProps}/>
                        </div>)
                     }}
                  />
               </Grid>
            </Grid>  
         </Grid>  
      </>
   )
}

const top100Films = [
   { judul: 'The Shawshank Redemption', year: 1994 },
   { judul: 'The Godfather', year: 1972 },
   { judul: 'The Godfather: Part II', year: 1974 },
   { judul: 'The Dark Knight', year: 2008 },
   { judul: '12 Angry Men', year: 1957 },
   { judul: "Schindler's List", year: 1993 },
   { judul: 'Pulp Fiction', year: 1994 },
   { judul: 'The Lord of the Rings: The Return of the King', year: 2003 },
   { judul: 'The Good, the Bad and the Ugly', year: 1966 },
   { judul: 'Fight Club', year: 1999 },
   { judul: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
   { judul: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
   { judul: 'Forrest Gump', year: 1994 },
   { judul: 'Inception', year: 2010 },
   { judul: 'The Lord of the Rings: The Two Towers', year: 2002 },
   { judul: "One Flew Over the Cuckoo's Nest", year: 1975 },
   { judul: 'Goodfellas', year: 1990 },
   { judul: 'The Matrix', year: 1999 },
   { judul: 'Seven Samurai', year: 1954 },
   { judul: 'Star Wars: Episode IV - A New Hope', year: 1977 },
   { judul: 'City of God', year: 2002 },
   { judul: 'Se7en', year: 1995 },
   { judul: 'The Silence of the Lambs', year: 1991 },
   { judul: "It's a Wonderful Life", year: 1946 },
   { judul: 'Life Is Beautiful', year: 1997 },
   { judul: 'The Usual Suspects', year: 1995 },
   { judul: 'Léon: The Professional', year: 1994 },
   { judul: 'Spirited Away', year: 2001 },
   { judul: 'Saving Private Ryan', year: 1998 },
   { judul: 'Once Upon a Time in the West', year: 1968 },
   { judul: 'American History X', year: 1998 },
   { judul: 'Interstellar', year: 2014 },
   { judul: 'Casablanca', year: 1942 },
   { judul: 'City Lights', year: 1931 },
   { judul: 'Psycho', year: 1960 },
   { judul: 'The Green Mile', year: 1999 },
   { judul: 'The Intouchables', year: 2011 },
   { judul: 'Modern Times', year: 1936 },
   { judul: 'Raiders of the Lost Ark', year: 1981 },
   { judul: 'Rear Window', year: 1954 },
   { judul: 'The Pianist', year: 2002 },
   { judul: 'The Departed', year: 2006 },
   { judul: 'Terminator 2: Judgment Day', year: 1991 },
   { judul: 'Back to the Future', year: 1985 },
   { judul: 'Whiplash', year: 2014 },
   { judul: 'Gladiator', year: 2000 },
   { judul: 'Memento', year: 2000 },
   { judul: 'The Prestige', year: 2006 },
   { judul: 'The Lion King', year: 1994 },
   { judul: 'Apocalypse Now', year: 1979 },
   { judul: 'Alien', year: 1979 },
   { judul: 'Sunset Boulevard', year: 1950 },
   { judul: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
   { judul: 'The Great Dictator', year: 1940 },
   { judul: 'Cinema Paradiso', year: 1988 },
   { judul: 'The Lives of Others', year: 2006 },
   { judul: 'Grave of the Fireflies', year: 1988 },
   { judul: 'Paths of Glory', year: 1957 },
   { judul: 'Django Unchained', year: 2012 },
   { judul: 'The Shining', year: 1980 },
   { judul: 'WALL·E', year: 2008 },
   { judul: 'American Beauty', year: 1999 },
   { judul: 'The Dark Knight Rises', year: 2012 },
   { judul: 'Princess Mononoke', year: 1997 },
   { judul: 'Aliens', year: 1986 },
   { judul: 'Oldboy', year: 2003 },
   { judul: 'Once Upon a Time in America', year: 1984 },
   { judul: 'Witness for the Prosecution', year: 1957 },
   { judul: 'Das Boot', year: 1981 },
   { judul: 'Citizen Kane', year: 1941 },
   { judul: 'North by Northwest', year: 1959 },
   { judul: 'Vertigo', year: 1958 },
   { judul: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
   { judul: 'Reservoir Dogs', year: 1992 },
   { judul: 'Braveheart', year: 1995 },
   { judul: 'M', year: 1931 },
   { judul: 'Requiem for a Dream', year: 2000 },
   { judul: 'Amélie', year: 2001 },
   { judul: 'A Clockwork Orange', year: 1971 },
   { judul: 'Like Stars on Earth', year: 2007 },
   { judul: 'Taxi Driver', year: 1976 },
   { judul: 'Lawrence of Arabia', year: 1962 },
   { judul: 'Double Indemnity', year: 1944 },
   { judul: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
   { judul: 'Amadeus', year: 1984 },
   { judul: 'To Kill a Mockingbird', year: 1962 },
   { judul: 'Toy Story 3', year: 2010 },
   { judul: 'Logan', year: 2017 },
   { judul: 'Full Metal Jacket', year: 1987 },
   { judul: 'Dangal', year: 2016 },
   { judul: 'The Sting', year: 1973 },
   { judul: '2001: A Space Odyssey', year: 1968 },
   { judul: "Singin' in the Rain", year: 1952 },
   { judul: 'Toy Story', year: 1995 },
   { judul: 'Bicycle Thieves', year: 1948 },
   { judul: 'The Kid', year: 1921 },
   { judul: 'Inglourious Basterds', year: 2009 },
   { judul: 'Snatch', year: 2000 },
   { judul: '3 Idiots', year: 2009 },
   { judul: 'Monty Python and the Holy Grail', year: 1975 },
 ];

 const berita = [
    {
       id : 1,
       newsHot : 'loremdiuwahduiwahudiaiw dhiwoahidoa hdwa',
       newsMedium : 'dahwuidhwuaiduiqq'
    },
    {
      id : 2,
      newsHot : 'loremdiuwahduiwahudiaiw dhiwoahidoa hdwa',
      newsMedium : 'dahwuidhwuaiduiqq'
   },
   {
      id : 3,
      newsHot : 'loremdiuwahduiwahudiaiw dhiwoahidoa hdwa',
      newsMedium : 'dahwuidhwuaiduiqq'
   },
 ]

export default AutoCompleteComponent;