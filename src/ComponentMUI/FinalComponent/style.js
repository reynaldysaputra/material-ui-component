import {makeStyles} from '@material-ui/core';

export const UseStyleFinal = makeStyles((theme) => ({
   rootFinal : {
      width : '80%',
      height: 'auto',
      margin : 'auto',
      padding : '20px 0px',
   },
   imgGrid :{
      width : '100%',
      height : 100
   },
   containerHiddenStudy : {
      display : 'flex',
      flexWrap : 'wrap'
   },
   boxPaperHidden : {
      flexGrow : '1',
      textAlign : 'center',
      padding : '10px'
   }
}));