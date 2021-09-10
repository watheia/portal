import { HtmlHTMLAttributes } from "react"
import Header from "./header"
import Paper from "./paper"
import { navigation, userNavigation, user } from "@watheia/model"
import Footer from "./footer"

import "./layout.module.css"
import SEO, { SeoProps } from "./seo"

export type LayoutProps = { meta?: SeoProps } & HtmlHTMLAttributes<HTMLDivElement>

export const Layout = ({ className, children, meta, ...props }: LayoutProps) => {
  return (
    <>
      <SEO {...meta} />
      <div className={className} {...props}>
        <Header navigation={navigation} userNavigation={userNavigation} user={user} />
        <main>
          <Paper>{children}</Paper>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
