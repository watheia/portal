import { SITE_URL, TWITTER_USER_NAME } from "@watheia/model"
import Head from "next/head"
import { getURL } from "@watheia/util.helpers"
import { SeoMeta } from "@watheia/model"
import appleTouchIcon from "@waweb/assets.images/apple-touch-icon.png"
import favicon32 from "@waweb/assets.images/favicon-32x32.png"
import favicon16 from "@waweb/assets.images/favicon-16x16.png"

export const SEO = ({ title, url, description, image }: SeoMeta): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:url" content={url} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
    <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
    <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
    <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
    <link rel="manifest" href="/site.webmanifest" />
    {/* <link
      rel="preload"
      href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    /> */}
    {image && (
      <meta
        property="og:image"
        content={image.startsWith("https://") ? image : `${getURL()}${image}`}
      />
    )}
  </Head>
)

export default SEO
