import Head from "next/head"
import React from "react"

import Layout from "../components/common/Layout"
import ContextProvider from "../lib/context"
import { CacheProvider, EmotionCache } from "@emotion/react"
import { createEmotionCache } from "@watheia/helpers"
import { AppProps } from "next/app"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

import "@waweb/assets.styles/bootstrap.min.css"
import "@waweb/assets.styles/globals.css"
import "@waweb/assets.styles/index.css"

// if (typeof window !== "undefined") {
//   require("lazysizes/plugins/attrchange/ls.attrchange.js")
//   require("lazysizes/plugins/respimg/ls.respimg.js")
//   require("lazysizes")
// }

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps
}: MyAppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
    <CacheProvider value={emotionCache}>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </CacheProvider>
  </>
)

export default MyApp
