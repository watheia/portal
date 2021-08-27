import * as React from "react"
import { Theme } from "@waweb/theme"
import { useEffect } from "react"
import AOS from "aos"
import { usePalette } from "@waweb/utils"
import { ColorScheme } from "@waweb/model"

interface Props {
  colorScheme: ColorScheme
  themeToggler?: () => void
}

export default function withLayout<P>(
  Component: React.ComponentType<P & Props>,
  Layout: React.ComponentType<Props>
) {
  function WithRoot(props: P) {
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

    const [colorScheme, _, mountedComponent] = usePalette()

    if (!mountedComponent) return <div />
    const mode = colorScheme as ColorScheme
    return (
      <Theme colorScheme={mode}>
        <Layout colorScheme={mode}>
          <Component {...props} colorScheme={mode} />
        </Layout>
      </Theme>
    )
  }

  return WithRoot
}
