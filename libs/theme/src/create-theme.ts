import { createTheme as createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { light, dark } from "./palette"
import { ColorScheme } from "@waweb/utils"

export const createTheme = (colorScheme: ColorScheme) =>
  responsiveFontSizes(
    createMuiTheme({
      palette: colorScheme === "light" ? light : dark,
      typography: {
        fontFamily: "Lato"
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100
      }
    })
  )

export default createTheme
