/**
 * Copyright 2021 Watheia Labs, LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { getURL } from "@watheia/helpers"
import { LOCALE, META_DESCRIPTION, SITE_DESCRIPTION, SITE_NAME } from "@watheia/model"
import Document, { Html, Head, Main, NextScript } from "next/document"

export default class CustomDocument extends Document {
  render() {
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
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
