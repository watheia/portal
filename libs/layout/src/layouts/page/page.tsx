import { HTMLAttributes } from "react"
import clsx from "clsx"
import { Navigator, Footer } from "@waweb/organisms"
import { navigation } from "@waweb/dato"

/* eslint-disable-next-line */
export type PageLayoutProps = HTMLAttributes<HTMLDivElement>

/* This example requires Tailwind CSS v2.0+ */
export default function PageLayout({ children, className, ...props }: PageLayoutProps) {
  return (
    <div className={clsx("bg-shark-100", className)} {...props}>
      <div className="relative overflow-hidden">
        <header>
          <Navigator navigation={navigation.primary} />
        </header>
        <main>{children}</main>
        <footer>
          <Footer navigation={navigation} />
        </footer>
      </div>
    </div>
  )
}
