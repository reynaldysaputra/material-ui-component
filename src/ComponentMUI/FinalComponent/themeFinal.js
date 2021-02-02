import { createMuiTheme } from "@material-ui/core";
import { purple, green, grey } from "@material-ui/core/colors";

const themeFinal = createMuiTheme({
   palette: {
      primary: {
        main: green[800],
      },
      secondary: {
        main: purple[600],
      },
    },
})

export default themeFinal;