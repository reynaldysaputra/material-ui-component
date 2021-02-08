import { makeStyles } from "@material-ui/core";

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
   },
   activeBoxQuiz : {
      background : 'green'
   },
   unActiveBoxQuiz : {
      background : 'red'
   }
}));