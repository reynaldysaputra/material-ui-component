import { createMuiTheme, useTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[300],
    },
    secondary: {
      main: green['A700'],
    },
  },
  typography : {
    h1 : {
      fontWeight : 700
    }
  }
});

export default theme;