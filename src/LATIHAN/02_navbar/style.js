import { makeStyles } from "@material-ui/core";
import { themeNav } from "./theme";

export const useStyleNav = makeStyles((theme) => ({
   appBar : {
      boxShadow : 'none',
      background : 'transparent'
   },
   logoContent : {
      fontSize : '1.8rem',
      fontFamily : 'Nunito',
      fontWeight : '800',
      color: 'white',
      textAlign : 'center',
      [themeNav.breakpoints.down('md')] : {
         width : '100%',
         fontSize : '1.4rem',
         fontWeight : 'bold'
      },
   },
   menuContent : {
      color : 'white !important',
      marginLeft : '3%',
      fontSize : '1.2rem',
      fontWeight : '400',
      '& > * + *': {
         marginLeft: themeNav.spacing(2),
      },
   }, 
   menuContentMobile : {
      position : 'absolute',
      width : '100%',
      height : '100vh',
      background : themeNav.palette.primary.main,
      fontSize : '1.5em',
      fontWeight : '300',
      alignContent : 'center',
      justifyContent : 'center',
      left : 0,
      display : 'grid',
      gridTemplateColumn : '100%',
      transition : '1s',
      textAlign : 'center',
      '& > *' : {
         height : '10vh'
      }
   },
   searchBox : {
      marginLeft : 'auto',
      height : 'auto',
      display : 'flex',
   },
   searchBoxMobile : {
      height : 'auto',
      display : 'flex',
      padding : '10px',
      position : 'absolute',
      right : '3%',
      top : '125%',
      background : 'black',
      '&::before' : {
         content: '""',
         display : 'block',
         width : 0,
         height : 0,
         borderTop : '12px solid transparent',
         borderBottom : '12px solid black',
         borderRight : '12px solid transparent',
         borderLeft : '12px solid transparent',
         position : 'absolute',
         top : '-40%',
         right : '5%'
      }
   },
   inputSearch : {
      background : 'transparent',
      color : '#757575',
      border : 'none',
      padding : '.5em',
      fontSize : '1em',
      outline : 'none',
   },
   searchIcon : {
      padding : '0px',
      background : 'red',
      height:"100%",
      padding : '0px 10px',
      borderTopRightRadius:'3px',
      borderBottomRightRadius:'3px',
      cursor:'pointer'
   }
}));
