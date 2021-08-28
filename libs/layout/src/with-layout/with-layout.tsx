import * as React from "react"
import { Theme } from "@waweb/theme"
import Head from "next/head"
import { useRouter } from "next/router"
import AOS from "aos"
import { Paper } from "@material-ui/core"
import { useEffect, useState } from "react"
import { ColorScheme } from "@waweb/model"

export interface LayoutProps {
  children: Element
  themeMode: ColorScheme
  themeToggler?: () => void
}

export const useDarkMode = () => {
  const [themeMode, setTheme] = useState<ColorScheme>("light")
  const [mountedComponent, setMountedComponent] = useState(false)

  const setMode = (mode: ColorScheme) => {
    window.localStorage.setItem("themeMode", mode)
    setTheme(mode)
  }

  const themeToggler = () => {
    themeMode === "light" ? setMode("dark") : setMode("light")
  }

  useEffect(() => {
    const localTheme = (window.localStorage.getItem("themeMode") as ColorScheme) ?? "light"
    setTheme(localTheme)
    setMountedComponent(true)
    AOS.refresh()
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [themeMode])

  return [themeMode, themeToggler, mountedComponent]
}

/**
 *
 * @param Component TODO get some actual generic types on this B'
 * @param Layout
 * @param pageProps
 * @returns
 */
export default function withLayout(
  Component: any,
  Layout: any,
  pageProps?: Record<string, any>
) {
  function WithLayout(): JSX.Element {
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

    const [themeMode, themeToggler, mountedComponent] = useDarkMode()

    if (!mountedComponent) return <div />

    return (
      // <Theme colorScheme={themeMode as ColorScheme}>
      //   <Paper elevation={0}>
      <Layout themeMode={themeMode as ColorScheme} themeToggler={themeToggler}>
        <Component themeMode={themeMode as ColorScheme} {...pageProps} />
      </Layout>
      //   </Paper>
      // </Theme>
    )
  }

  return WithLayout
}
