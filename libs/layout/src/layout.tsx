import { HtmlHTMLAttributes } from "react"
import Header from "./header"
import Paper from "./paper"
import { navigation, userNavigation, user } from "@watheia/model"
import Footer from "./footer"
import SEO, { SeoProps } from "./seo"
import clsx from "clsx"
import styles from "./layout.module.css"

export type LayoutProps = { meta?: SeoProps } & HtmlHTMLAttributes<HTMLDivElement>

export const Layout = ({ className, children, meta, ...props }: LayoutProps) => {
  return (
    <>
      <SEO {...meta} />
      <div className={clsx(styles.root, className)} {...props}>
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
