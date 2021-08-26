import { createTheme } from "@material-ui/core/styles"

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#04BFBF"
    },
    secondary: {
      main: "#556cd6"
    },
    error: {
      main: "#590B35"
    },
    text: {
      primary: "#110f10",
      secondary: "#201c1d"
    }
  }
})

export default theme
