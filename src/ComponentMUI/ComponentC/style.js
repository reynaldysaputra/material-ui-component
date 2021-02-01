import {makeStyles} from '@material-ui/core';

export const UseStyleC = makeStyles((theme) => ({
   rootC : {
      width : '80%',
      height: 'auto',
      margin : 'auto',
      padding : '20px 0px',
   }, 
   card :{
      minWidth : '250px',
      padding : '10px',
      boxSizing : "border-box"
   },
   avatar : {
      background : 'primary'
   },
   card2 : {
      maxWidth : '300px',
      margin: 'auto'
   },
   cardMedia2 :{
      height : '28vh',
      // paddingTop: '56.25%', // 16:9
      backgroundRepeat : 'no-repeat',
      backgroundSize : 'cover',
      backgroundPositionY : '0px'
   },
   containerChip1 : {
      display : 'flex',      
      "containerChip1 > div" : {
         background : 'red'
      }
   }
}))