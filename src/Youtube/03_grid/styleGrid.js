import { makeStyles } from "@material-ui/core";

export const UseStyleGrid = makeStyles((theme) => ({
   containerGrid : {
      width : '80%',
      margin : 'auto'
   },
   paper1 : {
      width : 'auto',
      background : 'lightblue',
      padding : '10px',
      textAlign : 'center',
      color : 'blue'
   },
   paper2 : {
      width : 'auto',
      background : 'blue',
      height : '100%',
      textAlign : 'center',
      color : 'white'
   }
}))