import { HtmlHTMLAttributes } from "react"
import Paper from "./paper"
import Footer from "./footer"
import SEO, { SeoProps } from "./seo"
import clsx from "clsx"
import styles from "./layout.module.css"
import { Navbar, navigation } from "@watheia/navigation"

export type LayoutProps = { meta?: SeoProps } & HtmlHTMLAttributes<HTMLDivElement>

export const Layout = ({ className, children, meta, ...props }: LayoutProps) => {
  return (
    <>
      <SEO {...meta} />
      <div className={clsx(styles.root, className)} {...props}>
        <header className={styles.header}>
          <Navbar navigation={navigation} />
        </header>
        <main>
          <Paper>{children}</Paper>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
