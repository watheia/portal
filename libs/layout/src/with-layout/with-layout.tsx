import React from "react"
import AOS from "aos"
import { useEffect, useState } from "react"
import { ColorScheme } from "@waweb/utils"
import { OverlayProvider, SSRProvider } from "react-aria"
import NProgress from "../components/nprogress"
import ResizeHandler from "../components/resize-handler"

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
      <SSRProvider>
        <OverlayProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ResizeHandler />
          <NProgress />
        </OverlayProvider>
      </SSRProvider>
    )
  }

  return WithLayout
}
