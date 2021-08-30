import { useEffect } from "react"
import { Theme } from "@waweb/theme"
import "@waweb/assets/styles/index.css"
import "@waweb/assets/styles/chrome-bug.css"

export default function WaApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove("loading")
  }, [])

  return (
    <Theme>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </Theme>
  )
}
