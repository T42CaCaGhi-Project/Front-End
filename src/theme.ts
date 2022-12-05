import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({  
  components:{
    MuiTypography:{
      
    }
  }
  palette: {
    primary: {
      main: "#3EAB34",
    },
    secondary: {
      main: "#74DE63",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
