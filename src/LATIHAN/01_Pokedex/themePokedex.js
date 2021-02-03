import { createMuiTheme } from "@material-ui/core";
import { purple, green, grey, blue, yellow } from "@material-ui/core/colors";

const themePokedex = createMuiTheme({
   palette: {
      primary: {
         main: blue[800],
      },
      secondary: {
         main: yellow[600],
      },
   },
})

export default themePokedex;