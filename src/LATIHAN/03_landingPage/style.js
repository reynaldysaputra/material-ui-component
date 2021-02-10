import { makeStyles } from "@material-ui/core";
import { themeLanding } from './theme';
import bg from './bg.jpg';

export const useStyleLanding = makeStyles(({
   rootPage : {
      width : '100%',
      height : 'auto',
      backgroundImage : `url(${bg})`,
      backgroundSize : 'cover',
      backgroundRepeat : 'no-repeat',
      [themeLanding.breakpoints.down('md')] : {
         paddingBottom : '5vh'
      }
   },
   header : {
      display : 'flex',
      height : '100vh',
      justifyContent : 'center',
      alignItems : 'center',
      textAlign : 'center',
      flexDirection : 'column',
   },
   titleHeader : {
      fontWeight : 'bold',
      color : '#fff',
      textAlign : 'center'
   },
   appBarContainer :{
      display : 'flex',
      justifyContent : 'space-between',
      alignItems : 'center',
      fontSize : '20px',
   },
   appBarTitle : {
      color : 'white',
      fontSize : '1.5em',
      fontWeight : 'bold !important',
      cursor : 'pointer'
   },
   colorHeader : {
      color : themeLanding.palette.primary.main,
   },
   iconMenu : {
      color : '#fff',
      fontSize : '1.2em'
   },
   goDown : {
      marginTop : '5%',
      position : 'absolute'
   },
   content1 : {
      height : '100vh',
      [themeLanding.breakpoints.down('md')] : {
         height : 'auto'
      }
   },
   cardMediaImg : {
      height: 400
   },
   gridContainerDividerContent1 : {
      height:'20vh', 
      textAlign:'center',
      [themeLanding.breakpoints.down('md')] : { 
         height : '0vh',
         marginTop : '-2%'
      }
   },
   dividerCard : {
      background : 'white',
      textAlign:'center',
      width : '10%',
      [themeLanding.breakpoints.down('md')] : { 
         width : '80%',
         height : '1vh'
      }
   },
   ExploreIcon : {
      border : `2px solid ${themeLanding.palette.primary.main}`,
      borderRadius:'50px',
      background : 'black',
      color : themeLanding.palette.primary.main,
      fontSize : '1.3em'
   }
}));