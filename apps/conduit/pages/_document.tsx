import { extractCritical } from "@emotion/server"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { SITE_DESCRIPTION, META_DESCRIPTION, LOCALE, SITE_NAME } from "@watheia/model"
import React from "react"
// import createEmotionServer from "@emotion/server/create-instance"

import { getURL } from "@watheia/helpers"
// import { createEmotionCache } from "@watheia/helpers"

interface IProps {
  css: any
}

class MyDocument extends Document<IProps> {
  // static async getInitialProps(ctx) {
  //   const originalRenderPage = ctx.renderPage
  //   const cache = createEmotionCache()
  // console.log("cache =", cache)
  // ctx.renderPage = () =>
  //   originalRenderPage({
  //     enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />
  //   })

  //   const initialProps = await Document.getInitialProps(ctx)
  //   const { html, head } = ctx.renderPage()
  //   const styles = flush()
  //   const emotionStyles = extractCritical(html)
  //   return { ...emotionStyles, ...initialProps, html, head, styles }
  // }

  render() {
    // const { ids }: any = this.props

    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />
          <meta key="googlebot" name="googlebot" content="index,follow" />
          <meta name="google" content="notranslate" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="keywords"
            content="webapp,microfrontend,agency,consulting,development,freelancer"
          />
          <meta property="og:locale" content={LOCALE} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_DESCRIPTION} />
          <meta property="og:description" content={META_DESCRIPTION} />
          <meta property="og:url" content={getURL()} />
          <meta property="og:image" content="https://cdn.watheia.org/assets/wa-card.png" />
          <meta property="twitter:card" content={SITE_NAME} />
          <meta property="twitter:url" content={getURL()} />
          <meta property="twitter:title" content={SITE_DESCRIPTION} />
          <meta property="twitter:description" content={SITE_DESCRIPTION} />
          <meta
            property="twitter:image"
            content="https://cdn.watheia.org/assets/wa-card.png"
          />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon-180x180.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="194x194" href="/favicon-194x194.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#04bfbf" />
          <meta name="apple-mobile-web-app-title" content="Watheia" />
          <meta name="application-name" content="Watheia" />
          <meta name="msapplication-TileColor" content="#fafbfb" />
          <meta name="theme-color" content="#fafbfb"></meta>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
              "@context": "http://schema.org/",
              "@type": "Organization",
              "url": "https://watheia.app/",
              "logo": "https://cdn.watheia.org/assets/logo.png",
              "sameAs": [
                "https://waweb.vercel.app",
                "https://preview.watheia.app",
              ],
            }`
            }}
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="stylesheet"
            href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
          />
          <link
            rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic&display=swap"
          />
          {/* <style
            data-emotion-css={ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
