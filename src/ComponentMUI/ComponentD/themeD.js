import { createMuiTheme } from "@material-ui/core";
import { blue, grey } from "@material-ui/core/colors";

const themeD = createMuiTheme({
   palette: {
      primary: {
        main: blue[800],
      },
      secondary: {
        main: grey['A400'],
      },
    },
})

export default themeD;