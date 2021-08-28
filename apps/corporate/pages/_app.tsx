import { AppProps } from "next/app"
import "@waweb/assets/styles/index.css"
import "@waweb/assets/styles/chrome-bug.css"

function WaApp({ Component, pageProps }: AppProps) {
  return (
    <div className="page">
      <Component {...pageProps} />
    </div>
  )
}

export default WaApp
