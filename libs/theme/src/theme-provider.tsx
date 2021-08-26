import React, { useEffect } from "react"
import { HTMLAttributes } from "react"
import AOS from "aos"
import { ColorScheme } from "@waweb/utils"
import useColorScheme from "./use-color-scheme"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { createTheme } from "./create-theme"

/* eslint-disable-next-line */
export type ThemeProps = { colorScheme?: ColorScheme } & HTMLAttributes<HTMLDivElement>

export function Theme({ children, ...props }: ThemeProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: "ease-in-out"
    })
  }, [])

  const [colorScheme, _, mountedComponent] = useColorScheme()

  if (!mountedComponent) return <div />

  return (
    <ThemeProvider theme={createTheme(colorScheme as ColorScheme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default Theme
