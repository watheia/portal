import { HTMLAttributes } from "react"
import Head from "next/head"
import Header from "../components/header"
import Footer from "../components/footer"
import { SITE_NAME, SITE_URL, TWITTER_USER_NAME } from "@waweb/model"
import { useRouter } from "next/router"

export type PageMeta = {
  title: string | null
  description: string | null
  image?: string | null
  url?: string | null
}

export type PageProps = {
  meta: PageMeta
  children: React.ReactNode
  fullViewport?: boolean
} & HTMLAttributes<HTMLDivElement>

export type SeoProps = {
  title: string
  url: string
  description: string
  image: string
}

const SEO = ({ title, url, description, image }: SeoProps): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:url" content={url} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:site" content={`@${TWITTER_USER_NAME}`} />
    <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
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
        content={image.startsWith("https://") ? image : `${SITE_URL}${image}`}
      />
    )}
  </Head>
)

/* This example requires Tailwind CSS v2.0+ */
export default function Page({ children, className, meta, ...props }: PageProps) {
  const router = useRouter()
  const image = meta?.image || "https://cdn.watheia.org/assets/wa-card.png"
  const title = meta?.title || SITE_NAME
  const url = meta?.url || `${SITE_URL}${router.asPath}`
  const description = meta?.description || SITE_NAME
  return (
    <>
      <SEO title={title} url={url} description={description} image={image} />
      <Header title={title} />
      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-shark-50 rounded-lg shadow px-1 py-1 sm:px-2 sm:py-2">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
