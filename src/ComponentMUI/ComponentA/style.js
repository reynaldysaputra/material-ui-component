import {makeStyles,fade} from '@material-ui/core';

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
   },
   menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menuDesktop : {
       display : 'none',
       [theme.breakpoints.up('sm')] : {
          display : 'block'
       }
    },
    menuMobile : {
      display : 'block',
      [theme.breakpoints.up('sm')] : {
         display : 'none'
      }
    },
    search : {
      position: 'relative',
      display : 'flex',
      alignItems : 'center',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
         backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')] : {
         marginLeft: theme.spacing(1),
         width: 'auto',
      },
    },
   searchIcon : {
      margin : '0px 10px'
    },
    inputRoot: {
      color: 'inherit',
    },
    inputSearch: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      // transition: theme.transitions.create('width'),
      transition: '.5s',
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
   mobileStyle :{
      width : '100%',
      height : '70vh',
      margin : 'auto',
      position : 'relative',
      [theme.breakpoints.up('md')] : {
         width : '40%',
         borderRadius : '20px',
         padding : '0px'
      },
      overflow : 'scroll'
    },
    appBarMobile : {
      position : 'sticky',
      bottom : 0,
      offset: theme.mixins.toolbar,
      borderTopLeftRadius : '0px',
      borderTopRightRadius : '0px',
      borderRadius : '20px',
      boxShadow : 'none'
      // top : 'auto'
    }
}))