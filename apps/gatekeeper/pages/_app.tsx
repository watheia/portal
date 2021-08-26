import { useEffect } from "react"
import { Theme } from "@waweb/theme"
import "../styles/index.css"
import "../styles/chrome-bug.css"

export default function WaApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove("loading")
  }, [])

  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}
