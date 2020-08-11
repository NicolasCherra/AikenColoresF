import { createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import { deepOrange } from "@material-ui/core/colors";

declare module '@material-ui/core/styles/createMuiTheme' {
  interface ThemeOptions {    
      themeName?: string  // optional
  }
}

const Tema = createMuiTheme({
  palette: {
    primary: {
      light: '#c8e6c9',
      main: '#43a047',
      dark: '#388e3c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#81d4fa',
      main: '#0277bd',
      dark: '#01579b',
      contrastText: '#fff',
    },
  }
});
export default Tema;