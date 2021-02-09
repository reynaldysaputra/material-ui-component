import {
   fade,
   makeStyles
} from '@material-ui/core';

export const UseStyleFinal = makeStyles((theme) => ({
   cardMediaPokedex: {
      width: '130px',
      height: '130px',
      margin: 'auto',
   },
   containerSearch : {
      display : 'flex',
      alignItems : 'center',
      padding : '2px',
      boxSizing: 'border-box',
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
         backgroundColor: fade(theme.palette.common.white, 0.25),
      },
   },
   searchInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft : '10px',
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '12ch',
         '&:focus': {
            width: '20ch',
         },
      },
   },
}))