import Document, { Html, Head, Main, NextScript } from "next/document"
import React from "react"
import { SEO } from "@watheia/layout"
interface IProps {
  css: any
}

class MyDocument extends Document<IProps> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <SEO />
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
