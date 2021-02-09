import { createMuiTheme } from "@material-ui/core";

export const themeNav = createMuiTheme({
   palette : {
      primary : {
         main : '#151B1F'
      }
   },
   overrides : {
      MuiLink :  {
         root : {
            cursor : 'pointer'
         }
      }
   },
   props : {
      MuiLink : {
         underline : 'none',
         color : 'inherit'
      },
   }
})
