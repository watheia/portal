import React from "react"
import { AppProps } from "next/app"
import { Layout } from "@watheia/layout"

import "@waweb/assets.styles/index.css"
import { SessionProvider } from "@watheia/auth"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default CustomApp
