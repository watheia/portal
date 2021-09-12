import clsx from "clsx"
import { HtmlHTMLAttributes } from "markdown-to-jsx/node_modules/@types/react"
import Link from "next/link"
import { isActiveRoute } from "../../util/helpers"
import { Route } from "../../util/types"
import styles from "./TabNav.module.css"

export type TabNavProps = {
  routes: Route[]
  activeRoute: string
} & HtmlHTMLAttributes<HTMLDivElement>

export function TabNav({ routes, activeRoute, className, ...props }: TabNavProps) {
  return (
    <div className={styles.tabs}>
      {routes.map((r) => (
        <Link key={r.name} href={r.href}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            className={clsx(styles.tab, {
              [styles.tabActive]: isActiveRoute(r, activeRoute)
            })}
          >
            {r.name}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default TabNav
