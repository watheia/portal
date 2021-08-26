import React, { HTMLAttributes } from "react"
import Head from "next/head"

import Header from "../header"
import Footer from "../footer"

// import { useRouter } from "next/router"

export type TopLayoutProps = { meta?: Record<string, any> } & HTMLAttributes<HTMLDivElement>

export default function TopLayout({ children, meta: pageMeta, ...props }: TopLayoutProps) {
  // const router = useRouter()
  const meta = {
    title: "Gatekeeper",
    description: "by Watheia Labs",
    cardImage: "/og.png",
    ...pageMeta
  }
  const basePath = "/"

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://watheia.app${basePath}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
      </Head>
      <div {...props}>{children}</div>
    </>
  )
}
