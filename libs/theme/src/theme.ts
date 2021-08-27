import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
  Theme,
  Typography
} from "@material-ui/core"
import { light, dark } from "./palette"
import { ColorScheme } from "@waweb/utils"
import { grey } from "@material-ui/core/colors"

export const createTheme = (colorScheme: ColorScheme): Theme => {
  const rawTheme = responsiveFontSizes(
    createMuiTheme({
      palette: colorScheme === "light" ? light : dark,
      zIndex: {
        appBar: 1200,
        drawer: 1100
      },
      typography: {
        fontFamily: "Lato, sans-serif",
        fontSize: 14,
        fontWeightLight: 300, // Work Sans
        fontWeightRegular: 400, // Work Sans
        fontWeightMedium: 700 // Roboto Condensed
      }
    })
  )

  const fontHeader: Partial<typeof Typography> = {
    color: rawTheme.palette.text.primary,
    fontWeight: rawTheme.typography.fontWeightMedium,
    fontFamily: "'Adobe Clean Serif', serif",
    textTransform: "uppercase"
  }

  return {
    ...rawTheme,
    palette: {
      ...rawTheme.palette,
      background: {
        ...rawTheme.palette.background,
        default: rawTheme.palette.common.white
      }
    },
    typography: {
      ...rawTheme.typography,
      h1: {
        ...rawTheme.typography.h1,
        ...fontHeader
      },
      h2: {
        ...rawTheme.typography.h2,
        ...fontHeader
      },
      h3: {
        ...rawTheme.typography.h3,
        ...fontHeader
      },
      h4: {
        ...rawTheme.typography.h4,
        ...fontHeader
      },
      h5: {
        ...rawTheme.typography.h5,
        fontWeight: rawTheme.typography.fontWeightLight
      },
      h6: {
        ...rawTheme.typography.h6,
        ...fontHeader
      },
      subtitle1: {
        ...rawTheme.typography.subtitle1
      },
      body1: {
        ...rawTheme.typography.body2,
        fontWeight: rawTheme.typography.fontWeightRegular
      },
      body2: {
        ...rawTheme.typography.body1
      }
    }
  }
}

export default createTheme
