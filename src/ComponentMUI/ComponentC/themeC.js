import { createMuiTheme } from "@material-ui/core";
import { red, yellow } from "@material-ui/core/colors";

const themeC = createMuiTheme({
   palette: {
      primary: {
        main: red[800],
      },
      secondary: {
        main: yellow[700],
      },
    },
})

export default themeC;