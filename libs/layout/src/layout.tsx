import { HtmlHTMLAttributes } from "react"
import Header from "./header"
import Paper from "./paper"
import { navigation, userNavigation } from "@watheia/model"
import Footer from "./footer"

import "./layout.module.css"

/* eslint-disable-next-line */
export type LayoutProps = HtmlHTMLAttributes<HTMLDivElement>

export const Layout = ({ className, children, ...props }: LayoutProps) => {
  return (
    <div className={className} {...props}>
      <Header navigation={navigation} userNavigation={userNavigation} />
      <main>
        <Paper>{children}</Paper>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
