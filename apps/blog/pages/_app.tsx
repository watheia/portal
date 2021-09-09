import { AppProps } from "next/app"
import { Layout } from "@watheia/layout"

import "@waweb/assets.styles/index.css"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default CustomApp
