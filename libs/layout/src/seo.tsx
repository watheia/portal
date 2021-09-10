import { SITE_NAME, SITE_URL, TWITTER_USER_NAME } from "@watheia/model"
import Head from "next/head"
import { getURL } from "@watheia/util.helpers"
import appleTouchIcon from "@waweb/assets.images/apple-touch-icon.png"
import favicon32 from "@waweb/assets.images/favicon-32x32.png"
import favicon16 from "@waweb/assets.images/favicon-16x16.png"
import { useRouter } from "next/router"

export interface SeoProps {
  title?: string
  url?: string
  description?: string
  image?: string
}

export const SEO = ({ title, url, description, image }: SeoProps): JSX.Element => {
  const router = useRouter()
  image = image || "https://cdn.watheia.org/assets/wa-card.png"
  title = title || SITE_NAME
  url = url || `${getURL()}${router.asPath}`
  description = description || SITE_NAME
  return (
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      {image && (
        <meta
          property="og:image"
          content={image.startsWith("https://") ? image : `${getURL()}${image}`}
        />
      )}
    </Head>
  )
}

export default SEO
