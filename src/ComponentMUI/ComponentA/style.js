import {makeStyles} from '@material-ui/core';

export const UseStyleA = makeStyles((theme) => ({
   rootA : {
      width : '80%',
      height: 'auto',
      margin : 'auto',
      padding : '20px 0px',
   },
   badgeMe :{
      padding : '5px',
      background : '#FDD7D7',
      color : '#8A3433',
      marginLeft : '5%',
      borderRadius : '5%',
      fontWeight : 'bold'
   },
   spacingA : {
      marginTop : '2%'
   }
}))