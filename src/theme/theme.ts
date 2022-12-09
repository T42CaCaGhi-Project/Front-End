import { createTheme } from "@mui/material/styles";

// A custom theme for the app
const theme = createTheme({
  components: {
    MuiInputBase:{
      
    }
  },
  palette: {
    primary: {
      main: "#007b00",
      light: "#3EAB34",
    },
    secondary: {
      main: "#3EAB34",
      light: "#74DE63",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ffa726",
    },
    success: {
      main: "#66bb6a",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
