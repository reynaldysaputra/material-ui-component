import { Button, makeStyles, withStyles } from "@material-ui/core";
import { themeStyled } from "./theme";

export const useStyle = makeStyles((theme) => ({
   nestingContainer : {
      color : 'red',
      '& p' : {
         color : 'blue',
         '& span'  : {
            color : 'green'
         }
      }
   }, 
   myButtons : {
      background: (props) => props.color === 'red'? 
         'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' :
         'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      color : 'white',
      [themeStyled.breakpoints.down('sm')] : {
         color : 'black'
      }
   },
   activeBoxQuiz : {
      background : 'green'
   },
   unActiveBoxQuiz : {
      background : 'red'
   },
   defaultStyle : {
      background : 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
   },
   blueStyle : {
      background : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'      
   }
}));

export const StyledButtons = withStyles({
   root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      transition : '1s',
      '&:hover' : {
         background : 'red'
      }
   },
   label: {
      textTransform: 'capitalize',
   },
})(Button)