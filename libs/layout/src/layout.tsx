import { HtmlHTMLAttributes } from "react"
import { navigation } from "@watheia/navigator"
import Paper from "./paper"
import Footer from "./footer"
import SEO, { SEOProps } from "./seo"
import clsx from "clsx"
import styles from "./layout.module.css"
import Header from "./header"

export type LayoutProps = { meta?: SEOProps } & HtmlHTMLAttributes<HTMLDivElement>

export const Layout = ({ className, children, meta, ...props }: LayoutProps) => {
  return (
    <>
      <SEO {...meta} />
      <div className={clsx(styles.root, className)} {...props}>
        <Header navigation={navigation} />
        <main>
          <Paper>{children}</Paper>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
